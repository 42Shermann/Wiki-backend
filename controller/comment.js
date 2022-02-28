const commentRouter = require('express').Router()
const Comment = require('../models/comment')

commentRouter.get('/:id', (request, response) => {
    const body = request.params.id
    Comment.find({ const:body }).sort('-date').then(comment => {
    response.json(comment)
  })
})

commentRouter.post('/', async (request, response) => {
    const body = request.body
    const comment = new Comment({
        userName: body.userName,
        date: new Date(),
        comment: body.comment,
        const: body.const
    })

    const newComment = await comment.save()
    
    response
    .status(200)
    .json(newComment)
})

module.exports = commentRouter