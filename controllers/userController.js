import User from "../models/User.js";

const registrar = async (req, res) => {
	const user = req.body;
	console.log(user);
	const isRegistered = await User.findOne({ username: user.username});
	console.log(isRegistered);
	if (isRegistered) {
		const error = new Error("User is signed up already");
		return res.status(400).json({ msg: error.message });
	}

	try {
		const user = new User(req.body);
		await user.save();
		res.status(201).json({
			msg: "User created successfully. Please check your email to confirm your account.",
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ msg: "Server error" });
	}
};

const autenticar = async (req, res) => {
	const { username, password } = req.body;

	try{
		// Comprobar si el user existe
		const user = await User.findOne({ username });
		if (!user) {
			console.log("user no existe");
			const error = new Error("El user no existe");
			return res.status(404).json({ msg: error.message });
		}

		if (user.password != password) {
			const error = new Error("El password es incorrecto");
				return res.status(401).json({ msg: error.message });

		} 
		res.status(200).json({
			msg: "Usuario autenticado correctamente",
			username: user.username,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ msg: "Server error" });
	}


	

};

export {
	registrar,
	autenticar
};
