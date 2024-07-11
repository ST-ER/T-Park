import {client} from "../db.js"
class LocationsController {
    async createLocations(req, res) {
        const {name, description, price_per_hour} = req.body
        const newLocations = await client.query(`CALL fill_locations($1,$2,$3)`,[name, description, price_per_hour])
        res.json(newLocations)
    }
    async getLocations(req, res) {
        const locations = await client.query("SELECT * FROM locations")
        res.json(locations.rows)
    }
    async getOneLocations(req, res) {
        const id = req.params.id
        const locations = await client.query(`SELECT * FROM locations WHERE id = $1`,[id])
        res.json(locations.rows[0])
    }
    async updateLocations(req, res) {
        const {id, name, description, price_per_hour} = req.body
        const locations = await client.query(`UPDATE locations set name = $1, description = $2, price_per_hour = $3 WHERE id = $4 RETURNING *`,[name, description, price_per_hour, id])
        res.json(locations.rows[0])
    }
    async deleteLocations(req, res) {
        const id = req.params.id
        const locations = await client.query(`DELETE FROM locations WHERE id = $1`,[id])
        res.json(locations.rows[0])
    }
}

export default new LocationsController()