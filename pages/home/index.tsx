import { useRecoilValue } from "recoil";
import styled from "styled-components";
import AnimePill from "../../components/AnimePill";
import Pagination from "../../components/Pagination";
import Quote from "../../components/Quote";
import { slicedAnimeTitles, animeTitles } from "../../lib/store";

function Homepage() {
  const animes = useRecoilValue(animeTitles);
  const slicedAnimes = useRecoilValue(slicedAnimeTitles);
  const colors = ["#FAE1DA", "#E8C6AD", "#F2E2ED", "#D6EBE4", "#BFDCD0"];

  const generateColor = () => {
    const randNum = Math.floor(Math.random() * 5);
    return colors[randNum];
  };

  return (
    <StyledHomePage>
      <header>
        <h2>Anime Quote Generator</h2>
      </header>
      <main>
        <Quote />
        <AnimesContainer>
          <AnimesHeader>All Animes</AnimesHeader>
          {animes?.length ? (
            <p>Click on any anime to see a quote from it</p>
          ) : null}
          <AnimePillsContainer>
            {animes?.length ? (
              slicedAnimes?.map((anime) => (
                <AnimePillContainer key={anime}>
                  <AnimePill anime={anime} color={generateColor()} />
                </AnimePillContainer>
              ))
            ) : (
              <NoData>No anime found 😞</NoData>
            )}
          </AnimePillsContainer>
          {animes?.length > 50 ? (
            <PaginationWrapper>
              <Pagination listLength={animes?.length} />
            </PaginationWrapper>
          ) : null}
        </AnimesContainer>
      </main>
    </StyledHomePage>
  );
}

const StyledHomePage = styled.div`
  max-width: 80%;
  margin: 2rem auto;
  & header {
    margin-bottom: 3rem;
    & > h2 {
      font-weight: 400;
      letter-spacing: 3px;
      text-align: center;
    }
  }
`;

const AnimesContainer = styled.div`
  margin-top: 4rem;
  & > p {
    margin: 1.2rem 0;
  }
`;

const AnimesHeader = styled.h3`
  font-weight: 400;
  font-size: 1.4rem;
  background: #ece4f1;
  width: max-content;
  padding: 0.3rem 1rem;
`;

const AnimePillsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const AnimePillContainer = styled.div`
  margin: 0 1.3rem 1.3rem 0;
`;

const NoData = styled.p`
  margin: 2rem 0 4rem;
  font-size: 1.3rem;
`;

const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0 4rem;
`;

export default Homepage;
