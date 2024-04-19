import Header from "../Components/Header";
import Product from "../Types/Product";
import "./ProductListing.css";
import "../ColorScheme.css";
import { useSearchParams } from "react-router-dom";
import profile from "../Types/Profile";
import StaticTile from "../Components/StaticTile";
import marketplaceIcon from '../Images/marketplace_icon.png';
import ResponseSection from "./ResponseSection";
import ProductComment from '../Types/ProductComment';
import { useEffect, useState } from "react";

export default function ProductListing(
) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [product, setProduct] = useState<Product>();

  useEffect(()=> {
    const productID = searchParams.get('productID');
    
    // grab product from DB using ID and set it to product
    // setProduct();
  }, [])
  let placeholderComment: ProductComment = {
    commentID: 1,
    userID: 2,
    userName: 'Buyer Person',
    description: 'I HATE THIS PRODUCT',
    likes: 2,
  }
  let placeholderProduct: Product = {
    image: marketplaceIcon,
    description_short: "This is a short description",
    description_long: "This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. ",
    title: "Placeholder Product",
    price: "500$",
    type: "Shoes",
    id: 1,
    comments: [placeholderComment, placeholderComment, placeholderComment]
  };
  let placeholderSeller: profile = {
    name: "Placeholder name",
    profilePicture: marketplaceIcon,
    products: [placeholderProduct, placeholderProduct, placeholderProduct, placeholderProduct, placeholderProduct],
    bio: "I love to sell things",
    profileType: 'Seller'
  };
  let placeholderSimilarProduct: Product[] = [placeholderProduct, placeholderProduct, placeholderProduct, placeholderProduct, placeholderProduct];

  return( 
    <>
    <Header />
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="product-container">
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 20, marginRight: 20}}>
          <img className="product-listing-image" src={placeholderProduct.image}/>
          <br />
          <p className="adjustedFont product-description-long">
            {placeholderProduct.description_long || placeholderProduct.description_short}
          </p>
        </div>
        <div className="adjustedFont product-info-section">
          <h1>{`${placeholderProduct.price}$`}</h1>
          <h4 className="seller-profile-small">
            {placeholderSeller.name} <img src={placeholderProduct.image} className='seller-image' />
          </h4>
          <br />
          <h4 style={{ margin: 0 }}>Product Type: {placeholderProduct.type}</h4>
          <p>Similar Products</p>
          <div className="similar-items-container">
            {placeholderSimilarProduct.map((product, index) => (
              <StaticTile
                title={product.title}
                price={product.price}
                image={product.image}
                key={index}
                size='sm'    
              />
            ))}
          </div>
          <div className="buy-product-button">
            <h3>Buy Product</h3>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <ResponseSection comments={placeholderProduct.comments}/>
      <br />
    </div>
    </>
  );
}