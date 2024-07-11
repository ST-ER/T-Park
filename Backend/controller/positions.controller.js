import {client} from "../db.js"
class PositionsController {
    async createPositions(req, res) {
        const {post, rate} = req.body
        const newPositions = await client.query(`CALL fill_positions($1,$2)`,[post, rate])
        res.json(newPositions)
    }
    async getPositions(req, res) {
        const positions = await client.query("SELECT * FROM positions")
        res.json(positions.rows)
    }
    async getOnePositions(req, res) {
        const id = req.params.id
        const positions = await client.query(`SELECT * FROM positions WHERE id = $1`,[id])
        res.json(positions.rows[0])
    }
    async updatePositions(req, res) {
        const {id, post, rate} = req.body
        const positions = await client.query(`UPDATE positions set post = $1, rate = $2 WHERE id = $3 RETURNING *`,[post, rate, id])
        res.json(positions.rows[0])
    }
    async deletePositions(req, res) {
        const id = req.params.id
        const positions = await client.query(`DELETE FROM positions WHERE id = $1`,[id])
        res.json(positions.rows[0])
    }
}

export default new PositionsController()