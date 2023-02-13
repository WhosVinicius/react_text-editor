import express, {json} from "express";
import cors from "cors";

let files = [
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

let trash = []

const app = express();

app.use(express.urlencoded());
app.use(json());

app.use(
	cors({
		origin: "http://localhost:5173",
	}),
);

const port = 3000;

app.get("/files", (req, res) => res.json(files));

app.get("/files/:title", (req, res) => {
	const {title} = req.params;
	res.json(files.find((file) => file.title.toLowerCase() == title.toLowerCase()));
});

app.get("/trash", (req, res) => {res.json([])});

app.post('/trash', (req, res) => {
	const {file} = req.body;
	trash.push(file)
	return res.json(trash)
})

app.post("/files", (req, res) => {
	const {item} = req.body;
	files.push(item);
	return res.json(files);
});

app.delete('/trash', (req, res) => {
	const {item} = req.body
	trash = trash.filter((file) => item != file)
	return res.json(trash)

})

app.delete('/files', (req, res) => {
	const {item} = req.body
	files = files.filter((file) => item != file)
	return res.json(files)
})



app.listen(port, () => console.log(`Hello world app listening on port ${ port }!`));
