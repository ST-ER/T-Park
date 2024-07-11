import {client} from "../db.js"
class Rental_housingController {
    async createRental_housing(req, res) {
        const {check_in_date, date_of_the_congress, client_id, cost} = req.body;
        const newrental_housing = await client.query(`fill_rental_housing (check_in_date, date_of_the_congress, client_id, cost) VALUES ($1, $2, $3, $4)`, [check_in_date, date_of_the_congress, client_id, cost]);
        res.json(newrental_housing);
    }
    async getRental_housing(req, res) {
        const rental_housing = await client.query("SELECT * FROM rental_housing");
        res.json(rental_housing.rows);
    }
    async getOneRental_housing(req, res) {
        const id = req.params.id;
        const rental_housing = await client.query(`SELECT * FROM rental_housing WHERE id = $1`, [id]);
        res.json(rental_housing.rows[0]);
    }
    async updateRental_housing(req, res) {
        const id = req.params.id;
        const {check_in_date, date_of_the_congress, client_id, cost} = req.body;
        const rental_housing = await client.query(`UPDATE rental_housing SET check_in_date = $1, date_of_the_congress = $2, client_id = $3, cost = $4 WHERE id = $5`, [check_in_date, date_of_the_congress, client_id, cost, id]);
        res.json(rental_housing);
    }
    async deleteRental_housing(req, res) {
        const id = req.params.id;
        const rental_housing = await client.query(`DELETE FROM rental_housing WHERE id = $1`, [id]);
        res.json(rental_housing.rows[0]);
    }
}

export default new Rental_housingController()
