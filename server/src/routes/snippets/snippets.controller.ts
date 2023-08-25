import { Request, Response } from 'express';
import axios from 'axios';

export const getAllSnippets = async (_req: Request, res: Response) => {
  try {
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

    return res.status(500).send(result.data.message);
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      error: 'Uncaught service exception'
    });
  }
};

export const getRawFileData = async (req: Request, res: Response) => {
  const { rawUrl } = req.query as { rawUrl: string };
  if (!rawUrl) return;

  const result = await axios.get(rawUrl);

  if (result.status === 200) {
    return res.status(200).send(result.data);
  }
  return res.status(500).send({ error: 'Uncaught service exception' });
};
