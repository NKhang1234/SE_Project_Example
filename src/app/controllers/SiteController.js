const Course = require('../models/Course.js');
const { mutipleMongooseToObject } = require('../../util/mongoose.js');

class SiteController {
    // [GET] Path: ./home
    index(req, res,next) {
        Course.find({})
            .then(courses => {
                //courses = courses.map(course => course.toObject());
                res.render('home',{
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(error => next(error));
    }

    // [GET] Path: ./search
    search(req, res) {
        res.render('search');
    }
    
}

module.exports = new SiteController;