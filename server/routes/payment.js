const express = require("express");
const router = express.Router();

const {auth,isStudent} = require("../middleware/auth");
const {
    verifySignature,
    capturePayment,
} = require("../controllers/payment");

router.post("/verify-signature",verifySignature);
router.post("/capture-payment",auth,isStudent,capturePayment);

module.exports = router;
