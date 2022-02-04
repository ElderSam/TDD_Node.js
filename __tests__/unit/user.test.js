const bcrypt = require("bcryptjs");

const { User } = require("../../src/app/models");
const truncate = require("../utils/truncate");

describe("", () => {
	beforeEach(async () => {
		await truncate();
	})

	it("should encrypt user password", async () => {
		const user = await User.create({
			name: "Samuel",
			email: "sam@gmail.com",
			password: "123456",
		});

		const compareHah = await bcrypt.compare('123456', user.password_hash)

        expect(compareHah).toBe(true);
	});
});
