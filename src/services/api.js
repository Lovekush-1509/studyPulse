const BASE_URL = "http://localhost:4000/studynotion/version-1.0";

// AUTH ENDPOINTS
export const endpoints = {
  SENDOTP_API: BASE_URL + "/userRoute/sendotp",
  SIGNUP_API: BASE_URL + "/userRoute/signup",
  LOGIN_API: BASE_URL + "/userRoute/LogIn",
  RESETPASSTOKEN_API: BASE_URL + "/userRoute/reset-password-token",
  RESETPASSWORD_API: BASE_URL + "/userRoute/reset-password",
}

// PROFILE ENDPOINTS
let temp = "/profileRoute";
export const profileEndpoints = {
  GET_USER_DETAILS_API: BASE_URL +temp + "/get-user-details",
  GET_USER_ENROLLED_COURSES_API: BASE_URL +temp + "/get-enrolled-course",
}

// STUDENTS ENDPOINTS
temp = "/paymentRoute";
export const studentEndpoints = {
  COURSE_PAYMENT_API: BASE_URL + temp + "/capture-payment",
  COURSE_VERIFY_API: BASE_URL +temp + "/verify-signature",
  SEND_PAYMENT_SUCCESS_EMAIL_API: BASE_URL +temp + "/payment/sendPaymentSuccessEmail",
}

// COURSE ENDPOINTS
temp = "/courseRoute";
export const courseEndpoints = {
  GET_ALL_COURSE_API: BASE_URL + temp + "/get-all-courses",
  COURSE_DETAILS_API: BASE_URL + temp + "/get-course-details",
  EDIT_COURSE_API: BASE_URL + temp + "/course/editCourse",
  COURSE_CATEGORIES_API: BASE_URL + temp + "/get-category",
  CREATE_COURSE_API: BASE_URL + temp + "/upload-course",
  CREATE_SECTION_API: BASE_URL + temp + "/create-section",
  CREATE_SUBSECTION_API: BASE_URL + temp + "/create-sub-section",
  UPDATE_SECTION_API: BASE_URL + temp + "/update-section",
  UPDATE_SUBSECTION_API: BASE_URL + temp + "/update-sub-section",
  GET_ALL_INSTRUCTOR_COURSES_API: BASE_URL + temp + "/course/getInstructorCourses",
  DELETE_SECTION_API: BASE_URL  + temp + "/delete-section",
  DELETE_SUBSECTION_API: BASE_URL  + temp+ "/delete-sub-section",
  DELETE_COURSE_API: BASE_URL + temp + "/course/deleteCourse",
  GET_FULL_COURSE_DETAILS_AUTHENTICATED:
    BASE_URL + temp + "/get-course-details",
  LECTURE_COMPLETION_API: BASE_URL + temp + "/course/updateCourseProgress",
  CREATE_RATING_API: BASE_URL + temp + "/create-rating",
}

// RATINGS AND REVIEWS
export const ratingsEndpoints = {
  REVIEWS_DETAILS_API: BASE_URL + "/course/get-rating",
}

// CATAGORIES API
export const categories = {
  CATEGORIES_API: BASE_URL + "/get-category",
}

// CATALOG PAGE DATA
export const catalogData = {
  CATALOGPAGEDATA_API: BASE_URL + "/course/getCategoryPageDetails",
}
// CONTACT-US API
export const contactusEndpoint = {
  CONTACT_US_API: BASE_URL + "/reach/contact",
}

// SETTINGS PAGE API
temp = "/profileRoute";
export const settingsEndpoints = {
  UPDATE_DISPLAY_PICTURE_API: BASE_URL +temp+ "/update-profile-pic",
  UPDATE_PROFILE_API: BASE_URL +temp+ "/update-profile",
  CHANGE_PASSWORD_API: BASE_URL +temp+ "/change-password",
  DELETE_PROFILE_API: BASE_URL +temp+ "/delete-profile",
}