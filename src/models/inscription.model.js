const express = require("express");
const router = express.Router();
const connectionDb = require("../config/dbconnections");

class InscriptionModel {
  async getAll() {
    const con = connectionDb.promise();
    const data = await con.query("SELECT * FROM inscription");
    return data[0];
  }
  async create(StudentID, CourseID) {
    const con = connectionDb.promise();
    const data = await con.query(
      "INSERT INTO inscription (StudentID,CourseID) VALUES (?,?)",
      [StudentID, CourseID]
    );
    return data[0];
  }
  async findByCui(StudentID){
    const con = connectionDb.promise();
    const data = await con.query("SELECT * FROM inscription INNER JOIN course ON inscription.CourseID = course.CourseID INNER JOIN section ON course.SectionID = section.SectionID INNER JOIN type ON course.TypeID = type.TypeID INNER JOIN schedule ON course.ScheduleID = schedule.ScheduleID WHERE inscription.StudentID = ?",[StudentID]);
    return data[0];
  }
}
module.exports = InscriptionModel;
