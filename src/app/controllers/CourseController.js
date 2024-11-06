const Course = require('../models/Course.js');
const { mutipleMongooseToObject } = require('../../util/mongoose.js');

class CourseController {
    // [GET] Path: ./search
    show(req, res, next) {
        Course.findOne({slug: req.params.slug})
                .then(course => {
                    res.json(course);
                })
                .catch(next);
    }
    
}

module.exports = new CourseController;