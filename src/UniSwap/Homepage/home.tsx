import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Product from "../Types/Product";
import StaticTile from "../Components/StaticTile";
import * as accountClient from "../Account/client";
import * as productClient from "../Types/productClient";
import marketplaceIcon from '../Images/marketplace_icon.png';
import "./home.css";

function Homepage() {
  const [allProducts, setAllProducts] = useState<Product[]>([{
    image: marketplaceIcon,
    description_short: "This is a short description",
    description_long: "This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. ",
    title: "Item Name",
    price: "500",
    type: "Shoes",
    id: 1,
    comments: [],
  },
  {
    image: marketplaceIcon,
    description_short: "This is a short description",
    description_long: "This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. ",
    title: "Item Name 2",
    price: "500",
    type: "Shoes",
    id: 1,
    comments: [],
  },
  {
    image: marketplaceIcon,
    description_short: "This is a short description",
    description_long: "This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. ",
    title: "Item Name 3",
    price: "500",
    type: "Shoes",
    id: 1,
    comments: [],
  },
  {
    image: marketplaceIcon,
    description_short: "This is a short description",
    description_long: "This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. ",
    title: "Item Name",
    price: "500",
    type: "Shoes",
    id: 1,
    comments: [],
  },
  {
    image: marketplaceIcon,
    description_short: "This is a short description",
    description_long: "This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. ",
    title: "Item Name 2",
    price: "500",
    type: "Shoes",
    id: 1,
    comments: [],
  },
  {
    image: marketplaceIcon,
    description_short: "This is a short description",
    description_long: "This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. ",
    title: "Item Name 3",
    price: "500",
    type: "Shoes",
    id: 1,
    comments: [],
  },
  {
    image: marketplaceIcon,
    description_short: "This is a short description",
    description_long: "This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. ",
    title: "Item Name",
    price: "500",
    type: "Shoes",
    id: 1,
    comments: [],
  },
  {
    image: marketplaceIcon,
    description_short: "This is a short description",
    description_long: "This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. ",
    title: "Item Name 2",
    price: "500",
    type: "Shoes",
    id: 1,
    comments: [],
  },
  {
    image: marketplaceIcon,
    description_short: "This is a short description",
    description_long: "This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. ",
    title: "Item Name 3",
    price: "500",
    type: "Shoes",
    id: 1,
    comments: [],
  }]);
  const [user, setUser] = useState({
    username: 'placeholder',
    password: 'placeholder',
    name: "Placeholder name",
    profilePicture: undefined,
    products: [],
    bio: "I love to sell things",
    accountType: 'SELLER',
    _id: 1,
  });
  useEffect(() => {
    const fetchProducts = async () => {
      const products = await productClient.findAllProducts();
      setAllProducts(products);
    }
    fetchProducts();

    const fetchUser = async () => {
      try {
        const user = await accountClient.home();
        setUser(user);
      } catch (error) {
        
      }
    }
    fetchUser();
  }, []);

  return (
    <div style={{ height: '100vh' }}>
    <Header />
    <br />
    <div>
      <div className="adjustedFont homelistings">
        Recently Listed Items
      </div>
      <div className="listOfItems">
      {allProducts.map((product, index) => (
        <StaticTile
          title={product.title}
          price={product.price}
          image={product.image}
          key={index}
        />
      ))}
      </div>
    </div>
    <div style={{ backgroundColor: '#e1e9b7', paddingBottom: '100px'}}>
      <div className="adjustedFont homelistings">
        {user ? 'Suggested Items' : 'Popular Items'}
      </div>
      <div className="listOfItems">
        {allProducts.reverse().map((product, index) => (
          <StaticTile
            title={product.title}
            price={product.price}
            image={product.image}
            key={index}
          />
        ))}
      </div>
    </div>
  </div>
);
}

export default Homepage;
// style={{width:'100%', backgroundColor: 'purple'}}