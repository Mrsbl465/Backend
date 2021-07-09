const express = require("express");
const router = express.Router();
const LoginModel = require("../models/login.model");
const loginDb = new LoginModel();
const VerifyModel = require("../models/verify.model");
const verifyDb = new VerifyModel();
const StudentModel = require("../models/student.model");
const studentDb = new StudentModel();
const PersonModel = require("../models/person.model");
const personDb = new PersonModel();
const InscriptionModel = require("../models/inscription.model");
const inscriptionDb = new InscriptionModel();
const AttendanceModel = require("../models/attendance.model");
const attendaceDb = new AttendanceModel();
const CurseAttendanceModel = require("../models/course_attendance.model");
const curse_attendanceDb = new CurseAttendanceModel();

class StudentController {
  constructor() {}
  async register(
    First_Name,
    Last_Name,
    Email,
    DNI,
    Home_Phone,
    Mobile_Phone,
    CityID,
    StudentID,
    Career,
    Faculty,
    Password,
    IMEI
  ) {
    const result = personDb.create(
      First_Name,
      Last_Name,
      Email,
      DNI,
      Home_Phone,
      Mobile_Phone,
      CityID
    );
    const data = await result.catch((err) => {
      console.log("controller Error", err);
      return null;
    });
    const resultStudent = studentDb.create(
      StudentID,
      Career,
      Faculty,
      data.insertId
    );
    const dataStudent = await result.catch((err) => {
      console.log("controller Error", err);
      return null;
    });
    const resultLogin = loginDb.create(Email, Password, IMEI, StudentID, 2);
    const dataLogin = await result.catch((err) => {
      console.log("controller Error", err);
      return null;
    });
    console.log("dataLogin", dataLogin);
    return dataLogin;
  }
  async login(email, password) {
    const result = loginDb.authenticate(email, password);
    const data = await result.catch((err) => {
      console.log("controller Error", err);
      return null;
    });
    return data;
  }
  async getAll() {
    const result = studentDb.getAll();
    const data = await result.catch((err) => {
      console.log("controller Error", err);
      return null;
    });
    return data;
  }
  async findBydCui(cui) {
    const result = studentDb.findByCui(cui);
    const data = await result.catch((err) => {
      console.log("controller Error", err);
      return null;
    });
    if (data != null) {
      const resultCourses = inscriptionDb.findByCui(cui);
      const dataCourses = await resultCourses.catch((err) => {
        console.log("controller Error", err);
        return null;
      });

      return { Alumno: data[0], Cursos: dataCourses };
    }
    return { Alumno: null, Cursos: null };
  }
  async attendance(StudentID,ProfessorID,CourseID) {
    const result = attendaceDb.create();
    const data = await result.catch((err) => {
      console.log("controller Error", err);
      return null;
    });
    if (data != null) {
      const resultCurseAttendance = curse_attendanceDb.create(data.insertId,StudentID,ProfessorID,CourseID);
      const dataCurseAttedance = await resultCurseAttendance.catch((err) => {
        console.log("controller Error", err);
        return null;
      });
      if(dataCurseAttedance!=null){
        return {asistencia:"ok"}
      }
    }
    return {asistencia:"error"}
  }
}

module.exports = StudentController;
