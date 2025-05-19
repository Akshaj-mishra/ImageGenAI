import express from "express";
import cors from "cors";
import { Client } from "@gradio/client";

const app = express();
app.use(cors());
app.use(express.json());

let client;

app.post("/generate", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!client) {
      client = await Client.connect("stabilityai/stable-diffusion");
    }

    const result = await client.predict("/infer", {
      prompt,
      negative: "",
      scale: 9,
    });

    res.send({ image: result.data[0].url });

  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Image generation failed" });
  }
});

app.listen(3000, () => console.log("Server listening on http://localhost:3000"));
