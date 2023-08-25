import express from 'express';
import { getAllSnippets, getRawFileData } from './snippets.controller.js';
const snippetsRouter = express.Router();
snippetsRouter.get('/', getAllSnippets);
snippetsRouter.get('/file', getRawFileData);
export default snippetsRouter;
