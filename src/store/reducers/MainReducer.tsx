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

//featured restaurants image
import foodWorld from "../../assets/featuredRestaurants/FoodWorld.png";
import pizzaHub from "../../assets/featuredRestaurants/Pizzahub.png";
import donutsHut from "../../assets/featuredRestaurants/DonutsHub.png";
import subway from "../../assets/featuredRestaurants/Subway.png";
import rubyTues from "../../assets/featuredRestaurants/RubyTuesday.png";
import KFC from "../../assets/featuredRestaurants/KFC.png";
import redSquare from "../../assets/featuredRestaurants/RedSquare.png";
import tacoBell from "../../assets/featuredRestaurants/TacoBell.png";

//featured restaurants logo
import fwLogo from "../../assets/featuredRestaurants/fwLogo.png";
import pizhLogo from "../../assets/featuredRestaurants/pizhLogo.png";
import dhLogo from "../../assets/featuredRestaurants/dhLogo.png";
import subwayLogo from "../../assets/featuredRestaurants/subwayLogo.png";
import rtLogo from "../../assets/featuredRestaurants/rtLogo.png";
import kfcLogo from "../../assets/featuredRestaurants/kfcLogo.png";
import rsLogo from "../../assets/featuredRestaurants/rsLogo.png";
import tbLogo from "../../assets/featuredRestaurants/tbLogo.png";

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
  featuredRestaurants: [
    {
      id: 17,
      cookTime: "Fast",
      discount: 20,
      restaurantName: "FoodWorld",
      restaurantLogo: fwLogo,
      rating: 46,
      Image: foodWorld,
      status: false,
    },
    {
      id: 18,
      cookTime: "Fast",
      discount: 15,
      restaurantName: "PizzaHub",
      restaurantLogo: pizhLogo,
      rating: 40,
      Image: pizzaHub,
      status: false,
    },
    {
      id: 19,
      cookTime: "Fast",
      discount: 10,
      restaurantName: "Donuts Hut",
      restaurantLogo: dhLogo,
      rating: 20,
      Image: donutsHut,
      status: true,
    },
    {
      id: 20,
      cookTime: "Fast",
      discount: 15,
      restaurantName: "Subway",
      restaurantLogo: subwayLogo,
      rating: 50,
      Image: subway,
      status: true,
    },
    {
      id: 21,
      cookTime: "Fast",
      discount: 10,
      restaurantName: "Ruby Tuesday",
      restaurantLogo: rtLogo,
      rating: 26,
      Image: rubyTues,
      status: true,
    },
    {
      id: 22,
      cookTime: "Fast",
      discount: 25,
      restaurantName: "Kuakata Fried Chicken",
      restaurantLogo: kfcLogo,
      rating: 53,
      Image: KFC,
      status: true,
    },
    {
      id: 23,
      cookTime: "Fast",
      discount: 10,
      restaurantName: "Red Square",
      restaurantLogo: rsLogo,
      rating: 45,
      Image: redSquare,
      status: false,
    },
    {
      id: 24,
      cookTime: "Fast",
      discount: 10,
      restaurantName: "Taco Bell",
      restaurantLogo: tbLogo,
      rating: 36,
      Image: tacoBell,
      status: true,
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
