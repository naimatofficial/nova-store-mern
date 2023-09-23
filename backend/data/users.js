import bcrypt from "bcryptjs";

const users = [
	{
		name: "Admin",
		email: "admin@mail.io",
      password: bcrypt.hashSync("123456", 10),
		role: "admin",
	},
	{
		name: "Naimat",
      email: "naimat@mail.io",
		password: bcrypt.hashSync("123456", 10),
	},
	{
		name: "Ali",
		email: "ali@mail.io",
		password: bcrypt.hashSync("123456", 10),
	},
];

export default users;
