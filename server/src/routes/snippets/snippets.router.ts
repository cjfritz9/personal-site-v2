import express from 'express';
import { getAllSnippets } from './snippets.controller.js';

const snippetsRouter = express.Router();

snippetsRouter.get('/', getAllSnippets);

export default snippetsRouter;
