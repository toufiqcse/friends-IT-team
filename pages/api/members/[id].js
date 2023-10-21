import fs from "fs";
import path from "path";

// global data
const getData = () => {
  const filePath = path.join(process.cwd(), "fakeDb", "aboutTeam.json");
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
};

// main function
export default function handler(req, res) {
  const jsonData = getData(); // get json data from  file
  if (req.method === "GET") {
    const { id } = req.query; // destructure by id
    const teamObj = jsonData;
    const team = teamObj.find((teamMember) => teamMember.name === id);
    // check condition for data available or not
    if (!team) {
      return res.status(404).json({ message: "team not found" });
    } else {
      return res.status(200).json(team);
    }
  }
}
