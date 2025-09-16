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
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const snippetsQueryString = 'query { viewer { gists(first: 10, orderBy: {field:CREATED_AT, direction: DESC}) { nodes { owner { login avatarUrl url } url createdAt description stargazerCount files { name text language { color id name } } } } } }';
    try {
        const result = yield githubApi.post('/graphql', {
            query: snippetsQueryString
        });
        const nodes = (_d = (_c = (_b = (_a = result === null || result === void 0 ? void 0 : result.data) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.viewer) === null || _c === void 0 ? void 0 : _c.gists) === null || _d === void 0 ? void 0 : _d.nodes;
        console.log(nodes);
        return res.status(200).send((_h = (_g = (_f = (_e = result === null || result === void 0 ? void 0 : result.data) === null || _e === void 0 ? void 0 : _e.data) === null || _f === void 0 ? void 0 : _f.viewer) === null || _g === void 0 ? void 0 : _g.gists) === null || _h === void 0 ? void 0 : _h.nodes);
    }
    catch (error) {
        console.error(error);
        return res.status(500).send({ error: 'Malformed request' });
    }
});
