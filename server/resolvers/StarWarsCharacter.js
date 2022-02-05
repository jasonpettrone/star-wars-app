const fetch = require('node-fetch')
exports.StarWarsCharacter = {
    homeworld: (parent, args, context) => {
        return fetch(`${parent.homeworld}`).then(res => res.json())
    }
}