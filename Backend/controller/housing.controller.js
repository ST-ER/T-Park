import {client} from "../db.js"
class HousingController {
    async createHousing(req, res) {
        const {name, description, price_per_day} = req.body
        const newHousing = await client.query(`CALL fill_housing($1,$2,$3)`,[name, description, price_per_day])
        res.json(newHousing)
    }
    async getHousing(req, res) {
        const housing = await client.query("SELECT * FROM housing")
        res.json(housing.rows)
    }
    async getOneHousing(req, res) {
        const id = req.params.id
        const housing = await client.query(`SELECT * FROM housing WHERE id = $1`,[id])
        res.json(housing.rows[0])
    }
    async updateHousing(req, res) {
        const {id, name, description, price_per_day} = req.body
        const housing = await client.query(`UPDATE housing set name = $1, description = $2, price_per_day = $3 WHERE id = $4 RETURNING *`,[name, description, price_per_day, id])
        res.json(housing.rows[0])
    }
    async deleteHousing(req, res) {
        const id = req.params.id
        const housing = await client.query(`DELETE FROM housing WHERE id = $1`,[id])
        res.json(housing.rows[0])
    }
}

export default new HousingController()