var cdn = 'https://d1vda6a1j3uyzl.cloudfront.net/';

module.exports.cdn = function () {
    return cdn;
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