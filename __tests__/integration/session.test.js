const { User } = require('../../src/app/models');

describe("Authentication", () => {
	it("should create a user", async () => {
		const emailTest = 'test@gmail.com.br'

		const user = await User.create({
			name: 'Samuel',
			email: emailTest,
			password_hash: "123123"
		})

		console.log(user)

		expect(user.email).toBe(emailTest);
	});
});
