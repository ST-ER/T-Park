import {client} from "../db.js"
class Rental_housing_has_housingController {
    async createRental_housing_has_housing(req, res) {
        const {rental_housing_id, housing_id} = req.body
        const newRental_housing_has_housing = await client.query(`CALL fill_rental_housing_has_housing($1,$2)`,[rental_housing_id, housing_id])
        res.json(newRental_housing_has_housing)
    }
    async getRental_housing_has_housing(req, res) {
        const rental_housing_has_housing = await client.query("SELECT * FROM rental_housing_has_housing")
        res.json(rental_housing_has_housing.rows)
    }
    async getOneRental_housing_has_housing(req, res) {
        const id = req.params.id
        const rental_housing_has_housing = await client.query(`SELECT * FROM rental_housing_has_housing WHERE id = $1`,[id])
        res.json(rental_housing_has_housing.rows[0])
    }
    async updateRental_housing_has_housing(req, res) {
        const {id, rental_housing_id, housing_id} = req.body
        const rental_housing_has_housing = await client.query(`UPDATE rental_housing_has_housing set rental_housing_id = $1, housing_id = $2 WHERE id = $3 RETURNING *`,[rental_housing_id, housing_id, id])
        res.json(rental_housing_has_housing.rows[0])
    }
    async deleteRental_housing_has_housing(req, res) {
        const id = req.params.id
        const rental_housing_has_housing = await client.query(`DELETE FROM rental_housing_has_housing WHERE id = $1`,[id])
        res.json(rental_housing_has_housing.rows[0])
    }
}

export default new Rental_housing_has_housingController()