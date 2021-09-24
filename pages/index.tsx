import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import LoadingDots from "../components/LoadingDots";
import { animeTitles } from "../lib/store";
import HomePage from "../pages/home";
import { useFetchAnimes } from "./hooks/useFetchAnimes";

function Home() {
  const setTitles = useSetRecoilState(animeTitles);
  const { data, loading } = useFetchAnimes();

  useEffect(() => {
    if (data && data.length > 0 && !loading) {
      setTitles(data);
    }
  }, [data, loading, setTitles]);

  if (loading) {
    return <LoadingDots />;
  }

  return <HomePage />;
}

export default Home;
