import Course from "../models/Course.js";

const getCourses = async (req, res) => {
    try {
        const courses = await Course.find({});
        res.json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getCourseById = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (course) {
            res.json(curse);
        } else {
            res.status(404).json({ message: 'Curso no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const createCourse = async (req, res) => {
    const { courseName, courseDescription, numberUnits, rating, duration, status, progress, points, creator } = req.body;

    const newCourse = new Course({
        courseName,
        courseDescription,
        numberUnits,
        rating,
        duration,
        status,
        progress,
        points,
        creator,
    });

    try {
        const createdCourse = await newCourse.save();
        res.status(201).json(createdCourse);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


const updateCourse = async (req, res) => {
    const { courseName, courseDescription, numberUnits, rating, duration, status, progress, points, creator } = req.body;

    try {
        const course = await Course.findById(req.params.id);

        if (course) {
            course.courseName = courseName;
            course.courseDescription = courseDescription;
            course.numberUnits = numberUnits;
            course.rating = rating;
            course.duration = duration;
            course.status = status;
            course.progress = progress;
            course.points = points;
            course.creator = creator;

            const updatedCourse = await course.save();
            res.json(updatedCourse);
        } else {
            res.status(404).json({ message: 'Curso no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


const deleteCourse = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);

        if (course) {
            await course.remove();
            res.json({ message: 'Curso eliminado' });
        } else {
            res.status(404).json({ message: 'Curso no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



export {
    getCourses,
    getCourseById,
    createCourse,
    updateCourse,
    deleteCourse,
};
