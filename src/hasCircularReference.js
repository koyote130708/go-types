module.exports = function hasCircularReference(obj, path, seen) {
    var objs = [];
    for (var k in obj) {
        var val = obj[k];
        objs[objs.length] = val;
        if (seen.indexOf(val) >= 0) {
            return true;
        } else if (val instanceof Object) {
            if (hasCircularReference(val, path.concat(k), seen.concat(objs))) {
                return true;
            }
        }
    }
    return false;
};