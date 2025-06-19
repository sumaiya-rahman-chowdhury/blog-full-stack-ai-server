import express from "express";
import "dotenv/config";
import cors from "cors";
import connetcDB from "./configs/db.js";
import adminRounter from "./routes/admin.routes.js";
import blogRouter from "./routes/blog.routes.js";

const app = express();
await connetcDB();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => res.send("API is working"));
app.use("/api/admin", adminRounter);
app.use("/api/blog", blogRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});

export default app;
