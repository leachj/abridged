const { expect } = require("@jest/globals");
const request = require('supertest');
const abridged = require('../src/server')

describe('redirection of links', () => {

  beforeEach(() => {
    abridged.links = {}
  });

  it('Should be redirected when requesting a valid link', async () => {

    const link = {code: 'example', target: 'http://example.com'}
    abridged.links[link.code] = link

    const response = await request(abridged).get('/example')
    expect(response.status).toBe(302)
    expect(response.headers.location).toBe(link.target)

  });

  it('Should receive 404 not found when requesting an invalid link', async () => {

    const response = await request(abridged).get('/example')
    expect(response.status).toBe(404)

  });

});