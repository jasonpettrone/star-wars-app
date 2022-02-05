const fetch = require('node-fetch')
const baseURL = `https://swapi.dev/api/`
exports.Query = {
    // TODO: What is a better pattern that we can use to not hardcode the path in these resolvers?
    star_wars_character: (parent, args, context) => {
        return fetch(`${baseURL}/people/${args.id}`).then(res => res.json())
    },
    star_wars_characters: (parent, args, context) => {
        return fetch(`${baseURL}/people`)
            .then(res => res.json())
            .then(json => json.results)
    },
    star_wars_planet: (parent, args, context) => {
        return fetch(`${baseURL}/planets/${args.id}`).then(res => res.json())
    },
    star_wars_planets: (parent, args, context) => {
        return fetch(`${baseURL}/planets`)
            .then(res => res.json())
            .then(json => json.results)
    }
}