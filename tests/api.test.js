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
    expect(response.status).toBe(201)
    expect(response.body).toMatchObject(link)

    expect(abridged.links[link.code]).toMatchObject(link)

  });

  it('Should not be able to create a link to a banned code', async () => {

    const link = {code: 'api', target: 'http://example.com'}
    const response = await request(abridged).post('/api/v1/links').send(link).set('Accept', 'application/json')
    expect(response.status).toBe(400)
    expect(response.body.error).toBe('invalid code')

    expect(abridged.links[link.code]).toBeUndefined

  });

  it('Should not be able to create a link without a code', async () => {

    const link = {target: 'http://example.com'}
    const response = await request(abridged).post('/api/v1/links').send(link).set('Accept', 'application/json')
    expect(response.status).toBe(400)
    expect(response.body.error).toBe('invalid code')

    expect(abridged.links[link.code]).toBeUndefined

  });

  it('Should not be able to create a link to an invalid target', async () => {

    const link = {code: 'example', target: 'not-a-url'}
    const response = await request(abridged).post('/api/v1/links').send(link).set('Accept', 'application/json')
    expect(response.status).toBe(400)
    expect(response.body.error).toBe('invalid target')

    expect(abridged.links[link.code]).toBeUndefined

  });

  it('Should not be able to create a link without a target', async () => {

    const link = {code: 'example'}
    const response = await request(abridged).post('/api/v1/links').send(link).set('Accept', 'application/json')
    expect(response.status).toBe(400)
    expect(response.body.error).toBe('invalid target')

    expect(abridged.links[link.code]).toBeUndefined

  });

});