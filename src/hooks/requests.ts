import axios from 'axios';

const API_URL = 'https://codle-api-xbai7z5q3q-uc.a.run.app';

const fetchCodleWord = async () => {
  const result = await axios.get(`${API_URL}/codle/word`);

  if (result.status === 200) {
    const { codleWord } = result.data;
    return codleWord;
  }
};

export default fetchCodleWord;
