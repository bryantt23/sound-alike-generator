import axios from 'axios'

export const getSoundAlikeWords = async (text) => {
    try {
        const response = await axios.get(`https://api.datamuse.com/words?sl=${text}`)
        return response.data
    } catch (error) {
        console.error("Error fetching data from Datamuse API:", error);
        return null;
    }
}