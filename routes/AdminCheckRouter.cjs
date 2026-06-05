const CheckIsAdmin = require('../middleware/AdminSecurityPanel.cjs');
const ServerSideSecurity = require('../middleware/ServerSideSecurity.cjs');
const express = require('express');
const AdminCheckRouter = express.Router();
AdminCheckRouter.get('/accountstatus', ServerSideSecurity, CheckIsAdmin);
module.exports = AdminCheckRouter;