const express = require('express');
const fs = require('fs');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3001;
const baseUrl = 'http://localhost:3001';

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'todo',
});

con.connect((err) => {
  if (err) throw err;
  console.log('Connected');
});

// Create todo list
app.post('/create', (req, res) => {
  const list_name = req.body.list_name;
  const id = req.body.id
  const sql = `INSERT INTO todo_list(list_name) VALUES('${list_name}, ${id}')`;
  con.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send();
    } else {
      res.status(200).json({
        list_name: list_name,
        id: id
      })
      console.log("Created todo");
    }
  });
});

// Show all todo lists
app.get('/lists', (req, res) => {
  const sql = `SELECT * FROM todo_list`;
  con.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({
        message: 'Something went wrong',
      });
      console.log('Error: ', err);
    } else {
      res.status(200).json({
        result
      });
    }
  });
});

// Update todo_list name
app.put('/update', (req, res) => {
  const id = req.body.id;
  const name = req.body.list_name;

  con.query('UPDATE todo_list SET list_name = ? WHERE id = ?', [name, id], (err, _result) => {
    if (err) {
      res.status(500).json({
        message: 'Something went wrong',
      });
    } else {
      res.status(200).json({
        id,
        name
      });
    }
  });
});

// Delete todo_list
app.delete('/delete', (req, res) => {
  const id = req.body.id
  con.query('DELETE FROM todo_list WHERE id = ?', [id], (err, result) => {
    if (err) {
      res.status(500).json({
        message: 'Something went wrong',
      });
      console.log('Error: ', err);
    } else {
      res.status(200).send();
      console.log("Deleted id: ", id);
      return;
    }
  });
});

// Create to-do task
app.post('/create_todo', (req, res) => {
  const todo_name = req.body.task_name;
  const completed = req.body.completed;
  const todo_id = req.body.todo_id

  if (typeof (completed) !== 'boolean') {
    console.error("Wrong type of input");
    res.status(400)
    res.send("Wrong type of input")
    return
  }

  const sql = `INSERT INTO task(task_name, completed, todo_id) VALUES('${todo_name}, ${completed}, ${todo_id}')`;
  con.query(sql, (err, _result) => {
    if (err) {
      res.status(500).json({
        status: '!OK',
        message: 'Something went wrong',
      });
      console.log('Error:', err);
    } else {
      res.status(200).json({
        todo_name: todo_name,
        completed: completed,
        todo_id: todo_id
      });
      return;
    }
  });
});

// Display all todo tasks
app.get('/todos', (req, res) => {
  con.query('SELECT * FROM task', (err, result) => {
    if (err) {
      res.status(500).json({
        status: '!OK',
        message: 'Something went wrong',
      });
      console.log('Error:', err);
    } else {
      res.status(200).json({
        result
      });
      return;
    }
  });
});

// Update todo
app.put('/update/todo', (req, res) => {
  const task_name = req.body.task_name
  const id = req.body.id;
  const completed = req.body.completed;

  con.query('UPDATE task SET completed = ? AND task_name = ? WHERE id = ?', [completed, task_name, id], (err, result) => {
    if (err) {
      res.status(500).json({
        status: '!OK',
        message: 'Something went wrong',
      });
      console.log('Error:', err);
    } else {
      res.status(200).json({
        completed,
        task_name,
        id,
      });
      return;
    }
  });
});

// Delete todo
app.delete('/delete/todo', (req, res) => {
  const id = req.body.id;

  con.query('DELETE FROM task WHERE id = ?', id, (err, result) => {
    if (err) {
      res.status(500).json({
        status: '!OK',
        message: 'Something went wrong',
      });
      console.log('Error: ', err);
    } else {
      res.status(200).send();
      console.log("Deleted id: ", id);
      return;
    }
  });
});

app.listen(PORT, () => {
  console.log(`Assignment project listening on port ${PORT}`);
});
