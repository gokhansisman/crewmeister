import express, { Express, Request, Response } from "express";
import fs from "fs";
import path from "path";
var cors = require("cors");
const ical = require("ical-generator");

const ABSENCES_PATH = path.join(__dirname, "json_files", "absences.json");
const MEMBERS_PATH = path.join(__dirname, "json_files", "members.json");

const app: Express = express();
app.use(cors());
app.use(express.json());

const readJsonFile = (path: fs.PathOrFileDescriptor) =>
  new Promise((resolve) =>
    fs.readFile(path, "utf8", (_, data) => resolve(data))
  )
    .then((data) => JSON.parse(data as string))
    .then((data) => data.payload);

app.get("/absences", async (req: Request, res: Response) => {
  const absences = await readJsonFile(ABSENCES_PATH);
  res.json(absences);
});

app.get("/members", async (req: Request, res: Response) => {
  const members = await readJsonFile(MEMBERS_PATH);
  res.json(members);
});
const calendar = ical({ name: "my first iCal" });


app.post("/addToCalendar", (req: Request, res: Response) => {
  const { startTime, endTime, summary, description } = req.body;
  calendar.createEvent({
    start: startTime,
    end: endTime,
    summary: "TEST",
    description: "It works ;)",
    location: "my room",
    url: "http://sebbo.net/",
  });
  res.send("Added to calendar");
});
app.use(express.static(path.join(__dirname, '../client/build')));

app.get("/calendar", async (req: Request, res: Response) => {
  calendar.serve(res);
});

app.listen(3000, () => {
  console.log(`⚡️[server]: Server is running at `);
});
