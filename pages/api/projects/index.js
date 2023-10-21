import fs from "fs";
import path from "path";

const getProjectsData = () => {
  const filePath = path.join(process.cwd(), "fakeDb", "projects.json");
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
};

// main function
function handler(req, res) {
  if (req.method === "GET") {
    const data = getProjectsData();
    return res.status(200).json(data);
  }
  //   else if (req.method === "POST") {
  //     const { offerPrice, ratings } = req.body;
  //     const newProducts = {
  //       offerPrice,
  //       ratings,
  //       id: Date.now(),
  //     };
  //     const data = getData();
  //     data.push(newProducts);

  //     return res.status(201).json({ message: "Added", products: newProducts });
  //   }
}

export default handler;
