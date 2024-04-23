import Header from "../Components/Header";
import Product from "../Types/Product";
import "./ProductListing.css";
import "../ColorScheme.css";
import { useParams, useSearchParams } from "react-router-dom";
import profile from "../Types/Profile";
import StaticTile from "../Components/StaticTile";
import marketplaceIcon from '../Images/marketplace_icon.png';
import ResponseSection from "./ResponseSection";
import ProductComment from '../Types/ProductComment';
import { useEffect, useState } from "react";
import * as productClient from '../Types/productClient';
import * as accountClient from '../Account/client';
import axios from "axios";


// Define the Video interface
interface Video {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
  };
}

export default function ProductListing(
) {
  const [product, setProduct] = useState<Product>({
    image: marketplaceIcon,
    description_short: "This is a short description",
    description_long: "This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. This is a super duper long description where I talk about a bunch of stuff. ",
    title: "Item Name",
    price: "500",
    type: "Shoes",
    id: 1,
    comments: [{
        commentID: 1,
        userID: 1,
        userName: 'placeholder 2',
        description: 'COMMENT',
      },
      {
        commentID: 2,
        userID: 2,
        userName: 'placeholder 2',
        description: 'COMMENT',
      }
    ],
  });
  const [seller, setSeller] = useState<profile>({
    username: 'placeholder',
    password: 'placeholder',
    name: "Placeholder name",
    profilePicture: undefined,
    products: [],
    bio: "I love to sell things",
    profileType: 'SELLER',
    _id: 1,
  });
  const [searchParams, setSearchParams] = useSearchParams();
  
  useEffect(()=> {
    const fetchProduct = async () => {
      const searchedProduct = searchParams.get('productName');
      const product = await productClient.findProductByName(searchedProduct!);
      setProduct(product);
    }
    fetchProduct();

    const fetchUser = async () => {
      const seller = product.id;
      const sellerData = await accountClient.findUserById(`${seller}`);
      setSeller(sellerData);
    }
    fetchUser();
  }, []);

  const handleBookmark = () => {
    accountClient.addProduct(product);
  };
  // let placeholderSimilarProduct: Product[] = [placeholderProduct, placeholderProduct, placeholderProduct, placeholderProduct, placeholderProduct];
  const [similarVideos, setSimilarVideos] = useState<Video[]>([]); 

useEffect(() => {
  const fetchSimilarVideos = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&q=${product.title}&key=AIzaSyAeZHD_D-qivcyGJIudLrjdUSp4lihwh4k`
      );
      setSimilarVideos(response.data.items);
    } catch (error) {
      console.error("Error fetching similar videos:", error);
    }
  };
  fetchSimilarVideos();
}, [product.title]);


  return( 
    <>
    <Header />
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="product-container">
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 20, marginRight: 20}}>
          <img className="product-listing-image" src={product.image}/>
          <br />
          <p className="adjustedFont product-description-long">
            {product.description_long || product.description_short}
          </p>
        </div>
        <div className="adjustedFont product-info-section">
          <h1 style={{ fontSize: '1rem', textWrap: 'wrap' }}>{`${product.title}`}</h1>
          <h1 style={{ fontSize: '2rem' }}>{`${product.price}$`}</h1>
          <h4 className="seller-profile-small">
            {seller.name} <img src={seller.profilePicture} className='seller-image' />
          </h4>
          <br />
          <h4 style={{ margin: 0, fontSize: '.7rem' }}>Product Type: {product.type}</h4>
          <br />
          <p>Similar Videos About Product</p>
          {/* TODO switch to youtube video */}
          <div className="similar-videos-container">
        {similarVideos.map((video, index) => (
          <iframe
            key={index}
            title={video.snippet.title}
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        ))}
      </div>
          {/* <div className="similar-items-container">
            {simaler.map((product, index) => (
              <StaticTile
                title={product.title}
                price={product.price}
                image={product.image}
                key={index}
                size='sm'    
              />
            ))}
          </div> */}
          <div className="buy-product-button">
            <h3>Buy Product</h3>
          </div>
          <div className="bookmark-product-button" onClick={handleBookmark}>
            <h3>Bookmark Product</h3>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <ResponseSection product={product} comments={product.comments}/>
      <br />
    </div>
    </>
  );
}