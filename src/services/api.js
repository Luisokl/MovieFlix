import axios from "axios";

// Base da URL: https://api.themoviedb.org/3/
// URL api: 'movie/now_playing?api_key=d0ce0c58265abe93764d94b4d4917966&language=pt-BR'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;