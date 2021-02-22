const db = require("../models");
const response = require('../helpers/response.helper');
const { students } = require("../models");
require('../node_modules/dotenv');
const validator = require('../node_modules/validator');
const Student = db.students;

exports.create = async (req, res) => {
    const student_name = req.body.student_name;
    const roll_no = req.body.roll_no;
    const subject_opted = req.body.subject_opted;

    const subject_id = req.body.subject_id;
    try {
        if (student_name == null || student_name === " " || roll_no == null || roll_no === " " || subject_opted == null || subject_opted === " ") {
            return response.responseHelper(res, false, "All fields are required", "Fill every fields");
        }
        else {
            try {
                let result = await Student.create(
                    {
                        student_name,
                        roll_no,
                        subject_opted,
                        subject_id
                    }
                );
                if (result) {
                    return response.responseHelper(res, true, "Record inserted Successfullly", "Student created successfully");
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