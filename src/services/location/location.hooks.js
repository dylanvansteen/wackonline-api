const { authenticate } = require('feathers-authentication').hooks;
const { enrichUserId, enrichUser, filterForCurrentUser } = require('../../hooks/user');

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [filterForCurrentUser()],
    get: [filterForCurrentUser()],
    create: [enrichUserId()],
    update: [enrichUserId()],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [enrichUser()],
    get: [enrichUser()],
    create: [enrichUser()],
    update: [enrichUser()],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
