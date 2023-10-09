import { Request, Response } from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `Bearer ${process.env.GITHUB_AUTH_TOKEN}`,
    'Content-Type': 'application/json'
  }
});

export const getAllSnippets = async (_req: Request, res: Response) => {
  const snippetsQueryString =
    'query { viewer { gists(first: 10, orderBy: {field:CREATED_AT, direction: DESC}) { nodes { owner { login avatarUrl url } url createdAt description stargazerCount files { name text language { color id name } } } } } }';

  try {
    const result = await githubApi.post('/graphql', {
      query: snippetsQueryString
    });

    return res.status(200).send(result.data.data.viewer.gists.nodes);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error: 'Malformed request' });
  }
};
