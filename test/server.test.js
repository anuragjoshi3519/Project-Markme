const app = require("../server");
const chai = require("chai");
const chaiHttp = require("chai-http");

const { expect } = chai;
chai.use(chaiHttp);

describe("MarkMe Server", () => {

  it("Welcomes user to the API", done => {
    chai
      .request(app)
      .get("/")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals("success");
        expect(res.body.message).to.equals("MarkMe Server");
        done();
      });
  });

  it("Returns the list of users of the app in JSON format", done => {
    chai
      .request(app)
      .get("/users")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.data).to.have.length.above(0);
        done();
      });
  });

  it("Adds user", done => {
    chai
      .request(app)
      .get("/users/add/?username=&password=")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.message).to.equals("Successfully signed up");
        done();
      });
  });

  it("Check student's attendence", done => {
    chai
      .request(app)
      .get("/checkattendancestudent?username=stud1")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.data).to.have.length.above(0);
        done();
      });
  });

  it("Check subjects taught by a teacher", done => {
    chai
      .request(app)
      .get("/teachersubjects?username=teach1")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.data).to.have.length.above(0);
        done();
      });
  });

});