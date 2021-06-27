const { expect } = require("@jest/globals");
const { default: axios } = require("axios");
const request = require('supertest');
const app = require("../src/index");
const abridged = require('../src/index')

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

  it('Should be redirected when requesting a valid link', async () => {

    const link = {code: 'example', target: 'http://example.com'}
    abridged.links[link.code] = link

    const response = await request(abridged).get('/example')
    expect(response.status).toBe(302)
    expect(response.headers.location).toBe(link.target)

  });

});