// Utility function to generate a simple random key
export const generateRandomKey = () => {
    return Math.random().toString(36).substr(2, 9); // Generates a random alphanumeric string
};