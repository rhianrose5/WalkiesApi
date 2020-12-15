module.exports = mongoose => {
    const Photo = mongoose.model(
        "photo",
        mongoose.Schema({
            walkId: Number,
            walkName: String,
            photoId: Number,
            photo: String
        })
    );

    return Photo;
};