import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import conectarDB from "./config/db.js";
import quizzRoutes from "./routes/quizzRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import openaiRoutes from './routes/openaiRoutes.js';

const app = express();

app.use(express.json());
dotenv.config();

conectarDB();

// Configurar CORS
// const whitelist = [process.env.FRONTEND_URL];
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (!origin || whitelist.includes(origin)) {
//       // Puede consultar la API
//       callback(null, true);
//     } else {
//       console.log("ERROR1")
//       callback(new Error("Error de Cors"));
//     }
//   },
// };

const corsOptions = {
  origin: '*',
  credentials: true,
};

app.use(cors(corsOptions));

// Routing
app.use("/api/user", userRoutes);
app.use("/api/quizz", quizzRoutes);
app.use('/api/openai', openaiRoutes);

const PORT = process.env.PORT || 4000;
const servidor = app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

// Socket.io
import { Server } from "socket.io";

const io = new Server(servidor, {
  pingTimeout: 60000,
  cors: {
    origin: '*',
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("Nuevo cliente conectado");
});

