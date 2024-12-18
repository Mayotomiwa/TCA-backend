const request = require('supertest');
const app = require('../app');

describe('Contacts API', () => {
  it('should create a new contact', async () => {
    const res = await request(app)
      .post('/api/contacts')
      .set('Authorization', `Bearer ${token}`)
      .send({ firstName: 'John', lastName: 'Doe', phone: '1234567890' });

    expect(res.statusCode).toBe(201);
    expect(res.body.firstName).toBe('John');
  });
});
