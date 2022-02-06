import bcryptjs from 'bcryptjs';
import nc from 'next-connect';
import User from '../../../models/User';
import { signToken } from '../../../utils/auth';
import db from '../../../utils/db';

const handler = nc();

handler.post(async (req, res) => {
	await db.connect();
	const user = await User.findOne({ email: req.body.email });
	// const products = await Product.find({});
	await db.disconnect();
	// res.send(products);
	if (user && bcryptjs.compareSync(req.body.password, user.password)) {
		const token = signToken(user);
		res.send({
			token,
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
		});
	} else {
		res.status(401).send({ message: 'Invalid email or password' });
	}
});

export default handler;
