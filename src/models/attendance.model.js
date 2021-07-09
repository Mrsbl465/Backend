const express = require("express");
const router = express.Router();
const connectionDb = require("../config/dbconnections");

class AttendanceModel {
  async create() {
    var dateToday = new Date();
    var score = 3;
    const con = connectionDb.promise();
    const data = await con.query(
      "INSERT INTO attendances (Date,Score) VALUES (?,?)",
      [dateToday, score]
    );
    return data[0];
  }
}
module.exports = AttendanceModel;
