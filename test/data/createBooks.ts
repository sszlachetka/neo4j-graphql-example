export const CREATE_BOOKS_MUTATION = `
mutation($createBooksInput: [BookCreateInput!]!) {
  createBooks(input: $createBooksInput) {
    books {
      title,
      author
    }
  }
}
`;

const BOOKS = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
  },
  {
    title: 'Beloved',
    author: 'Toni Morrison',
  },
];

export const CREATE_BOOKS_PARAMS = {
  createBooksInput: BOOKS,
};

export const CREATE_BOOKS_OUTPUT = {
  books: BOOKS,
};