import axios from 'axios';

const BASE_URL = "https://pixabay.com/api/";
const KEY = "37603150-cf2f7acce1783634ed18c2efe";

const fetchApi = async (search, page) => {
    return await fetch(`${BASE_URL}?q=${search}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
};

// async function fetchApi(search, page) {
  
//       const response = await axios.get(`${BASE_URL}?q=${search}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`);
//       const data = response.data
//       return data
//   } 

export default fetchApi;