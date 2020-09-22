modules.exports = {
    errorHandler: function(fn) {
        function(req, res, next) {
            Promise.resolve(fn(req, res, next))
                .catch(next);
        }
    }
}