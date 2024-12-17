import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

const PORT_NO = 3000;

app.use(express.json());
app.use(cors({ origin: "*" }));

app.listen(PORT_NO, () => {
  console.info("server is running on:", PORT_NO);
});

// api
app.get("/api", async (req: Request, res: Response) => {
  try {
    console.log("api called");

    if (!req.body.web_url) {
      res.json({ errMsg: "Please enter a URL" });
      return;
    }

    res.status(200).json({ successMsg: "Here is the web preview" });
  } catch (error) {
    res.json({ errMsg: "Could not complete the request. Try again later" });
    return;
  }
});
