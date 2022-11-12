const mysql = require('mysql');

// Create connection
const db = mysql.createConnection({
  host: 'localhost', 
  user: 'root', 
  password: 'Y04042001Godlove', 
  database: 'students'
});

// Connect
db.connect(function(err) {
  if (err) throw err;
  console.log("Mysql Connected!");

  // Create Table
  var sql = "CREATE TABLE student (rollno INT(6),name VARCHAR(20), branch VARCHAR(20))";
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });

  // Inserting data into the student table
  var sql = "INSERT INTO student (rollno, name, branch) VALUES ('3', 'Sereyvann Ros','IT Support')";
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

  //  Altering table by adding new column class varchar(20)
  var sql = "ALTER TABLE student ADD age VARCHAR(20)";
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Added [age] column into table student ");
  });

//  Deleting a row from the table
  var sql = "DELETE FROM student WHERE rollno = '1'";
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });

// Drop column branch
  var sql = "ALTER TABLE student DROP COLUMN branch";
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Drop column branch successfully");
  });
  
//  Alter table by changing the data type of rollno to number(8).
  var sql = "ALTER TABLE student MODIFY rollno INT(8)";
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Change rollno int6 to int8");
  });

//  Delete all the data from student table.
  var sql = "DELETE FROM student";
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
//  Delete the table.
  var sql = "DROP TABLE student";
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table deleted");
  });

  db.end((err) =>{});
});






