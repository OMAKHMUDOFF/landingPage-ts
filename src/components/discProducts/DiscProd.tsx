import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import styles from "./discProd.module.css";

function DiscProd() {
  const discProd = useSelector((state: RootState) => state.mainReducer);
  const { discProducts } = discProd;

  return (
    <section className={styles.discProdPage}>
      <div className={styles.discProdCards}>
        {discProducts.map((elem) => {
          return (
            <div className={styles.discProdCard} key={elem.id}>
              <div className={styles.discCardImg}>
                <figure>
                  <img src={elem.image} alt="discounted product image" />
                </figure>
                <div className={styles.discCardDisc}>
                  <div className={styles.discount}>
                    <h2>{elem.discount}</h2>
                  </div>
                  <div className={styles.discount_info}>
                    <h6>%</h6>
                    <h6>Off</h6>
                  </div>
                </div>
              </div>
              <div className={styles.discProdTR}>
                <div className={styles.discProdTitle}>
                  <h6>{elem.title}</h6>
                </div>
                <div className={styles.discProdRemaining}>
                  <h6>{elem.remaining} Days Remaining</h6>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default DiscProd;
