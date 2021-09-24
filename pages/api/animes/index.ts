import axios from "axios";
import { NextApiResponse } from "next";

async function fetchAnimes(_req: Request, res: NextApiResponse) {
  try {
    const response = await axios.get(
      "https://animechan.vercel.app/api/available/anime"
    );
    const animes = response?.data;
    return res.status(200).json(animes);
  } catch (error: any) {
    console.error(`There is an error with the api it seems: ${error?.message}`);
    res.status(error?.status || 400).json({
      message: `There is an error with the api it seems: ${error?.message}`,
    });
  }
}

export default fetchAnimes;
