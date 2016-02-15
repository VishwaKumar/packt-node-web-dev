var count = 0;

exports.next = function() { return count++; }
exports.prev = function() { return --count; }