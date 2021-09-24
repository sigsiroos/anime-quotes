import React from "react";
import styled from "styled-components";

function Quote() {
  const quote = {
    anime: "Naruto",
    character: "Pain",
    quote:
      "Because of the existence of love - sacrifice is born. As well as hate. Then one comprehends... one knows PAIN.",
  };

  return (
    <StyledQuote>
      <QuoteText>{quote.quote}</QuoteText>
      <QuoteFromAndBy>
        <Character>{quote.character}</Character> <em>in</em>{" "}
        <Anime>{quote.anime}</Anime>
      </QuoteFromAndBy>
    </StyledQuote>
  );
}

const StyledQuote = styled.div`
  background: #dbece5;
  padding: 3rem 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuoteText = styled.p`
  font-size: 2rem;
  letter-spacing: 2px;
  text-align: center;
  font-style: italic;
  margin-bottom: 3rem;
  background: #fff;
  border-radius: 0.5rem;
  padding: 3rem;
`;

const QuoteFromAndBy = styled.h4`
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 2px;
  em {
    font-size: 1.2rem;
  }
  & > .anime {
    background: #f5e7e4;
  }
`;

const Character = styled.span`
  background: #b8dace;
  padding: 5px 10px;
`;

const Anime = styled.span`
  background: #f5e7e4;
  padding: 5px 10px;
`;

export default Quote;
