module.exports = (app, db) => {
  app.post('/post', async (req, res) => {
    const post = await db.Post.create({
      title: req.body.title,
      content: req.body.content,
      AuthorId: req.body.AuthorId,
    })

    res.json(post)
  })
}
