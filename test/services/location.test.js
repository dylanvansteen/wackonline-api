const assert = require('assert');
const app = require('../../src/app');
const faker = require('faker');
const request = require('supertest');

describe('\'location\' service', () => {

  before(function (done) {
    this.server = app.listen(3040);
    this.server.once('listening', () => {

      done();
    });
  });

  after(function (done) {
    this.server.close(done);
  });
  // Registers user service.
  it('registers the users service', () => {
    assert.ok(app.service('users'));
    assert.ok(app.service('location'));
  });
  describe('get', () => {

    it('generate data', (done) => {
      // const service = app.service('location');
      // const userService = app.service('users');
      const locations = [];
      const totalLocations = 200;
      for (let i = 0; i < totalLocations; i++) {
        locations.push({
          name: faker.company.companyName(),
          number: faker.company.bs(),
          type: faker.random.arrayElement(['Auction', 'Customer', 'Supplier', 'Carrier']),
          GLN: faker.finance.iban(),
        });
      }
      assert.ok(locations.length == totalLocations, 'locations are not added');

      request(app)
        .post('/authentication')
        .send({ email: 'dylanvansteen@gmail.com', password: 'Welkom01', strategy: 'local' })
        .expect(201)
        .then((res) => {
          assert.ok(res.body.accessToken);
          let i = 1;
          for (const loc of locations) {
            request(app)
              .post('/location')
              .set('Authorization', `Bearer ${res.body.accessToken}`)
              .send(loc)
              .expect(201)
              .then(() => {
                if (i == locations.length) {
                  done();
                }
                i++;
              });
          }
        });
    });
  });
  // return new Promise((resolve, reject) => {
  //   rp('http://localhost:3030/authenticate').then(body => {
  //     // body.accessToken


  //     for (const loc of locations) {
  //       rp('http://localhost:3030/location')
  //       // service.create(loc, null, (data) => {
  //       // assert.
  //       // });
  //     }

  //   })

  //   resolve();
  // })
  // assert.ok(service, 'Registered the service');





  // service.find(null, (data) => {

  //   assert.ok(data.total == 10000, 'locations are not in the service');
  // });
  // console.log(locations);
  // faker
  // service.
  // service.create()
});
