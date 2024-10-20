const express = require("express");
const router = express.Router();

const {auth,isAdmin,isInstructor,isStudent} = require("../middleware/auth");

const {
    uploadCourse,
    getAllCourses,
    getCourseDetails,
} = require("../controllers/course");

const {
    createTag,getTags,getTagsCourse,
} = require("../controllers/Tags");

const {
    createSection,updateSection,deleteSection,
} = require("../controllers/section");

const {
    createSubSection,deleteSubSection,updateSubSection,
} = require("../controllers/subsection");

const {
    createRating,
    getAllRating,
    getAvgRating
} = require("../controllers/ratingAndReviews")

router.post("/upload-course",auth,isInstructor,uploadCourse);
router.post("/create-section",auth,isInstructor,createSection);
router.post("/create-sub-section",auth,isInstructor,createSubSection);
router.put("/update-section",auth,isInstructor,updateSection);
router.delete("/delete-section",auth,isInstructor,deleteSection);
router.put("/update-sub-section",auth,isInstructor,updateSubSection);
router.delete("/delete-sub-section",auth,isInstructor,deleteSubSection)


router.get("/get-all-courses",auth,isStudent,getAllCourses);
router.get("/get-course-details",auth,getCourseDetails);


router.post("/create-category",auth,isAdmin,createTag);
router.get("/get-category",getTags);
router.get("/get-category-course",auth,getTagsCourse);
router.post("/create-rating",auth,createRating);
router.get('/get-avg-rating',getAvgRating);
router.get('/get-rating',getAllRating);




module.exports = router;
