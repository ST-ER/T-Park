import {client} from "../db.js"
class CustomersController {
    async createCustomers(req, res) {
        const {surname, name, patronymic, phone, date_of_birth, email} = req.body
        const newCustomers = await client.query(`CALL fill_customers($1,$2,$3,$4,$5,$6)`,[surname, name, patronymic, phone, date_of_birth, email])
        res.json(newCustomers)
    }
    async getCustomers(req, res) {
        const customers = await client.query("SELECT * FROM customers")
        res.json(customers.rows)
    }
    async getOneCustomers(req, res) {
        const id = req.params.id
        const customers = await client.query(`SELECT * FROM customers WHERE id = $1`,[id])
        res.json(customers.rows[0])
    }
    async updateCustomers(req, res) {
        const {id, surname, name, patronymic, phone, date_of_birth, email} = req.body
        const customers = await client.query(`UPDATE customers set surname = $1, name = $2, patronymic = $3, phone = $4, date_of_birth = $5,email = $6 WHERE id = $7 RETURNING *`,[surname, name, patronymic, phone, date_of_birth, email,id])
        res.json(customers.rows[0])
    }
    async deleteCustomers(req, res) {
        const id = req.params.id
        const customers = await client.query(`DELETE FROM customers WHERE id = $1`,[id])
        res.json(customers.rows[0])
    }
}

export default new CustomersController()