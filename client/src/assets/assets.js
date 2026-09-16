import logo from "./logo.png";
import search_icon from "./search_icon.svg";
import remove_icon from "./remove_icon.svg";
import arrow_right_icon_colored from "./arrow_right_icon_colored.svg";
import star_icon from "./star_icon.svg";
import star_dull_icon from "./star_dull_icon.svg";
import nav_cart_icon from "./nav_cart_icon.svg";
import add_icon from "./add_icon.svg";
import refresh_icon from "./refresh_icon.svg";
import order_icon from "./order_icon.svg";
import upload_area from "./upload_area.png";
import profile_icon from "./profile_icon.png";
import menu_icon from "./menu_icon.svg";
import trust_icon from "./trust_icon.svg";
import white_arrow_icon from "./white_arrow_icon.svg";
import main_banner_bg from "./menu_mobile.png";
import main_banner_bg_sm from "./menu.jpeg";
import croissant_image from "./croissant_image.JPG";
import coffee_image from "./coffee_image.JPG"
import tomato_image from "./tomato_image.png";
import orange_image from "./orange_image.png";
import wheat_flour_image from "./wheat_flour_image.png";
import spinach_image_1 from "./spinach_image_1.png";
import onion_image_1 from "./onion_image_1.png";
import mango_image_1 from "./mango_image_1.png";
import sprite_image_1 from "./sprite_image_1.png";
import seven_up_image_1 from "./seven_up_image_1.png";
import top_ramen_image from "./top_ramen_image.png";
import yippee_image from "./yippee_image.png";
import whole_wheat_bread_image from "./whole_wheat_bread_image.png";
import vanilla_muffins_image from "./vanilla_muffins_image.png";
import quinoa_image from "./quinoa_image.png";
import pastries_image from "./pastries_image.JPG"
import cakes_image from "./cakes_image.JPG"

export const assets = {
  logo,
  search_icon,
  remove_icon,
  arrow_right_icon_colored,
  star_icon,
  star_dull_icon,
  nav_cart_icon,
  add_icon,
  refresh_icon,
  order_icon,
  upload_area,
  profile_icon,
  pastries_image,
  coffee_image,
  menu_icon,
  trust_icon,
  white_arrow_icon,
  main_banner_bg,
  main_banner_bg_sm,
  cakes_image,
};

export const categories = [
  {
    text: "Croissants",
    path: "Croissants",
    image: croissant_image,
    bgColor: "#F8EBD7",
  },
  {
    text: "Coffee",
    path: "coffee",
    image: coffee_image,
    bgColor: "#F8EBD7",
  },
  {
    text: "Coffee",
    path: "coffee",
    image: pastries_image,
    bgColor: "#F8EBD7",
  },
  {
    text: "Coffee",
    path: "coffee",
    image: cakes_image,
    bgColor: "#F8EBD7",
  }

];

export const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { text: "Home", url: "#" },
      { text: "Best Sellers", url: "#" },
      { text: "Offers & Deals", url: "#" },
      { text: "Contact Us", url: "#" },
      { text: "FAQs", url: "#" },
    ],
  },
  {
    title: "Need help?",
    links: [
      { text: "Delivery Information", url: "#" },
      { text: "Return & Refund Policy", url: "#" },
      { text: "Payment Methods", url: "#" },
      { text: "Track your Order", url: "#" },
      { text: "Contact Us", url: "#" },
    ],
  },
  {
    title: "Follow Us",
    links: [
      { text: "Instagram", url: "#" },
      { text: "Twitter", url: "#" },
      { text: "Facebook", url: "#" },
      { text: "YouTube", url: "#" },
    ],
  },
];

export const features = [

  {
    icon: trust_icon,
    title: "Trusted by Thousands",
    description: "Loved by 10,000+ happy customers.",
  },
];

export const dummyProducts = [
  // Vegetables
  {
    _id: "gd47g34h",
    name: "Tomato 1 kg",
    category: "Vegetables",
    price: 40,
    offerPrice: 35,
    image: [tomato_image],
    description: [
      "Juicy and ripe",
      "Rich in Vitamin C",
      "Perfect for salads and sauces",
      "Farm fresh quality",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "gd49g56h",
    name: "Spinach 500g",
    category: "Vegetables",
    price: 18,
    offerPrice: 15,
    image: [spinach_image_1],
    description: [
      "Rich in iron",
      "High in vitamins",
      "Perfect for soups and salads",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "gd50g67h",
    name: "Onion 500g",
    category: "Vegetables",
    price: 22,
    offerPrice: 19,
    image: [onion_image_1],
    description: [
      "Fresh and pungent",
      "Perfect for cooking",
      "A kitchen staple",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  // Fruits
  {
    _id: "ek52j23k",
    name: "Orange 1 kg",
    category: "Fruits",
    price: 80,
    offerPrice: 75,
    image: [orange_image],
    description: [
      "Juicy and sweet",
      "Rich in Vitamin C",
      "Perfect for juices and salads",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek54j45k",
    name: "Mango 1 kg",
    category: "Fruits",

    price: 150,
    offerPrice: 140,
    image: [mango_image_1],
    description: [
      "Sweet and flavorful",
      "Perfect for smoothies and desserts",
      "Rich in Vitamin A",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  // Drinks
  {
    _id: "ek63j34k",
    name: "Sprite 1.5L",
    category: "Drinks",
    price: 79,
    offerPrice: 74,
    image: [sprite_image_1],
    description: [
      "Refreshing citrus taste",
      "Perfect for hot days",
      "Best served chilled",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek65j56k",
    name: "7 Up 1.5L",
    category: "Drinks",
    price: 76,
    offerPrice: 71,
    image: [seven_up_image_1],
    description: [
      "Refreshing lemon-lime flavor",
      "Perfect for refreshing",
      "Best served chilled",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  // Grains
  {
    _id: "ek67j78k",
    name: "Wheat Flour 5kg",
    category: "Grains",
    price: 250,
    offerPrice: 230,
    image: [wheat_flour_image],
    description: [
      "High-quality whole wheat",
      "Soft and fluffy rotis",
      "Rich in nutrients",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek68j89k",
    name: "Organic Quinoa 500g",
    category: "Grains",
    price: 450,
    offerPrice: 420,
    image: [quinoa_image],
    description: [
      "High in protein and fiber",
      "Gluten-free",
      "Rich in vitamins and minerals",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },


  // Bakery

  {
    _id: "bk04d32w",
    name: "Whole Bread 400g",
    category: "Bakery",
    price: 45,
    offerPrice: 40,
    image: [whole_wheat_bread_image],
    description: [
      "Healthy and nutritious",
      "Made with whole wheat flour",
      "Ideal for sandwiches and toast",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "bk05e33v",
    name: "Vanilla Muffins 6 pcs",
    category: "Bakery",
    price: 100,
    offerPrice: 90,
    image: [vanilla_muffins_image],
    description: [
      "Soft and fluffy",
      "Perfect for a quick snack",
      "Made with real vanilla",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  // Instant
  {
    _id: "in02g26t",
    name: "Top Ramen 270g",
    category: "Instant",
    price: 45,
    offerPrice: 40,
    image: [top_ramen_image],
    description: [
      "Quick and easy to prepare",
      "Spicy and flavorful",
      "Loved by college students and families",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "in04i28r",
    name: "Yippee Noodles 260g",
    category: "Instant",
    price: 50,
    offerPrice: 45,
    image: [yippee_image],
    description: [
      "Non-fried noodles for healthier choice",
      "Tasty and filling",
      "Convenient for busy schedules",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
];

export const dummyAddress = [
  {
    _id: "67b5b9e54ea97f71bbc196a0",
    userId: "67b5880e4d09769c5ca61644",
    firstName: "Great",
    lastName: "Stack",
    email: "user.greatstack@gmail.com",
    street: "Street 123",
    city: "Main City",
    state: "New State",
    zipcode: 123456,
    country: "IN",
    phone: "1234567890",
  },
];

export const dummyOrders = [
  {
    _id: "67e2589a8f87e63366786400",
    userId: "67b5880e4d09769c5ca61644",
    items: [
      {
        product: dummyProducts[3],
        quantity: 2,
        _id: "67e2589a8f87e63366786401",
      },
    ],
    amount: 89,
    address: dummyAddress[0],
    status: "Order Placed",
    paymentType: "Online",
    isPaid: true,
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
  },
  {
    _id: "67e258798f87e633667863f2",
    userId: "67b5880e4d09769c5ca61644",
    items: [
      {
        product: dummyProducts[0],
        quantity: 1,
        _id: "67e258798f87e633667863f3",
      },
      {
        product: dummyProducts[1],
        quantity: 1,
        _id: "67e258798f87e633667863f4",
      },
    ],
    amount: 43,
    address: dummyAddress[0],
    status: "Order Placed",
    paymentType: "COD",
    isPaid: false,
    createdAt: "2025-03-25T07:17:13.068Z",
    updatedAt: "2025-03-25T07:17:13.068Z",
  },
];
