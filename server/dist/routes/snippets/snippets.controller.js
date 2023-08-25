var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
export const getAllSnippets = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const snippetsQueryString = 'query { viewer { gists(first: 10) { nodes { owner { login avatarUrl url } url createdAt description stargazerCount files { name text language { color id name } } } } } }';
    try {
        const result = yield githubApi.post('/graphql', {
            query: snippetsQueryString
        });
        return res.status(200).send(result.data.data.viewer.gists.nodes);
    }
    catch (error) {
        console.error(error);
        return res.status(500).send({ error: 'Malformed request' });
    }
});
