// A hook that logs service method before, after and error

module.exports = {
    enrichUser: function () {
        return function (context) {
            const id = context.params.user._id;

            context.data.user = id;

            return context;
        };
    },
    filterForCurrentUser: function () {
        return function (context) {
            const id = context.params.user._id;

            context.params.query.user = id;

            return context;
        };
    },
};
