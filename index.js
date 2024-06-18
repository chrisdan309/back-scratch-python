import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import conectarDB from "./config/db.js";
import quizzRoutes from "./routes/quizzRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(express.json());
dotenv.config();

conectarDB();

// Configurar CORS
const whitelist = [process.env.FRONTEND_URL];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.includes(origin)) {
      // Puede consultar la API
      callback(null, true);
    } else {
      console.log("ERROR1")
      callback(new Error("Error de Cors"));
    }
  },
};

app.use(cors(corsOptions));

// Routing
app.use("/api/user", userRoutes);
app.use("/api/quizz", quizzRoutes);

const PORT = process.env.PORT || 4000;
const servidor = app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

// Socket.io
import { Server } from "socket.io";

const io = new Server(servidor, {
  pingTimeout: 60000,
  cors: {
    origin: process.env.FRONTEND_URL,
  },
});

