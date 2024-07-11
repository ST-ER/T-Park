import {client} from "../db.js"
class List_of_activitiesController {
    async createList_of_activities(req, res) {
        const {order_id, activity_id} = req.body
        const newList_of_activities = await client.query(`CALL fill_activity_to_order($1,$2)`,[order_id, activity_id])
        res.json(newList_of_activities)
    }
    async getList_of_activities(req, res) {
        const list_of_activities = await client.query("SELECT * FROM list_of_activities")
        res.json(list_of_activities.rows)
    }
    async getOneList_of_activities(req, res) {
        const id = req.params.id
        const list_of_activities = await client.query(`SELECT * FROM list_of_activities WHERE id = $1`,[id])
        res.json(list_of_activities.rows[0])
    }
    async updateList_of_activities(req, res) {
        const {id, order_id, activity_id} = req.body
        const list_of_activities = await client.query(`UPDATE list_of_activities set order_id = $1, activity_id = $2 WHERE id = $3 RETURNING *`,[order_id, activity_id, id])
        res.json(list_of_activities.rows[0])
    }
    async deleteList_of_activities(req, res) {
        const id = req.params.id
        const list_of_activities = await client.query(`DELETE FROM list_of_activities WHERE id = $1`,[id])
        res.json(list_of_activities.rows[0])
    }
}

export default new List_of_activitiesController()