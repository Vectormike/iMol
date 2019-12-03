/* eslint-disable no-undef */
import app from '../../server';
import { request } from 'http';

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
