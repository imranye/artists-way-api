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

   app.get('/exercises/type/:type', (req, res) => {
     const type = req.params.type;
     const typeExercises = exercises.filter(ex => ex.Type === type);
     res.json(typeExercises);
   });

   app.get('/exercises/week/:week/type/:type', (req, res) => {
     const week = req.params.week;
     const type = req.params.type;
     const filteredExercises = exercises.filter(ex => ex.Week === week && ex.Type === type);
     res.json(filteredExercises);
   });

   app.get('/exercises/random', (req, res) => {
     const randomIndex = Math.floor(Math.random() * exercises.length);
     const randomExercise = exercises[randomIndex];
     res.json(randomExercise);
   });

   app.get('/exercises/search/:keyword', (req, res) => {
     const keyword = req.params.keyword.toLowerCase();
     const filteredExercises = exercises.filter(ex => 
       ex.Name.toLowerCase().includes(keyword) || 
       ex.Description.toLowerCase().includes(keyword) || 
       ex.Tags.toLowerCase().includes(keyword)
     );
     res.json(filteredExercises);
   });

   app.listen(port, () => {
     console.log(`Server is running on http://localhost:${port}`);
   });
