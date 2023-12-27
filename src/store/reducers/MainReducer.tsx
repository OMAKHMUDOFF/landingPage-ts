import { createSlice } from "@reduxjs/toolkit";
import deliver from "../../assets/bike.svg";
import pickup from "../../assets/bag.svg";
// discounted products img
import discProd1 from "../../assets/products/prod1.svg";
import discProd2 from "../../assets/products/prod2.svg";
import discProd3 from "../../assets/products/prod3.svg";
import discProd4 from "../../assets/products/prod4.svg";

//how it works icons
import geo from "../../assets/howwork/location.svg";
import bell from "../../assets/howwork/bell.svg";
import payment from "../../assets/howwork/payment.svg";
import emotions from "../../assets/howwork/emotions.svg";

//popular products image
import cheeseBurger from "../../assets/popularProd/cheeseBurger.png";
import toffeCake from "../../assets/popularProd/toffe case.png";
import dancake from "../../assets/popularProd/dancake.png";
import sandwich from "../../assets/popularProd/sandwich.png";
import soup from "../../assets/popularProd/soup.png";

const mainState = {
  typeOrder: [
    { id: 1, title: "Delivery", icon: deliver },
    { id: 2, title: "Pickup", icon: pickup },
  ],
  setTypeOrder: "Delivery",
  discProducts: [
    {
      id: 3,
      title: "Greys Vage",
      discount: 15,
      remaining: 6,
      image: discProd1,
    },
    {
      id: 4,
      title: "Greys Vage",
      discount: 10,
      remaining: 6,
      image: discProd2,
    },
    {
      id: 5,
      title: "Greys Vage",
      discount: 25,
      remaining: 7,
      image: discProd3,
    },
    {
      id: 6,
      title: "Greys Vage",
      discount: 20,
      remaining: 8,
      image: discProd4,
    },
  ],
  howWorks: [
    {
      id: 7,
      title: "Select location",
      description: "Choose the location where your food will be delivered.",
      icon: geo,
    },
    {
      id: 8,
      title: "Choose order",
      description: "Check over hundreds of menus to pick your favorite food",
      icon: bell,
    },
    {
      id: 9,
      title: "Pay advanced",
      description:
        "It's quick, safe, and simple. Select several methods of payment",
      icon: payment,
    },
    {
      id: 10,
      title: "Enjoy meals",
      description: "Food is made and delivered directly to your home.",
      icon: emotions,
    },
  ],
  popularProd: [
    {
      id: 11,
      title: "Cheese Burger",
      location: "Burger Arena",
      price: 3.88,
      Image: cheeseBurger,
    },
    {
      id: 12,
      title: "Toffe's Cake",
      location: "Top Sticks",
      price: 4.0,
      Image: toffeCake,
    },
    {
      id: 13,
      title: "Dancake",
      location: "Cake World",
      price: 1.99,
      Image: dancake,
    },
    {
      id: 14,
      title: "Crispy Sandwitch",
      location: "Fastfood Dine",
      price: 3.0,
      Image: sandwich,
    },
    {
      id: 15,
      title: "Thai Soup",
      location: "Foody man",
      price: 2.97,
      Image: soup,
    },
    {
      id: 16,
      title: "Dancake",
      location: "Foody man",
      price: 2.97,
      Image: dancake,
    },
  ],
};

const MainSlice = createSlice({
  name: "main",
  initialState: mainState,
  reducers: {
    setOrderType: (state, action) => {
      state = { ...state, setTypeOrder: action.payload };
      return state;
    },
  },
});

export const { setOrderType } = MainSlice.actions;

export default MainSlice.reducer;
