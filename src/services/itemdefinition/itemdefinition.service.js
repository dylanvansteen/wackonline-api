// Initializes the `itemdefinition` service on path `/itemdefinition`
const createService = require('feathers-mongoose');
const createModel = require('../../models/itemdefinition.model');
const hooks = require('./itemdefinition.hooks');
const filters = require('./itemdefinition.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'itemdefinition',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/itemdefinition', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('itemdefinition');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
