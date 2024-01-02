import DiscProd from "./components/discProducts/DiscProd";
import FeaturedRest from "./components/featured/FeaturedRest";
import HowWork from "./components/howWork/HowWork";
import MainPage from "./components/main/MainPage";
import Navbar from "./components/navbar/Navbar";
import PopularProd from "./components/popularProd/PopularProd";

function App() {
  return (
    <>
      <Navbar />
      <div className="appPagesContainer">
        <MainPage />
        <DiscProd />
        <HowWork />
        <PopularProd />
        <FeaturedRest />
      </div>
    </>
  );
}

export default App;
