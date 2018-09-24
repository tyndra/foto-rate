var glob = require("glob")
var fs = require('fs');
var mv = require('mv');

exports.get_fotos = function(folder, rating, category) {
    return new Promise(function(resolve, reject) {

        // if (category != null && category.length > 0)
        //     folder += "/" + category;

        // if (rating > 0 && rating <= 5)
        //     folder += "/" + rating;

        var result = [];
        var options = {
            cwd: folder,
            matchBase : true,
            nocase: true
        };
        glob("*.jpg", options, function (er, files) {    
            if (er != null) {
                reject(err);
            }
            else {
                files.forEach(file => {
                    let name = file;
                    let fileRating = rating;
                    let fileCategory = category;

                    var tokens = file.split('/');
                    switch (tokens.length)
                    {
                        case 1:
                            name = tokens[0];
                            break;
                        case 2:
                            fileCategory = tokens[0];
                            name = tokens[1];
                            break;

                        case 3:
                            fileCategory = tokens[0];
                            fileRating = tokens[1];
                            name = tokens[2];
                            break;
                    }
                    
                    let add = true;
                    if (category != null && category.length > 0 && fileCategory != category)
                        add = false;
                    if (rating > 0 && rating <= 5 && fileRating != rating)
                        add = false;

                    if (add)
                        result.push({name: name, rating: fileRating, cat: fileCategory});
                });
                resolve(result);
            }
        });
    });
};


exports.get_foto = function(pathname) {
    return new Promise(function(resolve, reject) {
        
        resolve(fs.readFileSync(pathname));
    });
};

exports.rate_foto = function(folder,  fotoInfo ) {
    return new Promise(function(resolve, reject) {
        var oldPath = folder;
        
        if (fotoInfo.oldCat != null && fotoInfo.oldCat.length > 0)
            oldPath += "/" + fotoInfo.oldCat;
        
        if (fotoInfo.oldRating > 0 && fotoInfo.oldRating <= 5)
            oldPath += "/" + fotoInfo.oldRating;
        oldPath += "/" + fotoInfo.name;

        if (fotoInfo.newCat == null || fotoInfo.newCat.length == 0)
            fotoInfo.newCat = "other";

        var newPath = folder + "/" + fotoInfo.newCat;
        if (fotoInfo.newRating > 0 && fotoInfo.newRating <= 5)
            newPath += "/" + fotoInfo.newRating;
        
        newPath += "/" + fotoInfo.name;

        console.log("rate_foto old: " + oldPath + ",  new: " + newPath);

        mv(oldPath, newPath, {mkdirp: true},  function(err) {
            if (err != null)
                reject(err);
            else
                resolve({name: fotoInfo.name, rating: fotoInfo.newRating, cat: fotoInfo.newCat});
        });                
    });
};
