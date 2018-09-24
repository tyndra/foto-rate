'use strict';

var storage = require('../impl/dbStorage');

exports.all_fotos = function(req, res) {
    get_data_helper(req).then(function(body) {
        var path = req.params.path;

        console.log("all_fotos:" + JSON.stringify(body));

        storage.get_fotos(path, body.rating, body.includeHigherRating, body.cat).then(function(result) {
            console.log("all_fotos:" + path + ", found: " + result.length + " files");
            res.json(result);
        }, function(err) {
            console.log("all_fotos:" + err);
        });
    }, function(err) {
        console.log("all_fotos:" + err);
    });
};

exports.get_foto = function(req, res) {
    get_foto_helper(res, req.params.path, false);
};

exports.get_foto_resized = function(req, res) {
    get_foto_helper(res, req.params.path, true);    
};

exports.rate_foto = function(req, res) {
    get_data_helper(req).then(function(body) {
        var path = req.params.path;

        console.log("rate_foto:" + JSON.stringify(body));
        var fotoInfo = {
            name: body.name,
            oldCat: body.oldCat,
            newCat: body.newCat,
            oldRating: body.oldRating,
            newRating: body.newRating,
        };
        storage.rate_foto(path, fotoInfo).then(function(fi) {
            console.log("rate_foto: OK");
            res.json(fi);
        }, function(err) {
            console.log("rate_foto:" + err);
        });

    }, function(err) {
        console.log("rate_foto:" + err);
    });
};

exports.delete_foto = function(req, res) {
    res.json({});  
};

exports.arrange = function(req, res) {
    get_data_helper(req).then(function(body) {
        console.log("arrange:" + JSON.stringify(body));
        storage.arrange(req.params.path, body.rating, body.includeHigherRating, body.cat, body.moveOrf).then(function(result) {
            console.log("arrange: OK");
            res.json(result);
        }, function(err) {
            console.log("arrange:" + err);
        });
    }, function(err) {
        console.log("arrange:" + err);
    });
};

exports.get_categories = function(req, res){
    storage.get_categories(req.params.path).then(function(result) {
        console.log("get_categories: OK" + result);
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(result);
    }, function(err) {
        console.log("get_categories:" + err);
    });

}

var get_data_helper = function(req) {
    let body = [];
    return new Promise(function(resolve, reject) {
        req.on('data', (chunk) => {
            body.push(chunk);
        }).on('end', () => {
            body = Buffer.concat(body).toString();
            resolve(JSON.parse(body));
        });
    });
};

var get_foto_helper = function(res, path, resize) {
    var dotIndex = path.lastIndexOf(".");
    var ext = path.substring(dotIndex + 1).toUpperCase();
    
    if (resize){
        const supportedExt = [ 'JPEG', 'JPG',  'PNG', 'WEBP', 'GIF', 'SVG', 'TIFF' ]; 
        resize = supportedExt.find(function(element) {
            return element === ext;
        });

    }

    console.log("get_foto_helper: " + path + (resize ? ", resize" : ''));

    if (resize) {
        res.type('image/PNG');
        storage.get_foto(path, 'png', null, 1080).pipe(res);
    }
    else {
        res.type('image/' + ext);
        storage.get_foto(path).pipe(res);
    }
};