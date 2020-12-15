const db = require("../models");
const Comment = db.comments;

exports.findAll = (req, res) => {
    const walkName = req.query.walkName;

    var condition = walkName ? {
        walkName: walkName
    } : {}

    Comment.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving comments."
            });
        });
};

exports.create = (req, res) => {
    console.log(req);
    // Validate request
    if (!req.body.comment) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    function CreateGuid() {
        function _p8(s) {
            var p = (Math.random().toString(16) + "000000000").substr(2, 8);
            return s ? "-" + p.substr(0, 4) + "-" + p.substr(4, 4) : p;
        }
        return _p8() + _p8(true) + _p8(true) + _p8();
    }

    // Create a comment
    const comment = new Comment({
        walkId: req.body.walkId,
        walkName: req.body.walkName,
        userId: req.body.userId,
        commentId: CreateGuid(),
        comment: req.body.comment
    });

    // Save comment in the database
    comment
        .save(comment)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tutorial."
            });
        });
};