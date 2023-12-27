import { useSelector } from "react-redux";
import Slider from "react-slick";
import { RootState } from "../../store/store";
import styles from "./popular.module.css";

function PopularProd() {
  const popular = useSelector((state: RootState) => state.mainReducer);
  const { popularProd } = popular;
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <section className={styles.popularProdPage}>
      <Slider {...settings}>
        {popularProd.map((elem) => {
          return (
            <div>
              <img src={elem.Image} alt="" />
            </div>
          );
        })}
      </Slider>
    </section>
  );
}

export default PopularProd;
