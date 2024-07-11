import {client} from "../db.js"
class OrdersController {
    async createOrders(req, res) {
        const { date_and_time, number_of_guests, location_id, client_id, full_cost} = req.body;
        const newOrder = await client.query(`CALL fill_order($1, $2, $3, $4, $5)`, [date_and_time, number_of_guests, location_id, client_id, full_cost]);
        res.json(newOrder);
    }

    async getOrders(req, res) {
        const orders = await client.query("SELECT * FROM orders");
        res.json(orders.rows);
    }

    async getOneOrder(req, res) {
        const id = req.params.id;
        const order = await client.query(`SELECT * FROM orders WHERE id = $1`, [id]);
        res.json(order.rows[0]);
    }

    async updateOrder(req, res) {
        const {id,date_and_time, number_of_guests, location_id, client_id, full_cost} = req.body;
        const order = await client.query(`UPDATE orders SET date_and_time = $1, number_of_guests = $2, location_id = $3, client_id = $4, full_cost = $5 WHERE id = $6 RETURNING *`, [date_and_time, number_of_guests, location_id, client_id, full_cost, id]);
        res.json(order.rows[0]);
    }

    async deleteOrder(req, res) {
        const id = req.params.id;
        const order = await client.query(`DELETE FROM orders WHERE id = $1 RETURNING *`, [id]);
        res.json(order.rows[0]);
    }
}

export default new OrdersController()