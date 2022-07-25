import ContentItem from "../models/contentItem.js";
import User from "../models/user.js";

const addContentItem = async (req, res, next) => {
    let contentObject = { ...req.body }
    contentObject.createdDate = new Date().getTime();
    
    const usersProjection = {
        password: false,
        _id: false,
        __v: false
    };

    User.findOne({username:contentObject.author}, usersProjection, (error, author) => {
        if (error) {
            next(error)
            console.error("Error while retrieving author data.")
        } else {
            contentObject.author = author
            const contentItem = new ContentItem(contentObject)
            contentItem.save((error, contentItem) => {
                if (error) {
                    next(error)
                    console.error("Error while adding content item.")
                } else {
                    res.status(200).send({ "message": "Content added" })
                }
            })
        }
    })
}

const getContent = async (req, res) => {
    ContentItem.find({}, (error, content) => {
        if (error) {
            next(error)
            console.error("Error while retrieving content.")
        } else {
            res.status(200).send(content)
        }
    })
}

export {
    addContentItem,
    getContent
}