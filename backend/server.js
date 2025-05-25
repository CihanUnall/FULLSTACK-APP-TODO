import express from "express";
import todoRoutes from "./routes/todoRouter.js";
import userRoutes from "./routes/userRouter.js";
import cors from "cors";

const app = express();
const PORT = 5500;

// middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/todos", todoRoutes);
app.use("/users", userRoutes);

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.listen(PORT, () => {
  console.log(`Server is running on : http://localhost:${PORT}`);
});
