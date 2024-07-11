import { client } from '../db.js'
class StaffController {
	async createStaff(req, res) {
		const { surname, name, patronymic, date_of_birth, phone, dismissed } =
			req.body
		const newStaff = await client.query(`CALL fill_staff($1,$2,$3,$4,$5,$6)`, [
			surname,
			name,
			patronymic,
			date_of_birth,
			phone,
			dismissed,
		])
		res.json(newStaff)
	}
	async getStaff(req, res) {
		const staff = await client.query('SELECT * FROM staff')
		res.json(staff.rows)
	}
	async getOneStaff(req, res) {
		const id = req.params.id
		const staff = await client.query(`SELECT * FROM staff WHERE id = $1`, [id])
		res.json(staff.rows[0])
	}
	async updateStaff(req, res) {
		const { id, surname, patronymic, date_of_birth, phone, dismissed, name } =
			req.body
		const staff = await client.query(
			`UPDATE staff set surname = $1, name = $2, patronymic = $3, date_of_birth = $4, phone = $5, dismissed = $6 WHERE id = $7 RETURNING *`,
			[surname, name, patronymic, date_of_birth, phone, dismissed, id]
		)
		res.json(staff.rows[0])
	}
	async deleteStaff(req, res) {
		const id = req.params.id
		const staff = await client.query(`DELETE FROM staff WHERE id = $1`, [id])
		res.json(staff.rows[0])
	}
}

export default new StaffController()
