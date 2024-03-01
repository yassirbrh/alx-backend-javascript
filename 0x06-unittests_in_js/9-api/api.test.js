const request = require('request');
const { expect } = require('chai');

describe('aPI test', () => {
  it('test for GET /', () => new Promise((done) => {
    request.get('http://localhost:7865/', (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  }));
  it('test for GET /cart/:id for a valid number', () => new Promise((done) => {
    request.get('http://localhost:7865/cart/47', (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 47');
      done();
    });
  }));
  it('test for GET /cart/:id for a negative number', () => new Promise((done) => {
    request.get('http://localhost:7865/cart/-47', (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  }));
  it('test for GET /cart/:id for a non-numeric value', () => new Promise((done) => {
    request.get('http://localhost:7865/cart/d200-44a5-9de6', (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
   	});
  }));
});
