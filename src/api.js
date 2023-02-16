import axios from "axios";

async function PostFiles (url, file) {
    axios
        .post(url, {
            item: file,
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

async function removeFromAPI (url, file) {
    axios
        .delete(url, {
            item: file
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

async function getFiles (url) {
    const res = await axios.get(url)
    console.log(res)
    return res.data
}

export {removeFromAPI, PostFiles, getFiles}