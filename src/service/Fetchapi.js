const BASE_URL = "https://pixabay.com/api/";
const KEY = "37603150-cf2f7acce1783634ed18c2efe";


const fetchApi = (search, page) => {
    return fetch(`${BASE_URL}?q=${search}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`).
        then(res => res.json())
};

export default fetchApi;