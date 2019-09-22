var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app');
var should = chai.should();

chai.use(chaiHttp);

describe('/GET app home', () => {
    it('it should have status 200', (done) => {
      chai.request(app)
          .get('/')
          .end((err, res) => {
                res.should.have.status(200);
               done();
          });
    });
});

describe('/GET users', () => {
    it('it should have status 200', (done) => {
      chai.request(app)
          .get('/users')
          .end((err, res) => {
                res.should.have.status(200);
               done();
          });
    });
});