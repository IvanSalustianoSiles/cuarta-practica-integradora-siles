import chai from "chai";
import supertest from "supertest";

const connection = mongoose.connect(config.MONGO_URI);
const expect = chai.expect();
const requester = supertest("http://localhost:8080");
const testUser = { first_name: "Jerry", last_name: "Smith", password: "Coki2011", email: "jerrysmith@gmail.com" };

describe("Test Integración Users", function() {
    before(function() {});
    beforeEach(function() {});
    after(function() {});
    afterEach(function() {});
    it("POST api/auth/register | Debe registrar un nuevo usuario", async function() {
        const { _body } = requester.post("api/auth/register").send(testUser);
        expect(_body).to.be.undefined;
    });
});