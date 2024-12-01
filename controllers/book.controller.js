import Book from '../models/book.model.js';

// @desc    Fetch all books
// @route   GET /books
// @access  Public
export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch books', error: error.message });
  }
};

// @desc    Create a new book
// @route   POST /books
// @access  Private (Requires authentication)
export const createBook = async (req, res) => {
  const { title, author } = req.body;

  if (!title || !author) {
    return res.status(400).json({ message: 'Title and author are required' });
  }

  try {
    const book = await Book.create({ title, author });
    res.status(201).json({ message: 'Book Added Successfully!',data:book });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create book', error: error.message });
  }
};
