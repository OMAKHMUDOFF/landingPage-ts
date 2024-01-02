import { useSelector } from "react-redux";
import styles from "./featured.module.css";
import { RootState } from "../../store/store";
import tag from "../../assets/featuredRestaurants/tag.png";
import clock from "../../assets/featuredRestaurants/clock.png";
import star from "../../assets/featuredRestaurants/star.png";
import { ChevronRight } from "lucide-react";

function FeaturedRest() {
  const featRest = useSelector((state: RootState) => state.mainReducer);
  const { featuredRestaurants } = featRest;
  return (
    <section className={styles.featuredRestPage}>
      <div className={styles.featuredTitle}>
        <h4>Featured Restaurants</h4>
      </div>
      <div className={styles.feturedRestaurants}>
        {featuredRestaurants.map((elem) => {
          return (
            <div className={styles.featuredRestaurantCard}>
              <div className={styles.restCardImage}>
                <figure>
                  <img src={elem.Image} alt="Restaurants Food Preview" />
                </figure>
                <div className={styles.restDiscCook}>
                  <div className={styles.restCardDiscount}>
                    <img src={tag} alt="tag" />
                    <p>
                      {elem.discount}% <strong>off</strong>
                    </p>
                  </div>
                  <div className={styles.restCookTime}>
                    <img src={clock} alt="clock" />
                    <p>Fast</p>
                  </div>
                </div>
              </div>
              <div className={styles.restLogo_Status}>
                <div className={styles.restLogoRating}>
                  <div className={styles.restaurantLogo}>
                    <img src={elem.restaurantLogo} alt="Restaurant Logo" />
                  </div>
                  <div className={styles.restaurantInfo}>
                    <div className={styles.restaurantName}>
                      <h6>{elem.restaurantName}</h6>
                    </div>
                    <div className={styles.restaurantRating}>
                      <img src={star} alt="" />
                      <p>{elem.rating}</p>
                    </div>
                  </div>
                </div>
                <div className={styles.restaurantStatus}>
                  <h6
                    style={{
                      background: `${
                        elem.status
                          ? "rgba(121, 185, 60, 0.2)"
                          : "rgba(241, 114, 40, 0.2)"
                      }`,
                      color: `${elem.status ? "#79B93C" : "#F17228"}`,
                    }}
                  >
                    {elem.status ? "Open Now" : "Opens Tomorrow"}
                  </h6>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button className={styles.viewAllRestaurants}>
        View All <ChevronRight />
      </button>
    </section>
  );
}

export default FeaturedRest;
