const express = require("express");
const router = express.Router();
const VerifyModel = require("../models/verify.model");
const verifyDb = new VerifyModel();
const CityModel = require("../models/city.model");
const cityDb = new CityModel();
const PersonModel = require("../models/person.model");
const personDb = new PersonModel();
const CourseModel = require("../models/course.model");
const courseDb = new CourseModel();

class DataController {
  constructor() {}
  async getAllPerson(){
    const result = personDb.getAll();
    const data = await result.catch(err=>{
      console.log("controller Error",err);
      return null;
    });
    return data;
  }
  async getAllVerify(){
    const result = verifyDb.getAll();
    const data = await result.catch(err=>{
      console.log("controller Error",err);
      return null;
    });
    return data;
  }
  async getDataVerifyByCui(cui){
    const result = verifyDb.findCui(cui);
    const data = await result.catch(err=>{
      console.log("controller Error",err);
      return null;
    });
    return data;
  }
  async getAllCities(){
      const result = cityDb.getAll();
      const data = await result.catch(err=>{
        console.log("controller Error",err);
        return null;
      });
      return data;
  }
  async findCityByName(name){
    const result = cityDb.findByName(name);
    const data = await result.catch(err=>{
      console.log("controller Error",err);
      return null;
    });
    return data;
  }
  async findCityById(id){
    const result = cityDb.findById(id);
    const data = await result.catch(err=>{
      console.log("controller Error",err);
      return null;
    });
    return data;
  }
  async getAllCourses(){
    const result = courseDb.getAll();
    const data = await result.catch(err=>{
      console.log("controller Error",err);
      return null;
    });
    return data;
  }
  async findCourseById(id){
    const result = courseDb.findById(id)
    const data = await result.catch(err=>{
      console.log("controller Error",err);
      return null;
    });
    return data;
  }
  async findCourseByName(name){
    const result = courseDb.findByName(name)
    const data = await result.catch(err=>{
      console.log("controller Error",err);
      return null;
    });
    return data;
  }
}

module.exports = DataController;
