import express, { json } from "express";

const cards = [
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
app.use(express.json());
const port = 3000;
app.get("/", (req, res) => {
	res.send("Hello World, from express");
});

app.get("/files", (req, res) => res.json(cards));

app.get("/files/:title", (req, res) => {
	const { title } = req.params;
	res.json(cards.find((file) => file.title.toLowerCase() == title.toLowerCase()));
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
