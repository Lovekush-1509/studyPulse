const express = require("express");
const router = express.Router();

const {auth, isStudent} = require("../middleware/auth");
const {
    deleteProfile,
    updateProfile,
    getEnrolledCourse,
    getUserDetails,
    updateProfilePic,
} = require("../controllers/Profile");

router.delete("/delete-profile",auth,isStudent,deleteProfile);
router.put("/update-profile",auth,updateProfile);
router.get("/get-enrolled-course",auth,getEnrolledCourse);
router.get("/get-user-details",auth,getUserDetails);
router.put("/update-profile-pic",auth,updateProfilePic);

module.exports = router;
