module.exports = mongoose => {
    const Comment = mongoose.model(
        "comment",
        mongoose.Schema({
            walkId: Number,
            walkName: String,
            userId: String,
            commentId: Number,
            comment: String
        })
    );

    return Comment;
};