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