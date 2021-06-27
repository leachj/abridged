const { expect } = require("@jest/globals");
const request = require('supertest');
const abridged = require('../src/server')

describe('api to manage links', () => {

  beforeEach(() => {
    abridged.links = {}
  });


  it('Should be able to create a link', async () => {

    const link = {code: 'example', target: 'http://example.com'}
    const response = await request(abridged).post('/api/v1/links').send(link).set('Accept', 'application/json')
    expect(response.status).toBe(200)
    expect(response.body).toMatchObject(link)

    expect(abridged.links[link.code]).toMatchObject(link)

  });

});