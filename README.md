# explorer-server
## Introduction
Explorer server contains queries and mutation which returning restaurants and users information fetching from APIs (custom APIs and Yelp Fusion API). It has: 
- User Info
- Restaurant Info 
## Tech Stack
- Node v14
- Apollo
- Graphql
- Typescript
- JavaScript
- RestAPIs endpoint
## Running
### Locally
1. Clone this repo into your machine:
```
get clone https://github.com/khanhvy1703/explorer-server.git
```
2. Get a Yelp API from Yelp Fusion (it's free). Create a `.env` file and add those following into the env file 
```
YELP_API_KEY=<Your own API KEY>
YELP_BASE_URL=https://api.yelp.com/v3
```
3. Run `npm install`
4. Run `npm start`
5. 🚀  Server ready at: `http://localhost:4000/`
