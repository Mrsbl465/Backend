const express = require("express");
const router = express.Router();
const connectionDb = require("../config/dbconnections");

class CourseModel {
  async getAll() {
    const con = connectionDb.promise();
    const data = await con.query(
      "SELECT * FROM course INNER JOIN section ON course.SectionID = section.SectionID INNER JOIN type ON course.TypeID = type.TypeID INNER JOIN schedule ON course.ScheduleID = schedule.ScheduleID"
    );
    return data[0];
  }
  async findById(id) {
    const con = connectionDb.promise();
    const data = await con.query("SELECT * FROM course INNER JOIN section ON course.SectionID = section.SectionID INNER JOIN type ON course.TypeID = type.TypeID INNER JOIN schedule ON course.ScheduleID = schedule.ScheduleID WHERE course.CourseID = ?", [
      id,
    ]);
    return data[0];
  }
  async findByName(name) {
    const con = connectionDb.promise();
    const data = await con.query("SELECT * FROM course INNER JOIN section ON course.SectionID = section.SectionID INNER JOIN type ON course.TypeID = type.TypeID INNER JOIN schedule ON course.ScheduleID = schedule.ScheduleID WHERE course.Course_Name = ?", [
      name,
    ]);
    return data[0];
  }
}
module.exports = CourseModel;
