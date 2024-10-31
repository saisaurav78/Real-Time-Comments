export const login = (req, res) => {
  const username = req.body.username;

  if (!username) {
    return res.status(400).json({ message: 'Username is required' });
  }
  req.session.username = username;
  return res.status(200).json({ message: 'success', sessionID:req.sessionID });
};
