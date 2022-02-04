module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		"User",
		{
			name: DataTypes.STRING,
			email: DataTypes.STRING,
			password_hash: DataTypes.STRING,
		},
		{
			hooks: {
				beforeSave: async (user) => {
					user.password_hash = "123";
				},
			},
		}
	);

	return User;
};
