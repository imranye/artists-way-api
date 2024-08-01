   const express = require('express');
   const fs = require('fs');
   const csv = require('csv-parser');

   const app = express();
   const port = 3000;

   let exercises = [];

   // Load CSV data
   fs.createReadStream('data.csv')
     .pipe(csv())
     .on('data', (row) => {
       exercises.push(row);
     })
     .on('end', () => {
       console.log('CSV file successfully processed');
     });

   // Define routes
   app.get('/exercises', (req, res) => {
     res.json(exercises);
   });

   app.get('/exercises/week/:week', (req, res) => {
     const week = req.params.week;
     const weekExercises = exercises.filter(ex => ex.Week === week);
     res.json(weekExercises);
   });

   app.get('/exercises/category/:category', (req, res) => {
     const category = req.params.category;
     const categoryExercises = exercises.filter(ex => ex.Category === category);
     res.json(categoryExercises);
   });

   app.get('/exercises/week/:week/category/:category', (req, res) => {
     const week = req.params.week;
     const category = req.params.category;
     const filteredExercises = exercises.filter(ex => ex.Week === week && ex.Category === category);
     res.json(filteredExercises);
   });

   app.listen(port, () => {
     console.log(`Server is running on http://localhost:${port}`);
   });
