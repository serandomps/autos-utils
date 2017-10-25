var utils = require('utils');

var cdn = 'https://d1vda6a1j3uyzl.cloudfront.net/';

var autos;

module.exports.cdn = function (path, done) {
    if (autos) {
        return done(null, autos.cdn + (path || ''));
    }
    utils.sync('configs-boot-autos', function (did) {
        utils.configs('boot-autos', function (err, o) {
            if (err) {
                return did(err);
            }
            autos = o;
            did();
        });
    }, function (err) {
        if (err) {
            return done(err);
        }
        done(null, autos.cdn + (path || ''));
    });
};

module.exports.cdn288x162 = function (items) {
    if (!items) {
        return cdn + 'images/288x162/';
    }
    var o = items instanceof Array ? items : [items];
    o.forEach(function (item) {
        var photos = item.photos;
        if (!photos) {
            return;
        }
        var o = [];
        photos.forEach(function (photo, i) {
            o.push({
                id: photo,
                url: cdn + 'images/288x162/' + photo
            });
        });
        item.photos = o;
    });
    return items;
};

module.exports.cdn800x450 = function (items) {
    if (!items) {
        return cdn + 'images/800x450/';
    }
    var o = items instanceof Array ? items : [items];
    o.forEach(function (item) {
        var photos = item.photos;
        if (!photos) {
            return;
        }
        var o = [];
        photos.forEach(function (photo, i) {
            o.push({
                id: photo,
                url: cdn + 'images/800x450/' + photo
            });
        });
        item.photos = o;
    });
    return items;
};
