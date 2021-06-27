# Abridged
A simple URL shortening service

## Running

Install required dependencies by running 
`npm install`

Start the application by running `npm run start`

Abridged is now running on http://localhost:3000
## Managing links

Links are managed through a REST API. 

### Create a link

POST to /api/v1/links

`{
    "code": "example",
    "target": "http://example.com"
}`

## Redirecting

Redirects are perfromed by visiting http://localhost:3000/{code} e.g. http://localhost:3000/example 

## TODO

This is a simple service, there any many things still to do.

- Persist links
- Package up this into something that is more easily deployable, docker for example
- Consider security of links, start with adding to the banned codes.
- Finish the API, you can only create things at the moment, add gets and deletes
- Add some statistics to link accesses
- Consider some cleanup tasks to delete old links and stop the database growing indefinitely