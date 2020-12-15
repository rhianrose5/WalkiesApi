module.exports = app => {
    const walks = require("../controllers/walk.controller.js");
    const facilities = require("../controllers/facility.controller.js");
    const photos = require("../controllers/photo.controller.js");
    const comments = require("../controllers/comment.controller.js");

    var router = require("express").Router();

    // Retrieve all walks
    router.get("/walks/", walks.findAll);

    // Retrieve all facilities
    router.get("/facilities/", facilities.findAll);

    // Retrieve all photos
    router.get("/photos/", photos.findAll);

    // Retrieve all comments
    router.get("/comments/", comments.findAll);

    app.use('/api', router);
};