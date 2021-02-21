const db = require("../models");
const response = require('../helpers/response.helper');
const { post } = require("../models");
require('../node_modules/dotenv');
const validator = require('../node_modules/validator');
const Post = db.post;

exports.createPost = async (req, res) => {
    const postTitle = req.body.postTitle;
    const content = req.body.content;
    const image = req.body.image;
    const type=req.body.type;
   // const user_id = req.userId;   //after login possible
   const user_id=req.body.user_id;
    try {
        if (postTitle == null || postTitle === " " || content == null || content === " " || image == null || image === " " || type == null || type=== " " || user_id == null || user_id === "") {
            // if (validator.isEmpty(postTitle) || validator.isEmpty(content) || validator.isURL(image) || validator.isEmpty(type)) {
            //     return response.responseHelper(res, false, "Invalid data passed", "Failed to process data");
            // }
            return response.responseHelper(res, false, "All fields are required", "Fill every fields");
        }
      
        else {
            try {
                let result = await Post.findOne({
                    where: {
                        postTitle: postTitle,
                    }
                })
                if (result) {
                    return response.responseHelper(res,false, "Postname already exists", "Chose another Name for your post");
                }
                else {
                    let result = await Post.create(
                        {
                            postTitle,
                            content,
                            image,
                            type,
                            user_id
                        }
                    );
                    if (result) {
                        return response.responseHelper(res, true, "Post Update Successfull", "Post created successfully");
                    } else {
                        return response.responseHelper(res, false, "Post Error", "Something went wrong");
                    }
                }
            }
         catch (error) {
            console.log(error)
            return response.responseHelper(res, false, "Post Unsuccessfull", "Something went wrong");
        } 
      }
    } catch (error) {
        console.log(error)
        return response.responseHelper(res, false, "No data given", "No data is passed");
    }
}





