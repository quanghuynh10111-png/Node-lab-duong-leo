module.exports = (req, res, next) => {
  // Giả lập auth: chỉ check header 'x-api-key'
  if (req.headers === 'leo-oi-leo') {
    next();
  } else {
    res.status(401).json({ error: 'Không có key, Leo ơi!' });
  }
};
