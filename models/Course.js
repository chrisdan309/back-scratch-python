import mongoose from "mongoose";

const courseSchema = mongoose.Schema(
	{
        courseName: {
            type: String,
            required: true,
            trim: true,
        },
        courseDescription: {
            type: String,
            required: true,
            trim: true,
        },
        numberUnits: {
            type: Number,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
        },
        duration: {
            type: Number,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
        progress: {
            type: Number,
            required: true,
        },
        points: {
            type: Number,
            required: true,
        },
        creator: {
            type: String,
            required: true,
        },
	},
	{
		timestamps: true,
	}
);

const Course = mongoose.model("Course", courseSchema);
export default Course;
