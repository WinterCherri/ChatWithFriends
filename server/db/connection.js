const mongoose = require("mongoose");

const url = `mongodb+srv://decaturhoangyen:Hoangyen123!@cluster0.tasnhq0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose
  .connect(url)
  .then(() => console.log(`Connected to DB`))
  .catch((e) => console.log(`Error`, e));
