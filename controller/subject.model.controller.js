const db = require("../models");
const response = require('../helpers/response.helper');
const { subjects } = require("../models");
require('../node_modules/dotenv');
const validator = require('../node_modules/validator');
const Subject = db.subjects;

exports.create = async (req, res) => {
    const subject_name = req.body.subject_name;
    const teacher = req.body.teacher;
    const subject_code = req.body.subject_code;
    const student_id = req.body.student_id;
    try {
        if (subject_name == null || subject_name === " " || teacher == null || teacher === " " || subject_code == null || subject_code === " ") {
            return response.responseHelper(res, false, "All fields are required", "Fill every fields");
        }
        else {
            try {
                let result = await Subject.create(
                    {
                        subject_name,
                        teacher,
                        subject_code,
                        student_id
                    }
                );
                if (result) {
                    return response.responseHelper(res, true, "Record inserted Successfullly", "Subject created successfully");
                } else {
                    return response.responseHelper(res, false, "Entry failed", "Something went wrong");
                }
            }

            catch (error) {
                console.log(error)
                return response.responseHelper(res, false, "Entry Unsuccessfull", "Something went wrong");
            }

        }
    } catch (error) {
        console.log(error);
        return response.responseHelper(res, false, "No data given", "No data is given");
    }

}