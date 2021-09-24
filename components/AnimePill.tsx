import Link from "next/link";
import styled from "styled-components";

interface AnimePillProps {
  anime: string;
  color: string;
}

const AnimePill = ({ anime, color }: AnimePillProps) => {
  return (
    <StyledPill color={color}>
      <Link href={`/anime/${anime}`}>{anime}</Link>
    </StyledPill>
  );
};

const StyledPill = styled.div<{ color?: string }>`
  background: ${({ color }) => color};
  border-radius: 999px;
  & a {
    display: block;
    text-decoration: none;
    color: #333;
    padding: 1rem 2rem;
  }
`;

export default AnimePill;
