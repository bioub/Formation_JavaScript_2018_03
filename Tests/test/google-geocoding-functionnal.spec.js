// https://maps.googleapis.com/maps/api/geocode/outputFormat

const chai = require('chai');
const { spy } = require('sinon');
const chaiHttp = require('chai-http');
const expect = chai.expect;
chai.use(chaiHttp);

const config = require('../config');

describe('Google Geocoding API', () => {
  it('should return right JSON', async () => {

    const res = await chai.request('https://maps.googleapis.com')
      .get('/maps/api/geocode/json?address=20+passage+de+la+bonne+graine+Paris&key=' + config.key);

    expect(res).to.have.status(200);
    expect(res.body.status).to.equals('OK');
    expect(res.body.results[0].geometry.location.lat).to.equals(48.8523893);
    expect(res.body.results[0].geometry.location.lng).to.equals(2.3772778);

  });
});