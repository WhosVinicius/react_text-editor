import { faUserXmark } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

axios.defaults.headers.common = {
	"Content-Type": "application/json",
};

async function PostFiles(url, file) {
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

async function removeFromAPI(url, file) {
	console.log(url);
	axios
		.delete(url)
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
}

async function getFiles(url) {
	const res = await axios.get(url);
	console.log(res);
	return res.data;
}

async function putData(url, file) {
	axios
		.put(url, {
			item: file,
		})

		.then((res) => {
			console.log(`Status: ${res.status}`);

			console.log("Body: ", res.data);
		})
		.catch((err) => {
			console.error(err);
		});
}

export { putData, removeFromAPI, PostFiles, getFiles };
