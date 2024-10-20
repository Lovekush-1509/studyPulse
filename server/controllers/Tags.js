const Tag = require("../models/Tag");

exports.createTag = async(req,res) =>{
    try{
        // data fetch 
        const {name,courseDescription} = req.body;
        if(!name || !courseDescription){
            return res.json({
                success:false,
                message:"All fields are required",
            });
        }

        const entry = await Tag.create({courseName:name,
                                        courseDescription:courseDescription,
        });
        return res.json({
            success:true,
            message:"Tag created succesfully",
        });
    }catch(e){
        return res.json({
            success:false,
            message:"Error occured during creating tag",
            error:e.message,
        });
    }
}


exports.getTags = async(req,res) =>{
    try{
        const tags = await Tag.find({});
        return res.json({
            success:true,
            message:"Tag are there",
            data:tags,
        });
    }catch(e){
        return res.json({
            success:false,
            message:"Error occured during finding tag",
            error:e.message,
        });
    }
}


exports.getTagsCourse = async(req,res) =>{
    try{
        const {categoryId} = req.body;
        const selectedCategory = await Tag.findById({_id:categoryId}).populate("course").exec();

        if(!selectedCategory){
            return res.json({
                success:false,
                message:"No course found of this category",
            });
        }

        const diffCourse = await Tag.find({_id:{$ne:categoryId}}).populate(course);
        
        return res.json({
            success:true,
            selectedCategory:selectedCategory,
            diffCourse:diffCourse,
        });
    }catch(e){
        return res.json({
            success:false,
            message:e.message,
        });
    }
}