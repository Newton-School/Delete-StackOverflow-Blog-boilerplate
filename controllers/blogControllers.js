const Blog   = require("../models/blog.js");


const getAllBlog =async (req, res) => {

    const allBlog = await Blog.find({});
    res.status(200).json({
        status: 'success',
        data: allBlog
    })
   
}


const createBlog = async (req, res) => {

    try{
        const blog = await Blog.create(req.body);
        res.status(200).json({
            message: 'Blog added successfully',
            blog_id: blog._id,
            status: 'success'
        });
    }catch(err){
        res.status(500).json({
            status: 'fail',
            message: err.message
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

404 Status Code
json = {
    status: 'fail',
    message: 'Given Blog doesn't exist'
}

3. Something went wrong

500 Status Code
json = {
    "status": 'fail',
    "message": error message
}

*/

const deleteBlog = async (req, res) => {

    //Write your code here.
}

module.exports = { getAllBlog, createBlog, deleteBlog };