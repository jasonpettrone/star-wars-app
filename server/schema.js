const { gql } = require("apollo-server");

// Question: In the StarWarsCharacters schema, what would be best practice when the user goes past the pagination limit?
// Ex: There are only 9 pages of data, but the user requests the 10th page.
// Should we make those fields non-nullable and have the API throw an error?
// Or should we have the API not throw an error and instead return null fields to the user?
exports.typeDefs = gql`
    type Query {
        star_wars_character(id: ID!): StarWarsCharacter
        star_wars_characters(page: ID): StarWarsCharacters
        star_wars_planet(id: ID!): StarWarsPlanet
        star_wars_planets(page: ID): StarWarsPlanets
    }

    type StarWarsCharacter {
        name: String!
        height: String!
        mass: String!
        hair_color: String!
        skin_color: String!
        eye_color: String!
        birth_year: String!
        gender: String!
        homeworld: StarWarsPlanet!
        films: [String!]!
        species: [String!]!
        vehicles: [String!]!
        starships: [String!]!
        created: String!
        edited: String!
        url: String!
    }

    type StarWarsCharacters {
        count: Int!
        next: String
        previous: String
        results: [StarWarsCharacter!]!
    }

    type StarWarsPlanet {
        name: String!
        rotation_period: String!
        orbital_period: String!
        diameter: Int!
        climate: String!
        gravity: String!
        terrain: String!
        surface_water: String!
        population: String!
        residents: [String!]!
        films: [String!]!
        created: String!
        edited: String!
        url: String!
    }

    type StarWarsPlanets {
        count: Int!
        next: String
        previous: String
        results: [StarWarsPlanet!]!
    }
`