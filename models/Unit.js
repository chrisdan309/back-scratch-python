import mongoose from "mongoose";

const unitSchema = mongoose.Schema(
	{
		courseID: {
			type: String,
			required: true,
			trim: true,
		},
		unitNumber: {
			type: Number,
			required: true,
		},
		unitName: {
			type: String,
			required: true,
			trim: true,
		},
		description: {
			type: String,
			required: true,
			trim: true,
		},
		video: {
			type: String,
			required: false,
			trim: true,
		},
		quizzID: {
			type: String,
			required: false,
			trim: true,
		},
		completed: {
			type: Boolean,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Unit = mongoose.model("Unit", unitSchema);
export default Unit;
