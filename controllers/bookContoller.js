function booksController(Book) {
  function post(req, res) {
    const book = new Book(req.body);

    book.save((err) => {
      if (err) {
        return res.send(err);
      }
      return res.status(201).json(book);
    });
  }

  function get(req, res) {
    const query = {};
    if (req.query.genre) {
      query.genre = req.query.genre;
    }
    Book.find(query, (err, books) => {
      if (err) {
        return res.send(err);
      }
      return res.json(books);
    });
  }

  return { post, get };
}

module.exports = booksController;
