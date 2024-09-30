import express from 'express';

// create an express app 
const app = express();

// Define routes 
app.get('/hello', function (req, res, next) {
    console.log(req.headers);
    res.json('You visited the helllo endpoint!')

});

app.get('/goodbye', function (req, res, next) {
    console.log(req.query);
    res.json('Same to you');
})


// Listen for incoming requests
app.listen(3000, function () {
    console.log('App is listening on port 3000');
});



