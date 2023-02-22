import express, { json } from "express";
import cors from "cors";
import bodyParser from "body-parser";

let files = [
	{
		title: "Titulo 1",
		body: "#Oi, aqui e um h1",
	},
	{
		title: "Titulo 2",
		body: "##Oi, aqui e um h2",
	},
	{
		title: "Titulo 3",
		body: "###Oi, aqui e um h3",
	},
];

const app = express();

app.use(bodyParser.json());

app.use(
	cors({
		origin: "http://localhost:5173",
	}),
);

let trash = [];

const port = 3000;

app.get("/files", (req, res) => res.json(files));

app.get("/files/:title", (req, res) => {
	const { title } = req.params;
	res.json(files.find((file) => file.title.toLowerCase() == title.toLowerCase()));
});

app.get("/trash", (req, res) => {
	res.json(trash);
});

app.post("/trash", (req, res) => {
	const { item } = req.body;
	trash.push(item);
	return res.json(trash);
});

app.post("/files", (req, res) => {
	const { item } = req.body;
	files.push(item);
	return res.json(files);
});

app.delete("/trash/:title", (req, res) => {
	const { title } = req.params;
	const deleted = trash.find((file) => file.title == title);
	if (deleted) {
		trash = trash.filter((file) => file != deleted);
		return res.json(trash);
	} else {
		res.status(404);
		res.json({ message: "Could not find item with the following title:", title });
	}
});

app.delete("/files/:title", (req, res) => {
	const { title } = req.params;
	console.log(req.params);
	const deleted = files.find((file) => file.title == title);
	if (deleted) {
		files = files.filter((file) => file != deleted);
		return res.json(files);
	} else {
		res.status(404);
		res.json({ message: "Could not find item with the following title:", title });
	}
});

app.put("/files", (req, res) => {
	const { item } = req.body;
	const indexOfElement = files.indexOf(files.find((element) => element.title.toLocaleLowerCase() == item.title.toLowerCase()));
	files[indexOfElement] = item;
	return res.json(files);
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
