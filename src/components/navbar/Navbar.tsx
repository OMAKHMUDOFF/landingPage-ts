import styles from "./navbar.module.css";
import logo from "../../assets/Logo.png";
import geo from "../../assets/map-marker-alt.svg";
import searchGlass from "../../assets/Search.svg";
import user from "../../assets/user.svg";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <img src={logo} alt="" />
      </div>
      <div className={styles.location_info}>
        <p className={styles.deliver_title}>Deliver to:</p>
        <div className={styles.current_loc_info}>
          <img src={geo} alt="" />
          <p className={styles.current_loc}>Current Location</p>
          <p className={styles.location}>Mohammadpur Bus Stand, Dhaka</p>
        </div>
      </div>
      <div className={styles.search_login}>
        <button className={styles.search_btn}>
          <img src={searchGlass} alt="" />
          <p>Search Food</p>
        </button>
        <button className={styles.login_btn}>
          <img src={user} alt="" />
          <p>Login</p>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
