const Blog   = require("../models/Blog.js");


const getallblog =async (req, res) => {

    const all_blog = await Blog.find({});
    res.status(200).json({
        "status": "success",
        "data": all_blog
    })
   
}


const createblog = async (req, res) => {

    try{
        const blog = await Blog.create(req.body);
        res.status(200).json({
            "message": 'Blog added successfully',
            "blog_id": blog._id,
            "status": 'success'
        });
    }catch(err){
        res.status(404).json({
            "status": 'fail',
            "message": err.message
        });
    }
}

/*

deleteblog Controller


2. delete the blog with given id in req.params.

Response --> 

1. Success

200 Status code
json = {
  status: 'success',
  message: 'Blog deleted successfully'
}

2. Discussion Doesnot exist

403 Status Code
json = {
    "status": 'fail',
    "message": 'Given Blog doesnot exist'
}

3. Something went wrong

404 Status Code
json = {
    "status": 'fail',
    "message": error message
}

*/

const deleteblog = async (req, res) => {

    //Write your code here.
}

module.exports = { getallblog, createblog, deleteblog };