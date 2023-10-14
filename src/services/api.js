import axios from 'axios';

axios.defaults.baseURL = 'https://6453ab91c18adbbdfea42414.mockapi.io';

export const getTweets = async () => {
    try {
    const data = await axios.get(`/users`);
    return data;
} catch (error) {
    throw new Error(error.response || 'Network error');
}
};

export const updateTweets = async (id, followers, following) => {
    try {
    const data = await axios.put(`/users/${id}`, {
        followers,
        following,
    });

    return data;
} catch (error) {
    throw new Error(error.response || 'Network error');
}
};
