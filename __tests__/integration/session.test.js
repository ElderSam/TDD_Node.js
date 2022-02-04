const request = require("supertest");

const app = require("../../src/app");
const { User } = require("../../src/app/models");
const truncate = require("../utils/truncate")

describe("Authentication", () => {
	beforeEach(async () => {
		await truncate();
	})

	it("should authenticate with valid credentials", async () => {
		const user = await User.create({
			name: "Diego",
			email: "diego@rocketseat.com.br",
			password_hash: "123123",
		});

		expect(user.email).toBe("diego@rocketseat.com.br")

		const response = await request(app).post("/sessions").send({
			email: user.email,
			password: "123456",
		});

		expect(response.status).toBe(200);
	});
});
