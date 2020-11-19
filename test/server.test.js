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


  //tests on sign up start here

  it("New user sign up", done => {
    chai
      .request(app)
      .get("/users/add/?username=Abhishek&password=123")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.message).to.equals("Successfully signed up");
        done();
      });
  });

  it("Sign up with occupied username", done => {
    chai
      .request(app)
      .get("/users/add/?username=stud1&password=stud1")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.message).to.equals("Successfully signed up");
        done();
      });
  });

  //tests on sign up end here


  //tests on profile start here
  it("Load registered student's profile", done => {
    chai
      .request(app)
      .get("/studentprofile?username=stud1")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.data).to.have.length.above(0);
        done();
      });
  });

  it("Load unregistered student's profile", done => {
    chai
      .request(app)
      .get("/studentprofile?username=student1")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.data).to.have.length.above(0);
        done();
      });
  });

  it("Load registered teacher's profile", done => {
    chai
      .request(app)
      .get("/teacherprofiledata?username=teach1")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.data).to.have.length.above(0);
        done();
      });
  });

  it("Load unregistered teacher's profile", done => {
    chai
      .request(app)
      .get("/teacherprofiledata?username=teacher1")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.data).to.have.length.above(0);
        done();
      });
  });

  //tests on profile end here


  //tests on checking attendance start here

  it("Check listed student's attendence", done => {
    chai
      .request(app)
      .get("/checkattendancestudent?username=stud1")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.data).to.have.length.above(0);
        done();
      });
  });

  it("Check unlisted student's attendence", done => {
    chai
      .request(app)
      .get("/checkattendancestudent?username=student1")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.data).to.have.length.above(0);
        done();
      });
  });

  //tests on checking attendance end here

  //

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

  //

  //tests on marking attendance start here

  it("Marking registered student's attendance", done => {
    chai
      .request(app)
      .get("/markattendance?reg_no=stud1&class_id=class1&entry=P&no_of_hours=1")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.data.affectedRows).equals(1);
        done();
      });
  });

  it("Marking unregistered student's attendance", done => {
    chai
      .request(app)
      .get("/markattendance?reg_no=studNotFound&class_id=class1&entry=P&no_of_hours=1")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.data.affectedRows).equals(1);
        done();
      });
  });

  it("Mark student's attendance for unavailable class", done => {
    chai
      .request(app)
      .get("/markattendance?reg_no=stud1&class_id=class90&entry=P&no_of_hours=1")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.data.affectedRows).equals(1);
        done();
      });
  });

  //tests on marking attendance end here

  
  //tests on admin tasks start here

  it("Adding a new batch", done => {
    chai
      .request(app)
      .get("/addbatch?batchID=mca2020&program=MCA")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.data.affectedRows).equals(1);
        done();
      });
  });

  it("Adding a new batch with existing Batch ID", done => {
    chai
      .request(app)
      .get("/addbatch?batchID=mca2020&program=MCA")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.data.affectedRows).equals(1);
        done();
      });
  });

  //tests on admin tasks end here

});