//header comments below make api much neater:

// @desc                         get all emails
// @route                        GET /api/v1/emails
// @access                       Public
exports.getEmails = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'show all emails'});
};

// @desc                         Get single email
// @route                        GET /api/v1/emails/:id
// @access                       Public
exports.getEmail = (req, res, next) => {
  res.status(200).json({ success: true, msg: `show email ${req.params.id}` });
};

// @desc                         create new email
// @route                        POST /api/v1/emails
// @access                       Private
exports.createEmail = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'create new email' });
};

// @desc                         create new email
// @route                        PUT /api/v1/emails/:id
// @access                       Private
exports.updateEmail = (req, res, next) => {
  res.status(200).json({ success: true, msg: `update email ${req.params.id}` });
};

// @desc                         create new email
// @route                        DELETE /api/v1/emails/:id
// @access                       Private
exports.deleteEmail = (req, res, next) => {
  res.status(200).json({ success: true, msg: `delete email ${req.params.id}` });
};
