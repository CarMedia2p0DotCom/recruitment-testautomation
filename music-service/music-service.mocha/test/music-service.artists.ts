//Dependencies
import * as chai from 'chai';
import chaiHttp = require('chai-http');
chai.use(chaiHttp);
import { expect } from 'chai';
const should = chai.should();

//Environment Variables
import { configEnv } from '../config.env';
const env = configEnv[process.env.NODE_ENV];
//console.log('Environment Parameters', env);

describe('Music Service Artists:', function () {

  describe('Music Service - Get Artists', function () {

    it('Should successfully get a list of Artists', function (done) {
      chai.request(env.url)
        .get('/Artists')
        .end(function (err, res) {
          console.log (res.body)
          res.should.have.status(200);
          res.should.be.json;
          done();
        });
    })
    
  });

});


