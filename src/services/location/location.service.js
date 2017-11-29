// Initializes the `location` service on path `/location`
const createService = require('feathers-mongoose');
const createModel = require('../../models/location.model');
const hooks = require('./location.hooks');
const filters = require('./location.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'location',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/location', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('location');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
