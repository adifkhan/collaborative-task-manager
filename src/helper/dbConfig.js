import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(`mongodb+srv://nyntax:xddR0XW2nVOkLu69@cluster0.zpmon.mongodb.net/`);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("Mongodb connected successfully!");
    });

    connection.on("error", (err) => {
      console.log("Mongodb connection error, Please make sure Db is running", err);
      //   process.exit();
    });
  } catch (error) {
    console.log("something went wrong in dbConfig!");
    console.log(error);
  }
}
// nyntax
// xddR0XW2nVOkLu69
