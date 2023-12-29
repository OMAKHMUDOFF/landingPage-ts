import { useSelector } from "react-redux";
import Slider from "react-slick";
import { RootState } from "../../store/store";
import styles from "./popular.module.css";
import locate from "../../assets/popularProd/loca.png";
import ButtonUI from "../UI/ButtonUI";

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
            <div className={styles.popularItemsCard}>
              <div className={styles.productImage}>
                <figure>
                  <img src={elem.Image} alt="" />
                </figure>
              </div>
              <div className={styles.popularProdInfo}>
                <div className={styles.popularProdTitle}>
                  <h6>{elem.title}</h6>
                </div>
                <div className={styles.popularProdLocation}>
                  <img src={locate} alt="" />
                  <h6>{elem.location}</h6>
                </div>
                <div className={styles.popularProdPrice}>
                  <h6>${elem.price.toFixed(2)}</h6>
                </div>
              </div>
              <div className={styles.popularProdOrder}>
                <ButtonUI
                  title="Order Now"
                  bgCol="#F17228"
                  fontSize={18}
                  fontWeight={700}
                  padding="21px 0px"
                  textCol="#fff"
                  raduis="8px"
                  width="100%"
                />
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
}

export default PopularProd;
