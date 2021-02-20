
const express = require('express');
const router = express.Router();  // because app does not travel well :-)

const courses = [
    {id:1, coursename:'course1'},
    {id:2, coursename:'course2'},
    {id:3, coursename:'course3'}
];

router.get('/', (req, res) => {
    res.send(courses);
});

router.post('/', (req, res) => {

    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    const { error: detectedError, value:addedValue } = schema.validate(req.body);
    if (detectedError) {
        res.status(400).send(detectedError);
        return;
    }

    const course = {
        id: courses.length+1, 
        coursename: req.body.name //parsing the request body needed the app.use(express.json)
    };
    courses.push(course);
    res.status(201).send(course);
})

router.get('/:id', (req, res) => {
    const course = courses.find( (c) => {return c.id === parseInt(req.params.id)} );
    if (!course) {
        res.status(404).send(`the course with id ${req.params.id} was not found`);
    } else {
        res.status(200).send(`the course is...\n ${JSON.stringify(course)}`);
    }
    
});

module.exports = router;