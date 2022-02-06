// import bcryptjs from 'bcryptjs';
import bcrypt from 'bcryptjs';
import nc from 'next-connect';
import User from '../../../models/User';
import { signToken } from '../../../utils/auth';
import db from '../../../utils/db';

const handler = nc();

handler.post(async (req, res) => {
	console.log(`API name: ${req.body.name}`);
	console.log(`API email: ${req.body.email}`);
	console.log(`API password: ${req.body.password}`);

	await db.connect();
	const newUser = new User({
		name: req.body.name,
		email: req.body.email,
		password: bcrypt.hashSync(req.body.password),
		isAdmin: false,
	});
	console.log(`API newUser: ${newUser}`);
	const user = await newUser.save();
	console.log(`API user: ${user}`);
	await db.disconnect();

	const token = signToken(user);
	res.send({
		token,
		_id: user._id,
		name: user.name,
		email: user.email,
		isAdmin: user.isAdmin,
	});
});

export default handler;
