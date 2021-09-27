import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import styled from "styled-components";
import SmallQuote from "../../components/SmallQuote";
import LoadingDots from "../../components/LoadingDots";

interface Quote {
  quote: string;
  anime: string;
  character: string;
}

const Animepage = () => {
  const {
    query: { animeTitle },
  } = useRouter();
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (animeTitle) {
      setLoading(true);
      const fetchAnimeQuotes = async () => {
        try {
          const res = await axios.get(
            `https://animechan.vercel.app/api/quotes/anime?title=${animeTitle}`
          );
          setQuotes(res?.data);
          setLoading(false);
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
      };
      fetchAnimeQuotes();
    }
  }, [animeTitle]);

  return (
    <StyledAnimePage>
      <h2>Quotes from {animeTitle}</h2>
      <Link href="/">Go back</Link>
      <div className="grid">
        {loading ? (
          <LoadingDots />
        ) : quotes?.length ? (
          quotes?.map((quote, index) => (
            <div key={quote?.quote + index} className="anime">
              <SmallQuote
                anime={quote?.anime}
                character={quote?.character}
                quote={quote?.quote}
              />
            </div>
          ))
        ) : (
          <p className="nodata">No Quote found 😞</p>
        )}
      </div>
    </StyledAnimePage>
  );
};

const StyledAnimePage = styled.div`
  max-width: 80%;
  margin: 2rem auto;
  position: relative;
  & > a {
    position: absolute;
    top: 1rem;
    text-decoration: none;
  }
  & > h2 {
    font-weight: 400;
    letter-spacing: 3px;
    text-align: center;
    margin-bottom: 2rem;
  }
  & > .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: max-content;
    & .anime {
      margin: 1rem;
      height: max-content;
    }
    & > p {
      margin: 2rem 0 4rem;
      font-size: 1.3rem;
      text-align: center;
    }
  }
`;
export default Animepage;
