module.exports = (app, db) => {
  app.post('/author', async (req, res) => {
    const author = await db.Author.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    })

    res.json(author)
  })

  app.get('/authors', async (req, res) => {
    const authors = await db.Author.findAll({
      attributes: ['id', 'firstName', 'lastName'],
    })

    res.json(authors)
  })
}
