import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

async function fetchAnimeQuotes(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { animeTitle } = req?.query;
    const response = await axios.get(
      `https://animechan.vercel.app/api/quotes/anime?title=${animeTitle}`
    );
    const quotes = response?.data;
    return res.status(200).json(quotes);
  } catch (error: any) {
    console.error(`There is an error with the api it seems: ${error?.message}`);
    res.status(error?.status || 400).json({
      message: `There is an error with the api it seems: ${error?.message}`,
    });
  }
}

export default fetchAnimeQuotes;
