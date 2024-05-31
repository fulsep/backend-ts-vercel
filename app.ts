import express from "express";
import cors from "cors";
import morgan from "morgan";

import router from "./src/routers";

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(morgan("combined"));

app.use("/", router);

app.get("/", (req: express.Request, res: express.Response)=>{
  res.json({
    success: true,
    message: "Backend is running"
  });
});

app.listen(3000, ()=>{
  console.log("Backend running on port 3000");
});

export default app;