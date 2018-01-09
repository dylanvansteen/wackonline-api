const assert = require('assert');
const app = require('../../src/app');

describe('\'itemdefinition\' service', () => {
  it('registered the service', () => {
    const service = app.service('itemdefinition');

    assert.ok(service, 'Registered the service');
  });
});
