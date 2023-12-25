import styles from "./main.module.css";
import foodPreView from "../../assets/Image Base.svg";
import PreViewShadow from "../../assets/preview_shadow.png";
import locationEnter from "../../assets/locationEnter.png";
import searchGlass from "../../assets/searchGlass.svg";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import ButtonUI from "../UI/ButtonUI";
import { setOrderType } from "../../store/reducers/MainReducer";

function MainPage() {
  const main = useSelector((state: RootState) => state.mainReducer);
  const { typeOrder, setTypeOrder } = main;
  const dispatch = useDispatch();

  return (
    <main className={styles.mainPage}>
      <div className={styles.foodOrderForm}>
        <div className={styles.mainTitle}>
          <h1>Are you starving?</h1>
          <p>Within a few clicks, find meals that are accessible near you</p>
        </div>
        <div className={styles.delivery_search}>
          <div className={styles.delivery_or_pickup}>
            {typeOrder.map((elem) => {
              return (
                <ButtonUI
                  width="148px"
                  icon={elem.icon}
                  action={() => dispatch(setOrderType(elem.title))}
                  fontSize={18}
                  fontWeight={700}
                  key={elem.id}
                  title={elem.title}
                  padding="10px 24px"
                  raduis="8px"
                  variant={
                    elem.title === setTypeOrder ? "selected" : "notSelected"
                  }
                />
              );
            })}
          </div>
          <div className={styles.foodSearch}>
            <div className={styles.foodSearchInput}>
              <img src={locationEnter} alt="" />
              <input type="text" placeholder="Enter Your Address" />
            </div>
            <div className={styles.foodSearchButton}>
              <ButtonUI
                title="Find Food"
                icon={searchGlass}
                bgCol="linear-gradient(96deg, #FF7A7A -39.64%, #F65900 135.31%)"
                fontSize={18}
                padding="21px 48px"
                textCol="#fff"
                fontWeight={700}
                raduis="8px"
                width="200px"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.foodPreView}>
        <figure>
          <img className={styles.preViewShadow} src={PreViewShadow} alt="" />
          <img className={styles.preViewImg} src={foodPreView} alt="" />
        </figure>
      </div>
    </main>
  );
}

export default MainPage;
