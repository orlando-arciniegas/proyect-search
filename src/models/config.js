const db = require("mongoose");

const dbConnection = async () => {
	try {
		await db.connect(
			"mongodb+srv://test01:b9nCu6Fpjh2d4h4B@proyect-search.0fvb1.mongodb.net/proyectSearch",
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useFindAndModify: false,
				useCreateIndex: true,
			}
		);

		console.log("conectado a la base de datos c:");
	} catch (e) {
		console.error(e);
	}
};

module.exports = { dbConnection };
