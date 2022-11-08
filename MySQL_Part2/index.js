const express = require("express")
const mysql = require("mysql2")
const app = express()
app.use(express.json())

// Create connection
const dbConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "new_world"
})

// Connect to MySQL
dbConnection.connect((err) => {
  if (err) throw err
  console.log("Connected")
})

app.post("/country/capital", (req, res) => {
  dbConnection.execute('SELECT Name FROM city WHERE ID = (SELECT Capital FROM Country WHERE Name = ?)', [req.body.country], (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send()
    } else {
      res.json(rows)
    }
  })
})

app.post("/country/region", (req, res) => {
  dbConnection.execute('SELECT Language FROM countrylanguage WHERE CountryCode IN (SELECT Code FROM Country WHERE Region = ?)', [req.body.region], (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send()
    } else {
      res.json(rows)
    }
  })
})

app.post("/cities/language", (req, res) => {
  dbConnection.execute('SELECT COUNT(DISTINCT Name) FROM city WHERE CountryCode IN (SELECT CountryCode FROM countrylanguage WHERE Language = ?)', [req.body.language], (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send()
    } else {
      res.json(rows)
    }
  })
})

app.post("/continents", (req, res) => {
  dbConnection.execute(`
    SELECT Continent, count(countryLanguage.Language) FROM country
    INNER JOIN countryLanguage ON country.Code = countryLanguage.CountryCode
    GROUP BY Continent
    ORDER BY countryLanguage.Language DESC
  `, [], (err, rows) => {
    if (err) {
      console.error(err)
      res.status(500).send()
    } else {
      res.json(rows)
    }
  })
})

// Create Database
app.get("/createdb", (req, res) => {
  const sql = "CREATE DATABASE partTwo"
  dbConnection.query(sql, (err) => {
    if (err) throw err
    res.send("Database created!")
  })
})

app.get("/", (req, res) => {
  res.send("Localhost connected")
})

app.listen(3001, () => {
  console.log("Localhost connected");
})