const { gql } = require("apollo-server");
exports.typeDefs = gql`
    type Query {
        star_wars_character(id: ID!): StarWarsCharacter
        star_wars_characters: [StarWarsCharacter!]!
        star_wars_planet(id: ID!): StarWarsPlanet
        star_wars_planets: [StarWarsPlanet!]!
    }

    type StarWarsCharacter {
        name: String!
        height: Int!
        mass: Int!
        hair_color: String!
        skin_color: String!
        eye_color: String!
        birth_year: String!
        gender: String!
        homeworld: StarWarsPlanet!
        films: [String!]!
        species: [String]
        vehicles: [String]
        starships: [String]
        created: String!
        edited: String!
        url: String!
    }

    type StarWarsPlanet {
        name: String!
        rotation_period: Int!
        orbital_period: Int!
        diameter: Int!
        climate: String!
        gravity: String!
        terrain: String!
        surface_water: Int!
        population: Int!
        residents: [String!]!
        films: [String!]!
        created: String!
        edited: String!
        url: String!
    }
`