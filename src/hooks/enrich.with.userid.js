// A hook that logs service method before, after and error
// const { } = require('feathers-hooks-common');
const { populate } = require('feathers-hooks-common');

module.exports = {
    enrichUser: function () {
        const userSchema = {
            include: {
                service: 'users',
                nameAs: 'user',
                parentField: 'user',
                childField: '_id'
            }
        };

        return populate({ schema: userSchema });
    },
    enrichUserId: function () {
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
