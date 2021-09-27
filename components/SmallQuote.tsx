import React from "react";
import styled from "styled-components";

interface SmallQuoteProps {
  quote: string;
  character: string;
  anime: string;
}

function SmallQuote({ quote, character, anime }: SmallQuoteProps) {
  const displayQuote = `"${quote}"`;
  return (
    <StyledQuoteContainer>
      <Quote>{displayQuote}</Quote>
      <QuoteInfo>
        <Character>{character}</Character> <em>in</em>
        <Anime>{anime}</Anime>
      </QuoteInfo>
    </StyledQuoteContainer>
  );
}

const StyledQuoteContainer = styled.div`
  background: #dbece5;
  padding: 1.5rem 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Quote = styled.p`
  font-size: 1rem;
  letter-spacing: 2px;
  text-align: center;
  font-style: italic;
  background: #fff;
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`;

const QuoteInfo = styled.h4`
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 2px;
  em {
    font-size: 1rem;
  }
`;

const Character = styled.span`
  background: #b8dace;
  padding: 3px 5px;
`;

const Anime = styled.span`
  background: #f5e7e4;
  padding: 3px 5px;
`;

export default SmallQuote;
