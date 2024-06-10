import { config } from "dotenv";
import mongoose from "mongoose";
config();
mongoose.connect(process.env.MONGO_DB).then(database => console.log(`Conectado a mongo en ${database.connection.name}`)).catch(error => console.error(error));