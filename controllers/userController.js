import User from "../models/User.js";

const registrar = async (req, res) => {
	console.log("-----------------------");
	console.log(req.body);
	const { username, password, email, fullName } = req.body;

	try {
		const existingUser = await User.findOne({ username });
		if (existingUser) {
			return res.status(400).json({ msg: "El usuario ya está registrado." });
		}

		const user = new User({
			fullName,
			username,
			email,
			password
		});

		await user.save();
		res.status(201).json({
			msg: "Usuario creado exitosamente. Por favor revisa tu email para confirmar tu cuenta.",
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ msg: "Error del servidor" });
	}
};

const autenticar = async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await User.findOne({ email: email });
		console.log(user);
		if (!user) {
			return res.status(404).json({ msg: "El usuario no existe" });
		}

		const isMatch = (password === user.password)
		if (!isMatch) {
			return res.status(401).json({ msg: "Contraseña incorrecta" });
		}

		res.status(200).json({
			msg: "Usuario autenticado correctamente",
			user: user,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ msg: "Error del servidor" });
	}
};

export {
	registrar,
	autenticar
};
