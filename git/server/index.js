const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
//const { default: Notices } = require("../client/src/Pages/Notices");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "bams",
  multipleStatements: true
});

app.post("/create", (req, res) => {

  const fname = req.body.fname;
  const lname = req.body.lname;
  const age = req.body.age;
  const gender = req.body.gender;
  const pswd = req.body.pswd;  
  const subject = req.body.subject;
  const department = req.body.department;
  const add = req.body.add;
  const city = req.body.city;
  const email = req.body.email;
  const contact = req.body.contact;
  

  db.query(
    'INSERT INTO professors (first_name, last_name, age, gender, password, subject, department, address, city, email, contact) VALUES (?,?,?,?,?,?,?,?,?,?,?)',
    [fname, lname, age, gender, pswd, subject, department, add, city, email, contact],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/professor", (req, res) => {
  db.query("SELECT * FROM professors", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/professorupdate", (req, res) => {
  const fname = req.body.fname;
  const lname = req.body.lname;
  const age = req.body.age;
  const gender = req.body.gender;
  const pswd = req.body.pswd;  
  const subject = req.body.subject;
  const department = req.body.department;
  const add = req.body.add;
  const city = req.body.city;
  const email = req.body.email;
  const contact = req.body.contact;
  const id = req.body.id;
  
  db.query(
    "UPDATE professors SET first_name = ?, last_name = ?, age = ?, gender = ?, password = ?, subject = ?, department = ?, address = ?, city = ?, email = ?, contact = ? WHERE id = ?",
    [fname, lname, age, gender, pswd, subject, department, add, city, email, contact, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/professordelete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM `professors` WHERE id = ?", id, 
  (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});







app.post("/createschedule", (req, res) => {

  const name = req.body.name;
  const classs = req.body.classs;
  const section = req.body.section;
  const session = req.body.session;
  const semester = req.body.semester;  
  const subject = req.body.subject;
  const stime = req.body.stime;
  const ftime = req.body.ftime;
 
  

  db.query(
    'INSERT INTO schedule (name, class, section, session, semester, subject, Start_time, end_time) VALUES (?,?,?,?,?,?,?,?)',
    [name, classs, section, session, semester, subject, stime, ftime],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/schedule", (req, res) => {
  db.query("SELECT * FROM schedule", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});



app.get("/report", (req, res) => {
  db.query("SELECT * FROM report", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


app.delete("/reportdelete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM `report` WHERE id = ?", id, 
  (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});




app.get("/attendance", (req, res) => {
  db.query("SELECT * FROM attandance", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


app.delete("/attendancedelete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM `attandance` WHERE id = ?", id, 
  (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});





app.post("/generatenotice", (req, res) => {

  const heading = req.body.heading;
  const notice1 = req.body.notice1;

  db.query(
    'INSERT INTO notices (heading, notices) VALUES (?,?)',
    [heading, notice1],
   (err, result) => {
      if (err) {
       console.log(err);
     } else {
       res.send("Values Inserted");
      }
    }
  );
});




app.get("/noticeboard1", (req, res) => {
  db.query("SELECT * FROM noticeboard", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});





{
//  app.get("/biometric1", (req, res) => {
 //  db.query("SELECT * FROM biometric", (err, result) => {
  //   if (err) {
   //    console.log(err);
   //  } else {
   //    res.send(result);
   //  }
  // });
// });
}

app.post("/biometric1", (req, res) => {

  const professor_id = req.body.professor_id;

  db.query(
    'SELECT * FROM biometric WHERE professor_id = ?',
    [professor_id],
    (err, result) => {
      if (err) {
        req.setEncoding({err: err});
      } else {
        if(result.length > 0){
          res.send(result);
        }else{
          res.send({message: "wrong ID"});
        }
      }
    }
  );
});


app.post("/adddevice", (req, res) => {

  const dname = req.body.dname;
  const ipadd = req.body.ipadd;
  const deviceid = req.body.deviceid;
  const commenkey = req.body.commenkey;
  const portadd = req.body.portadd;  
  

  db.query(
    'INSERT INTO devicedetail (device_name, IP_address, device_id, commen_key, port_address) VALUES (?,?,?,?,?)',
    [dname, ipadd, deviceid, commenkey, portadd],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});


app.delete("/devicesetupdelete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM `devicedetail` WHERE id = ?", id, 
  (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/devicesetup", (req, res) => {
  db.query("SELECT * FROM devicedetail", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});



app.post("/registeradmin", (req, res) => {

  const email = req.body.email;
  const username = req.body.username;
  const pswd = req.body.pswd;

  db.query(
    'INSERT INTO admin (username, password, email) VALUES (?,?,?)',
    [username, pswd, email],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.post("/loginadmin", (req, res) => {

  const username = req.body.username;
  const pswd = req.body.pswd;

  db.query(
    'SELECT * FROM admin WHERE username = ? AND password = ?',
    [username, pswd],
    (err, result) => {
      if (err) {
        req.setEncoding({err: err});
      } else {
        if(result.length > 0){
          res.send(result);
        }else{
          res.send({message: "wrong name or pswd"});
        }
      }
    }
  );
});
app.get('/logout', (req, res) => {
  res.clearCookie('token');
  return res.json({Status: "Success"});
})





app.put("/reportupdate", (req, res) => {
  const name = req.body.name;
 
  const subject = req.body.subject;
  const clas = req.body.clas;
  const section = req.body.section;
  const semester = req.body.semester;
  const time = req.body.time;
  const contact = req.body.contact;
  const id = req.body.id;
  
  db.query(
   
    " UPDATE `report` SET `professor_name`= ? ,`subject`= ? ,`class`= ? ,`section`= ? ,`semester`= ? ,`time`= ? WHERE id = ? ",
    [name, subject, clas, section, semester, time, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});



/*
// Create a query to select all rows from the USERS table
const usersQuery = `SELECT * FROM users`;

// Execute the query
db.query(usersQuery, (err, rows) => {
  if (err) {
    console.log(err);
    process.exit();
  }

  // Create a query to select all rows from the INFO table
  const userInfoQuery = `SELECT * FROM info`;

  // Execute the query
  db.query(userInfoQuery, (err, rows) => {
    if (err) {
      console.log(err);
      process.exit();
    }

    // Combine the data from the two tables into an array
    const data = rows.map((user) => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        pin: user.pin,
        timeIn: rows.find((info) => info.user_email === user.email).timeIn,
      };
    });

    // Send the data back to the client
    app.get("/users", (req, res) => {
      res.json(data);
    });
  });
});
*/



app.post("/dummy", (req, res) => {

  const name = req.body.name;
  const pin = req.body.pin;

  db.query(
    'SELECT * FROM users WHERE name = ? AND pin = ?',
    [name, pin],
    (err, result) => {
      if (err) {
        req.setEncoding({err: err});
      } else {
        if(result.length > 0){
          res.send(result);
        }else{
          res.send({message: "wrong name or pswd"});
        }
      }
    }
  );
});

app.post("/dummyu", (req, res) => {

  const email = req.body.email;

  db.query(
    'SELECT * FROM info WHERE email = ?',
    [email],
    (err, result) => {
      if (err) {
        req.setEncoding({err: err});
      } else {
        if(result.length > 0){
          res.send(result);
        }else{
          res.send({message: "wrong ID"});
        }
      }
    }
  );
});



app.listen(8080, () => {
  console.log("Yey, your server is running on port 8080");
});



//let sql = `DELETE FROM student WHERE id =${req.params.id}`; 
//let query = db.query(sql, (err, result) =>{
  // if (err) throw err;
   //console.log("result");
   //res.send("post deleted");
//});