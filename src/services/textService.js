import axios from 'axios'
import { generateRandomKey } from '../utils/keyGenerator';

export const getSimilarSoundingWords = async (text) => {
    try {
        const response = await axios.get(`https://api.datamuse.com/words?sl=${text}`)
        return response.data.map(item => ({ key: generateRandomKey(), word: item.word }))
    } catch (error) {
        console.error("Error fetching data from Datamuse API:", error);
        return null;
    }
}