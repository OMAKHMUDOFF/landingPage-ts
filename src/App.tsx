import DiscProd from "./components/discProducts/DiscProd";
import HowWork from "./components/howWork/HowWorl";
import MainPage from "./components/main/MainPage";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="appPagesContainer">
        <MainPage />
        <DiscProd />
        <HowWork />
      </div>
    </>
  );
}

export default App;
