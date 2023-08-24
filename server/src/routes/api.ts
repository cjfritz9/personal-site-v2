import express from 'express';

const api = express.Router();

import snippetsRouter from './snippets/snippets.router.js';
api.use('/snippets', snippetsRouter);

export default api;
