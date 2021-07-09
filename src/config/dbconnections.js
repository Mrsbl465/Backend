
const mysql = require('mysql2');
    // create the pool
const pool = mysql.createPool({host:'159.65.232.66', user: 'kapitalhouse', database: 'attendance', password:'Kapitalhouse2020%'});
module.exports = pool;