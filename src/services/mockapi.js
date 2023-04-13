import axios from 'axios';

axios.defaults.baseURL = 'https://6437f076c1565cdd4d61e25b.mockapi.io';

export const addContactsApi = (todo) => {
    return axios
        .post('contacts', todo)
        .then(({ data }) => { return {...todo, id: data.id} });
}

export const getContactsApi = () => {
    return axios
        .get('contacts')
        .then(({ data }) => data);
}

export const removeContactsApi = (id) => {
    return axios
        .delete(`contacts/${id}`)
        .then(() => id);

}