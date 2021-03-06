# Star Wars App
Build an app that uses the https://swapi.dev/ API to display Star Wars character information. 

Built using: React, Node, and GraphQL

## Requirements

:heavy_check_mark: Implemented 

:x: Not implemented

##

:heavy_check_mark: Consume the https://swapi.dev/ 'people' list API using Node and GraphQL.

:heavy_check_mark: Use the GraphQL operation to build a simple node page that presents a set of cards, one for each person in the order that the API returns them.

:heavy_check_mark: On each ‘person’ card, only display the name, origin, height, mass, and birth date.

:heavy_check_mark: Make the card responsive to where a phone sized screen shows 1 card across and a desktop shows up to 3 cards across.

:heavy_check_mark: Allow the user to ‘load more’ for the next page of the API.

# Getting Started with the App
Install NodeJS: https://nodejs.org/en/. For reference, I currently have version 14.15.4. Any version later than 14.0.0 should work.

## Starting the server
After cloning the repository, open up your terminal and navigate to the app root directory.

```sh
cd server
npm install apollo-server graphql node-fetch
```
Once the packages install, enter the following command to start the server:

```sh
node index
```

Navigate to http://localhost:4000/ if you'd like to play around with the GraphQL queries.
## Starting the client
Open up your terminal and navigate to the app root directory.

```sh
cd client
npm install
```

Once the packages install, enter the following command to start the client:

```sh
npm start
```
Then open http://localhost:3000/ to see the app.

# What the app looks like as of 2-12-2022

## Desktop view:
![image](https://user-images.githubusercontent.com/16530058/153731099-ebc646ab-c1e7-473b-bd63-26cbc8f8d19f.png)


## Mobile view (Samsung Galaxy S20 Ultra):
![image](https://user-images.githubusercontent.com/16530058/153731116-624e6616-1075-4ef4-a0b2-6fd8b5be91e4.png)
