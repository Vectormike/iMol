/* eslint-disable no-undef */
const app = require('../app');
const request = require('supertest');

describe('Product api', () => {
  it('should create/add a new product', async () => {
    const res = await request(app)
      .post('api/products')
      .send({
        name: 'Bra',
        price: '200'
      });
    expect(res.statusCode).toEqual(201);
  });

  it('should get all products', async () => {
    const res = await request(app).get('api/products');
    expect(res.statusCode).toEqual(200);
  });
});
