var cdn = 'https://d1vda6a1j3uyzl.cloudfront.net/';

module.exports.cdn = function (items) {
    if (!items) {
        return cdn;
    }
    var o = items instanceof Array ? items : [items];
    o.forEach(function (item) {
        var photos = item.photos;
        if (!photos) {
            return;
        }
        photos.forEach(function (photo, i) {
            photos[i] = cdn + photo;
        });
    });
    return items;
};