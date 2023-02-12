import express, { json } from "express";
import cors from "cors";

const files = [
	{
		title: "Titulo 1",
		body: `#Oi, aqui e um h1##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2##Oi, aqui e um h2`,
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

app.use(express.urlencoded());
app.use(json());

app.use(
	cors({
		origin: "http://localhost:5173",
	}),
);

const port = 3000;

app.get("/", (req, res) => {
	res.send("Hello World, from express");
});

app.get("/files", (req, res) => res.json(files));

app.get("/files/:title", (req, res) => {
	const { title } = req.params;
	res.json(files.find((file) => file.title.toLowerCase() == title.toLowerCase()));
});

app.post("/files", (req, res) => {
	const { name } = req.body;
	console.log(req.body);
	const newFile = {
		title: name,
		body: "",
	};
	files.push(newFile);
	return res.json(files);
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
