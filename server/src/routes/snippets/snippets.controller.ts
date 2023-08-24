import { Request, Response } from 'express';
import axios from 'axios';

export const getAllSnippets = async (_req: Request, res: Response) => {
  const result = await axios.get(
    'https://api.github.com/users/cjfritz9/gists',
    {
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    }
  );
  if (result.status === 200) {
    const snippets = result.data;
    return res.status(200).send(snippets);
  }

  if (result.status === 422) {
    return result;
  }

  return res.status(500).send({
    error: 'Uncaught service exception'
  });
};
