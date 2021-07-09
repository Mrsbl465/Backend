const express = require("express");
const router = express.Router();
const ProfessorModel = require("../models/professor.model");
const professorDb = new ProfessorModel();
const InscriptionModel = require("../models/inscription.model");
const inscriptionDb = new InscriptionModel();

class ProfessorController {
  async getAll() {
    const result = professorDb.getAll()
    const data = await result.catch((err) => {
      console.log("controller Error", err);
      return null;
    });
    return data;
  }
  async findBydCode(code){
    const result = professorDb.findBydCode(code)
    const data = await result.catch(err=>{
      console.log("controller Error",err);
      return null;
    });
    return data; 
  }
  async studentInscription(StudentID,CourseID){
    const result = inscriptionDb.create(StudentID,CourseID);
    const data = await result.catch(err=>{
      console.log("controller Error",err);
      return null;
    });
    return data; 
  }
}

module.exports = ProfessorController;
