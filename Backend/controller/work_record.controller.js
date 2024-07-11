import {client} from "../db.js"
class Work_recordController {
    async createWork_record(req, res) {
        const {staff_id, post_id} = req.body
        const newWork_record = await client.query(`CALL fill_work_record($1,$2,$3,$4)`,[staff_id, post_id, date_of_employment, date_of_dismissal])
        res.json(newWork_record)
    }
    async getWork_record(req, res) {
        const work_record = await client.query("SELECT * FROM work_record")
        res.json(work_record.rows)
    }
    async getOneWork_record(req, res) {
        const id = req.params.id
        const work_record = await client.query(`SELECT * FROM work_record WHERE id = $1`,[id])
        res.json(work_record.rows[0])
    }
    async updateWork_record(req, res) {
        const {id, staff_id, post_id} = req.body
        const work_record = await client.query(`UPDATE work_record set staff_id = $1, post_id = $2, date_of_employment = $3, date_of_dismissal = $4 WHERE id = $5 RETURNING *`,[staff_id, post_id, date_of_employment, date_of_dismissal, id])
        res.json(work_record.rows[0])
    }
    async deleteWork_record(req, res) {
        const id = req.params.id
        const work_record = await client.query(`DELETE FROM work_record WHERE id = $1`,[id])
        res.json(work_record.rows[0])
    }
}

export default new Work_recordController()

