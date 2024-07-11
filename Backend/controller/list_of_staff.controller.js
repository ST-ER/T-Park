import {client} from "../db.js"
class List_of_staffController {
    async createList_of_staff(req, res) {
        const {order_id, staff_id} = req.body
        const newList_of_staff = await client.query(`CALL fill_staff_to_order($1,$2)`,[order_id, staff_id])
        res.json(newList_of_staff)
    }
    async getList_of_staff(req, res) {
        const list_of_staff = await client.query("SELECT * FROM list_of_staff")
        res.json(list_of_staff.rows)
    }
    async getOneList_of_staff(req, res) {
        const id = req.params.id
        const list_of_staff = await client.query(`SELECT * FROM list_of_staff WHERE id = $1`,[id])
        res.json(list_of_staff.rows[0])
    }
    async updateList_of_staff(req, res) {
        const {id, order_id, staff_id} = req.body
        const list_of_staff = await client.query(`UPDATE list_of_staff set order_id = $1, staff_id = $2 WHERE id = $3 RETURNING *`,[order_id, staff_id, id])
        res.json(list_of_staff.rows[0])
    }
    async deleteList_of_staff(req, res) {
        const id = req.params.id
        const list_of_staff = await client.query(`DELETE FROM list_of_staff WHERE id = $1`,[id])
        res.json(list_of_staff.rows[0])
    }
}

export default new List_of_staffController()