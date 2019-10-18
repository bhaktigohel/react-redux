import axios from 'axios';

function http(url, method, data) {
    const base_url = 'https://newsapi.org/v2';
    const api_key = 'apiKey=f1175677ba494ac89630d5317181e345';
    return new Promise((resolve, reject) => {
        axios({ method: method, url: base_url + url + api_key }).then((response) => {
            if (response.status === 200) {
                resolve(response.data);
            } else {
                console.log('failed');
            }
        }).catch((error) => {
            // console.log('error', error.response.data.message);
            reject(error.response.data.message);
        })
    })
}
export { http };