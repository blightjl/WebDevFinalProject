import Header from "../Components/Header";
import Product from "../Types/Product";
import "./ProductListing.css";
import "../ColorScheme.css";
import { useSearchParams } from "react-router-dom";
import profile from "../Types/Profile";
import marketplaceIcon from '../Images/marketplace_icon.png';
import ResponseSection from "./ResponseSection";
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
  const [similarVideos, setSimilarVideos] = useState<Video[]>([]); 
  const [product, setProduct] = useState<Product>();
  const [seller, setSeller] = useState<profile>();
  const [searchParams, setSearchParams] = useSearchParams();
  
  useEffect(()=> {
    const fetchProduct = async () => {
      const searchedProduct = searchParams.get('identifier');
      setSearchParams(searchParams)
      const product = await productClient.findProductByName(searchedProduct!);
      setProduct(product);
    }
    fetchProduct();

    const fetchSeller = async () => {
      const seller = product?.id;
      const sellerData = await accountClient.findUserById(`${seller}`);
      setSeller(sellerData);
    }
    // fetchSeller();
    
    const fetchSimilarVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&q=${product?.title}&key=AIzaSyAeZHD_D-qivcyGJIudLrjdUSp4lihwh4k`
        );
        setSimilarVideos(response.data.items);
      } catch (error) {
        console.error("Error fetching similar videos:", error);
      }
    };
    // fetchSimilarVideos();
  }, [searchParams]);

  const handleBookmark = () => {
    accountClient.addProduct(product);
  };

  return( 
    <>
    <Header />
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="product-container">
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 20, marginRight: 20}}>
          <img alt='product listing' className="product-listing-image" src={product?.image || '../../public/default_product.jpeg'}/>
          <br />
          <p className="adjustedFont product-description-long">
            {product?.description_long || product?.description_short}
          </p>
        </div>
        <div className="adjustedFont product-info-section">
          <h1 style={{ fontSize: '1rem', textWrap: 'wrap' }}>{`${product?.title}`}</h1>
          <h1 style={{ fontSize: '2rem' }}>{`${product?.price}$`}</h1>
          <h4 className="seller-profile-small">
            {seller?.name} <img alt='seller profile' src={seller?.profilePicture || '../../public/default_profile.jpeg'} className='seller-image' />
          </h4>
          <br />
          <h4 style={{ margin: 0, fontSize: '.7rem' }}>Product Type: {product?.type}</h4>
          <br />
          <p>Similar Videos About Product</p>
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
      <ResponseSection />
      <br />
    </div>
    </>
  );
}