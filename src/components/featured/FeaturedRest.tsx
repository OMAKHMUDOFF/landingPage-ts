import { useSelector } from "react-redux";
import styles from "./featured.module.css";
import { RootState } from "../../store/store";

function FeaturedRest() {
  const featRest = useSelector((state: RootState) => state.mainReducer);
  const { featuredRestaurants } = featRest;
  return (
    <section className={styles.featuredRestPage}>
      <div className={styles.featuredTitle}>
        <h4>Featured Restaurants</h4>
      </div>
      
    </section>
  );
}

export default FeaturedRest;
