const db = require("../datajson/database.json");
const Users = require("../Schemas/users");

const mainController = {
	list: (req, res) => {
		let result = {
			meta: {
				status: 200,
				total: db.length,
				url: "/api/users",
			},
			data: db,
		};
		return res.status(200).json(result);
	},
	find: (req, res) => {
		db.forEach((element) => {
			if (element.id == req.params.id) {
				let findResult = {
					meta: {
						status: 200,
						url: "/api/users/:id",
					},
					data: element,
				};
				return res.status(200).json(findResult);
			}
		});
	},
	update: (req, res) => {
		db.forEach((element) => {
			if (element.id == req.params.id) {
			}
		});
	},
	listMongo: async (req, res) => {
		try {
			const user = await Users.find();
			console.log(user);
			res.json({ user });
		} catch (e) {
			console.error(e);
			res.sendStatus(500);
		}
	},
	create: async (req, res) => {
		try {
			const user = new Users(req.body);
			console.log(user);
			user.save();
			res.json({ message: "todo bien" });
		} catch (e) {
			console.error(e);
			res.sendStatus(500);
		}
	},
};

module.exports = mainController;
