const users = require('./users/users.service.js');
const location = require('./location/location.service.js');
const itemdefinition = require('./itemdefinition/itemdefinition.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(users);
  app.configure(location);
  app.configure(itemdefinition);
};
