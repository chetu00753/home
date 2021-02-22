const db = require("../models");
const response = require('../helpers/response.helper');
require('../node_modules/dotenv');
const validator = require('../node_modules/validator');
const Post = db.post;

exports.createPost = async (req, res) => {
    const postTitle = req.body.postTitle;
    const content = req.body.content;
    const image = req.body.image;
    const type = req.body.type;
    // const user_id = req.userId;   //after login possible
    const user_id = req.body.user_id;
    try {
        if (postTitle == null || postTitle === " " || content == null || content === " " || image == null || image === " " || type == null || type === " " || user_id == null || user_id === "") {
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
                    return response.responseHelper(res, false, "Postname already exists", "Chose another Name for your post");
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

exports.filterPostByType = async (req, res) => {
    const searchType = req.body.type;

    try {
        if(searchType == null || searchType === " " || validator.isEmpty(searchType)){
            return response.responseHelper(res,false,"All fields are required","Invalid data");
        }
        try {
            let result = await Post.findAll({
                where: {
                    type: searchType
                },
                attributes: ['id', 'postTitle', 'content', 'image'],
            })
            if (!result) {
                return response.responseHelper(res, false, "No posts found in that catagory", "No posts found in that search catagory");
            }
            else {
                return response.responseHelper(res, true, result, "All post fetched successfully");
            }
        } catch (error) {
            console.log(error);
            return response.responseHelper(res, false, "Error", "Something went wrong..!!");
        }
    } catch (error) {
        return response.responseHelper(res,false,"No data passed","No data given");
    }
}

exports.filterPost_uploadedBy = async (req, res) => {
    const uploaded_by = req.body.id;

    try {
        let result = await Post.findAll({
            where: {
                user_id: uploaded_by
            }
        })
        if (result) {
            return response.responseHelper(res, true, result, "All post of this user fetched successfully");
        }
        else {
            return response.responseHelper(res, false, "No posts found By this user", "No posts found under this user");
        }
    } catch (error) {
        console.log(error);
        return response.responseHelper(res, false, "Error", "Something went wrong..!!");
    }
}

exports.GetPosts = async (req, res) => {
    try {
        let result = await Post.findAll(
            console.log("All Posts:", JSON.stringify())
        )
        if (result) {
            return response.responseHelper(res, true, result, "All Posts fetched successfully");
        }
    } catch (error) {
        return response.responseHelper(res, true, "Something went wrong", "Error Can't Fetch Posts");
    }

}

exports.updatePost = async (req, res) => {
    const id = req.body.id;
    const content = req.body.content;
    const image = req.body.image;
    const type = req.body.type;

    try {
        let result = await Post.findOne({
            where: {
                id: id
            }
        })
        if (!result) {
            return response.responseHelper(res, false, "Error", "Post not found");
        } else {
            result = await result.update({
                content,
                image,
                type
            })
            if (result) {
                return response.responseHelper(res, true, "Post Updated Successfully", "Update Successfull");
            }
            else {
                return response.responseHelper(res, false, "Error", "Can't update post");
            }
        }
    } catch (error) {
        console.log(error);
        return response.responseHelper(res, false, "Error", "Can't update post");
    }
}


