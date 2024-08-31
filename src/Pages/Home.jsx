import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Recommended_jobs from "../components/Recommended_jobs";
import Top_company from "../components/Top_company";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Recommended_jobs />
      <Top_company />
    </div>
  );
};

export default Home;
