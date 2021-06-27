const { expect } = require("@jest/globals");
const { default: axios } = require("axios");
const request = require('supertest');
const abridged = require('../src/index')

describe('api to manage links', () => {

  beforeEach(() => {
  });

  test('Should be able to create a link', async () => {

    const link = {code: 'example', target: 'http://example.com'}
    const response = await request(abridged).post('/api/v1/links').send(link).set('Accept', 'application/json')
    expect(response.status).toBe(200)
    expect(response.body).toMatchObject(link)

    expect(abridged.links[response.body.id]).toMatchObject(link)



  });

});