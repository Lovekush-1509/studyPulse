const cron = require("node-cron");
const User = require("../models/user");

const startUserDetailsJob = () => {
    // Runs every hour
    cron.schedule("0 * * * *", async () => {
        try {
            console.log("User details job started...");

            const users = await User.find({})
                .populate("additionalInfo")
                .populate({
                    path: "courses",
                    populate: {
                        path: "courseContent",
                    },
                });

            console.log("User data:", users);

        } catch (error) {
            console.error("Cron job failed:", error);
        }
    });
};

module.exports = startUserDetailsJob;