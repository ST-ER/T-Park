import {client} from "../db.js"
class ActivitiesController {
    async createActivities(req, res) {
        const {name, description, price} = req.body
        const newActivities = await client.query(`CALL fill_activities($1,$2,$3)`,[name, description, price])
        res.json(newActivities)
    }
    async getActivities(req, res) {
        const activities = await client.query("SELECT * FROM activities")
        res.json(activities.rows)
    }
    async getOneActivities(req, res) {
        const id = req.params.id
        const activities = await client.query(`SELECT * FROM activities WHERE id = $1`,[id])
        res.json(activities.rows[0])
    }
    async updateActivities(req, res) {
        const {id, name, description, price} = req.body
        const activities = await client.query(`UPDATE activities set name = $1, description = $2, price = $3 WHERE id = $4 RETURNING *`,[name, description, price, id])
        res.json(activities.rows[0])
    }
    async deleteActivities(req, res) {
        const id = req.params.id
        const activities = await client.query(`DELETE FROM activities WHERE id = $1`,[id])
        res.json(activities.rows[0])
    }
}

export default new ActivitiesController()