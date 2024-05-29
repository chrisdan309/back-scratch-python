import User from "../models/User.js";
//import { usernameRegistro, usernameOlvidePassword } from "../helpers/username.js";

const registrar = async (req, res) => {
	const { username } = req.body;
	const isRegistered = await User.findOne({ username });

	if (isRegistered) {
		const error = new Error("User is signed up already");
		return res.status(400).json({ msg: error.message });
	}

	try {
		const user = new User(req.body);
		await user.save();
		res.json({
			msg: "user Creado Correctamente, Revisa tu username para confirmar tu cuenta",
		});
	} catch (error) {
		console.log(error);
	}
};

const autenticar = async (req, res) => {
	const { username, password } = req.body;

	// Comprobar si el user existe
	const user = await User.findOne({ username });
	if (!user) {
		console.log("user no existe");
		const error = new Error("El user no existe");
		return res.status(404).json({ msg: error.message });
	}

	if (user.password === password) {
		console.log("user autenticado");
		res.json({
			username: user.username,
			password: user.password,
		});
	} else {
		console.log("Password Incorrecto");
		const error = new Error("El Password es Incorrecto");
		return res.json({ msg: error.message });
	}
};

// const confirmar = async (req, res) => {
// 	const { token } = req.params;
// 	const userConfirmar = await user.findOne({ token });
// 	if (!userConfirmar) {
// 		const error = new Error("Token no válido");
// 		return res.status(403).json({ msg: error.message });
// 	}

// 	try {
// 		userConfirmar.confirmado = true;
// 		userConfirmar.token = "";
// 		await userConfirmar.save();
// 		res.json({ msg: "user Confirmado Correctamente" });
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

// const olvidePassword = async (req, res) => {
// 	const { username } = req.body;
// 	const user = await user.findOne({ username });
// 	if (!user) {
// 		const error = new Error("El user no existe");
// 		return res.status(404).json({ msg: error.message });
// 	}

// 	try {
// 		user.token = generarId();
// 		await user.save();

// 		// Enviar el username
// 		usernameOlvidePassword({
// 			username: user.username,
// 			nombre: user.nombre,
// 			token: user.token,
// 		});

// 		res.json({ msg: "Hemos enviado un username con las instrucciones" });
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

// const comprobarToken = async (req, res) => {
// 	const { token } = req.params;

// 	const tokenValido = await user.findOne({ token });

// 	if (tokenValido) {
// 		res.json({ msg: "Token válido y el user existe" });
// 	} else {
// 		const error = new Error("Token no válido");
// 		return res.status(404).json({ msg: error.message });
// 	}
// };

// const nuevoPassword = async (req, res) => {
// 	const { token } = req.params;
// 	const { password } = req.body;

// 	const user = await user.findOne({ token });

// 	if (user) {
// 		user.password = password;
// 		user.token = "";
// 		try {
// 			await user.save();
// 			res.json({ msg: "Password Modificado Correctamente" });
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	} else {
// 		const error = new Error("Token no válido");
// 		return res.status(404).json({ msg: error.message });
// 	}
// };

// const perfil = async (req, res) => {
// 	const { user } = req;

// 	res.json(user);
// };

export {
	registrar,
	autenticar
};
