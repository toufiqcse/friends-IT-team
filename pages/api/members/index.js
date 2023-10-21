import fs from "fs";
import path from "path";
// export default function handler(req, res) {
//   res.status(200).json(pizzaData);
// }

const getTeamData = () => {
  const filePath = path.join(process.cwd(), "fakeDb", "aboutTeam.json");
  const fileData = fs.readFileSync(filePath);
  const TeamData = JSON.parse(fileData);
  return TeamData;
};

// main function
function handler(req, res) {
  if (req.method === "GET") {
    const Tdata = getTeamData();
    return res.status(200).json(Tdata); //{ fruits: data } by destructure
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
