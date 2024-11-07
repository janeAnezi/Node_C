exports.dateTime = function() {
    let year = new Date()
    return year.getFullYear();
}

exports.month = function() {
    let month = new Date()
    return month.getMonth()
}