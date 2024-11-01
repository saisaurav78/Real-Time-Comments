import connection from '../config/config.js';
export const postComment = (req, res) => {
  const { username, comment } = req.body;
  if (!username || !comment) {
    return res.status(400).json({ message: 'Username and comment are required' });
  }

  const query = 'INSERT INTO comments(username, comment) VALUES (?, ?)';

  connection.query(query, [username, comment], (queryerr, result) => {
    if (queryerr) {
      console.error('Error inserting comment:', queryerr);
      return res
        .status(500)
        .json({ message: 'An error occurred while posting the comment', queryerr });
    }
    return res.status(201).json({ message: 'Comment posted successfully', result });
  });
};

export const getComment = (req, res) => {
  const query = 'SELECT * FROM comments ORDER BY comments.timestamp desc';

  connection.query(query, (queryerr, queryres) => {
    if (queryerr) {
      console.error('Error fetching comments:', queryerr);
      return res.status(500).json({ message: 'Failed to fetch comments', queryerr });
    }
    return res.status(200).json(queryres);
  });
};
