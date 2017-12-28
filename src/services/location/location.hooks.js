const { authenticate } = require('feathers-authentication').hooks;
const { enrichUser, filterForCurrentUser } = require('../../hooks/enrich.with.userid');

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [filterForCurrentUser()],
    get: [filterForCurrentUser()],
    create: [enrichUser()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
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
