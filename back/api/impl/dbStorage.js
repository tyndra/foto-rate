var glob = require("glob");
var fs = require('fs');
var mv = require('mv');
var db = require('diskdb');
const sharp = require('sharp');

var connectToDb = function(folder) {
    db.connect(folder, ['images']);
}

var isMatch = function(image, rating, includeHigherRating, category){
    var add = true;
    if (category != null && category.length > 0 && image.cat != category)
            add = false;
    if (rating == -100 && (image.rating > 0 && image.rating <= 5)) {
        add = false;
    } else  if (rating > 0 && rating <= 5) {
        if ( (!includeHigherRating && image.rating != rating) || image.rating < rating) 
            add = false;
    }

    return add;
}

exports.get_fotos = function(folder, rating, includeHigherRating, category) {
    connectToDb(folder);
    return new Promise(function(resolve, reject) {        
        var options = {
            cwd: folder,
            matchBase : false,
            nocase: true,
            nodir: true
        };

        glob("*.*(jpg|jpeg|bmp|gif|png)", options, function (er, files) {    
            if (er != null) {
                reject(err);
            }
            else {                
                var result = [];    
                files.forEach(file => {
                    let image = db.images.findOne({ name: file });
                    if (!image) {
                        image = { name: file,  rating: -1,  cat: ''};
                        db.images.save(image);
                    }                        
            
                    if (isMatch(image, rating, includeHigherRating, category))
                        result.push(image);
                });
                resolve(result);
            }
        });
    });    
};


exports.get_foto = function(path, format, width, height) {
    var result;
    let readStream = fs.createReadStream(path);
    
    if (format){
        let transform = sharp();

        transform = transform.toFormat(format);
    
        if (width || height)
            transform = transform.resize(width, height);
        
        result = readStream.pipe(transform);
    }
    else{
        result = readStream;
    }
    
    return result;
};

exports.rate_foto = function(folder,  fotoInfo ) {
    return new Promise(function(resolve, reject) {
        connectToDb(folder);
        var query = {
            name: fotoInfo.name
        };
        var dataToBeUpdate = {
            rating: fotoInfo.newRating,  
            cat: fotoInfo.newCat,
        };
        
        var options = {
            multi: false,
            upsert: true
         };
         db.images.update(query, dataToBeUpdate, options)

        resolve({ name: fotoInfo.name,  rating: fotoInfo.newRating,  cat: fotoInfo.newCat });
    });    
};


var getRatingFolder = function(rating){
    var result = "";
    switch (rating) {
        case 1:    
            result = "1. Bad";
            break;

        case 2:    
            result = "2. Not Good";
            break;

        case 3:    
            result = "3. The Best";
            break;

        case 4:    
            result = "4. The Best of the Best";    
            break;

        case 5:    
            result = "5. The Very Best";    
            break;
    }

    return result;
}

exports.arrange = function(folder, rating, includeHigherRating, category, moveOrfFiles) {
    return new Promise(function(resolve, reject) {
        connectToDb(folder);
        var filesMoved = 0;
        var filesMoveErrors = 0;
        var filesSkipped = 0;

        let images = db.images.find();
        let count = images.length;

        if (count > 0){
            let updateStatus = () => {
                if (filesMoved + filesMoveErrors + filesSkipped == count){
                    console.log("arrange: filesMoved: " + filesMoved + ",  filesMoveErrors: " + filesMoveErrors + ",  filesSkipped: " + filesSkipped);
                    resolve({ filesMoved: filesMoved, filesMoveErrors: filesMoveErrors, filesSkipped: filesSkipped });
                }
            }

            images.forEach(image => {
                if(image.rating >= 0) {
                    if (isMatch(image, rating, includeHigherRating, category)) {
                        let source = folder + "/" + image.name;
                        let destFolder = folder + "/" + getRatingFolder(image.rating);
                        if (image.cat)
                        destFolder +=  "/" + image.cat;
                        let dest =  destFolder + "/" + image.name;
                        
                        mv(source, dest, {mkdirp: true},  function(err) {
                            if (err != null) {
                                console.error("arrange: source" + source + ",  dest: " + dest + ",  err: " + err);
                                filesMoveErrors++;
                                updateStatus();
                            }
                            else {
                                db.images.remove( {_id : image._id });
                                if (moveOrfFiles) {
                                    var dotIndex = image.name.lastIndexOf('.');
                                    if (dotIndex != -1){
                                        let orfName = image.name.substring(0, dotIndex) + ".orf";
                                        source = folder + "/" + orfName;
                                        dest =  destFolder + "/orf/" + orfName;
                                        if (fs.existsSync(source)) {
                                            mv(source, dest, {mkdirp: true},  function(err) {
                                                if (err != null) {
                                                    console.error("arrange: no orf file source" + source + ",  dest: " + dest + ",  err: " + err);
                                                    filesMoveErrors++;
                                                    updateStatus();
                                                }
                                                else {
                                                    filesMoved++;
                                                    updateStatus();
                                                    console.info("arrange: orf moved  source" + source + ",  dest: " + dest + ",  err: " + err);
                                                }
                                            });
                                        }else{
                                            filesMoved++;
                                            updateStatus();
                                            console.info("arrange: no orf file found  at " + source);
                                        }
                                    }
                                } else{
                                    filesMoved++;
                                    updateStatus();
                                }
                            }
                        });  
                    }else{
                        filesSkipped++;
                        updateStatus();
                    }
                }
            });
        } else{
            resolve({ filesMoved: 0, filesMoveErrors: 0, filesSkipped: 0 });
        }
    });    
};

exports.get_categories = function(folder) {
    return new Promise(function(resolve, reject) {
            resolve(fs.readFileSync('cat.json'));
    });    
};
