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

async function remove (url, file) {
    axios
        .delete(url, {
            file: file
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
    return res.data
}

export {remove as removeFiles, PostFiles, getFiles}