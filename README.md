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
    "target": "http://example.com"
}`

For example:

`curl -X POST -H "Content-Type: application/json" -d '{"target": "http://news.bbc.co.uk"}' http://localhost:3000/api/v1/links`

Responds with the short link code:

`{
    "code": "wtj44j",
    "target": "http://example.com"
}`

Or you can specify your own code: 

`{
    "code": "news",
    "target": "http://example.com"
}`

For example:

`curl -X POST -H "Content-Type: application/json" -d '{"code": "news", "target": "http://news.bbc.co.uk"}' http://localhost:3000/api/v1/links`

## Redirecting

Redirects are perfromed by visiting http://localhost:3000/{code} e.g. http://localhost:3000/news 

## TODO

This is a simple service, it was built in a test drived way to meet an initial set of requirements. As a result there are a number of tasks still to be done:

- Persist links.
- Deal with overwriting of links, if you specify an existing code it will override its target.
- Better generation of Ids, see the code for issues.
- Package up this into something that is more easily deployable, docker for example.
- Consider resilience, ideally this would be deployed to the cloud. With the approrpiate persistence it could be stateless and deployed in a serverless way.
- Consider security of links, start with adding to the banned codes.
- Finish the API, you can only create things at the moment, add gets and deletes, define the permission model for this.
- Add some statistics to link accesses.
- Consider some cleanup tasks to delete old links and stop the database growing indefinitely.