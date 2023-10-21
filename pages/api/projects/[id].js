import fs from "fs";
import path from "path";

// global data
const getData = () => {
  const filePath = path.join(process.cwd(), "fakeDb", "projects.json");
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
};

// main function
export default function handler(req, res) {
  const jsonData = getData(); // get json data from  file
  if (req.method === "GET") {
    const { id } = req.query;
    const projectsObj = jsonData;
    const project = projectsObj.find(
      (projects) => projects.projectTitle === id
    );

    if (!project) {
      return res.status(404).json({ message: "project not found" });
    } else {
      return res.status(200).json(project);
    }
  }
}
