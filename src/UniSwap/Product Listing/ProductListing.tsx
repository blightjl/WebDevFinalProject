import Header from "../Components/Header";
import Product from "../Types/Product";
import "./ProductListing.css";
import "../ColorScheme.css";
import { useSearchParams } from "react-router-dom";
import { SellerProfile } from "../Types/SellerProfile";
import StaticTile from "../Components/StaticTile";

export default function ProductListing(
) {
    const productName = useSearchParams()
    let placeholderProduct: Product;
    let palceholderSeller: SellerProfile;
    let placeholderSimilarProduct: Product[];

    return (
        <div>
            <Header />
            {/* <div style={{ display: 'flex', flexDirection: 'row'}}>
                <div style={{ display: 'flex', flexDirection: 'column'}}>
                    <img className="product-listing-image" src={placeholderProduct.image}/>
                    <br />
                    <p className="adjustedFont">
                        {placeholderProduct.description_long || placeholderProduct.description_short}
                    </p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column'}} className="adjustedFont">
                    <h2>{`${placeholderProduct.price}$`}</h2>
                    <h4>
                        {palceholderSeller.name} <img src={placeholderProduct.image} className='seller-image' />
                    </h4>
                    <br />
                    <h4>{placeholderProduct.type}</h4>
                    <p>Similar Products</p>
                    <div className="similar-items-container">
                        {placeholderSimilarProduct.map((product, index) => (
                            <StaticTile title={product.title} price={product.price} image={product.image} />
                        ))}
                    </div>
                    <div className="buy-product-button">
                        <h2>Buy Product</h2>
                    </div>
                </div>
            </div> */}
        </div>
    )
}