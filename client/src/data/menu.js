import croissant_image from "../assets/croissant_image.JPG";
import coffee_image from "../assets/coffee_image.JPG";
import pastries_image from "../assets/pastries_image.JPG";
import cakes_image from "../assets/cakes_image.JPG";
import { assets } from "../assets/assets";

export const categories = [
  {
    text: "Croissants",
    path: "croissants",
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
    text: "Pastries",
    path: "pastries",
    image: pastries_image,
    bgColor: "#F8EBD7",
  },
  {
    text: "Cakes",
    path: "cakes",
    image: cakes_image,
    bgColor: "#F8EBD7",
  },
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
    icon: assets.trust_icon,
    title: "Trusted by Thousands",
    description: "Loved by 10,000+ happy customers.",
  },
];
