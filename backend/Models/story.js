
const mongoose = require("mongoose")
const Comment = require("./comment")
const slugify = require("slugify")

const StorySchema = new mongoose.Schema({

    author: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },
    slug: String,
    title: {
        type: String,
        required: [true, "Please provide a name for the puppy"],
        unique: true,
        minlength: [2, "Please provide a title least 2 characters "],
    },
    content: {
        type: String,
        required: [true, "Please a provide a content "],
        minlength: [5, "Please provide a content least 5 characters "],
    },
    age: {
        type: String,
        required: [true, "Each puppy must have an age"],
    },
    height: {
        type: String,
        required: [true, "Please input the puppy height"]
    },
    weight: {
        type: String,
        required: [true, "Please input the puppy weight"]
    },
    price: {
        type: String,
        required: [true, 'Each puppy must have a price']
    },
    status: {
        type: String,
        required: [true, 'Please Input the health status of that puppy']
    },
    image: {
        type: String,
        default: "default.jpg"
    },
    readtime: {
        type: Number,
        default: 3
    },
    likes: [{
        type: mongoose.Schema.ObjectId,
        ref: "User"
    }],
    likeCount: {
        type: Number,
        default: 0
    },
    comments: [{
            type: mongoose.Schema.ObjectId,
            ref: "Comment"
    }],
    commentCount: {
        type: Number,
        default: 0
    }


}, { timestamps: true })

StorySchema.pre("save",  function (next) {

    if (!this.isModified("title")) {
        next();
    }


    this.slug = this.makeSlug()

    next()

})

StorySchema.pre("remove", async function (next) {

    const story= await Story.findById(this._id)

    await Comment.deleteMany({
        story : story 
    })

})

StorySchema.methods.makeSlug = function () {
    return slugify(this.title, {
        replacement: '-',
        remove: /[*+~.()'"!:@/?]/g,
        lower: true,
        strict: false,
        locale: 'tr',
        trim: true
    })

}

const Story = mongoose.model("Story", StorySchema)

module.exports = Story;