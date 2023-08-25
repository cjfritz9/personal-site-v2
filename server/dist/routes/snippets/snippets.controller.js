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
export const getAllSnippets = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield axios.get('https://api.github.com/users/cjfritz9/gists', {
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        });
        if (result.status === 200) {
            const snippets = result.data;
            return res.status(200).send(snippets);
        }
        return res.status(500).send(result.data.message);
    }
    catch (error) {
        console.error(error);
        return res.status(500).send({
            error: 'Uncaught service exception'
        });
    }
});
export const getRawFileData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { rawUrl } = req.query;
    if (!rawUrl)
        return;
    const result = yield axios.get(rawUrl);
    if (result.status === 200) {
        return res.status(200).send(result.data);
    }
    return res.status(500).send({ error: 'Uncaught service exception' });
});
