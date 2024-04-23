import { useEffect, useState } from "react";
import { ModalCloseButton } from '@chakra-ui/react'
import "../ColorScheme.css";
import "../ProfileEdit/index";
import * as accountClient from '../Account/client';
import * as productClient from '../Types/productClient';
import Product from "../Types/Product";
import { ProductType } from "../Types/ProductType";

const productType = ["T-Shirts & Long Sleeves", "Shoes", "Sweaters"]

export default function CreateProductModal(
  {onClose} 
  : 
  {onClose: any}
  ) {
  const [user, setUser] = useState({
    username: 'placeholder',
    password: 'placeholder',
    name: "Placeholder name",
    profilePicture: undefined,
    products: [],
    bio: "I love to sell things",
    profileType: 'SELLER',
    _id: 1,
  });
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState('');
  const [productImage, setProductImage] = useState<File | null>(null);
  const [price, setPrice] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const user = await accountClient.home();
      setUser(user);
    }
    fetchUser();
  }, []);

  const handleSave = () => {
    const newProduct: Product = {
      image: productImage,
      description_short: description,
      description_long: description,
      title: name,
      price: price,
      type: type as ProductType,
      id: user._id, 
      comments: [],
    };
    accountClient.addProduct(newProduct);
    productClient.createProduct(newProduct)
    onClose();
  };

  return (
    <div className="edit-profile-modal adjustedFont">
      <ModalCloseButton />
      <h2>Create Product</h2>
      <form onSubmit={handleSave}>
        <div className="form-group">
          <label htmlFor="name">Product Name:</label>
          <input
            type="text"
            id="name"
            className="textarea"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="bio">Short Product Description:</label>
          <textarea
            id="bio"
            value={description}
            className="textarea"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="type">Product Type:</label>
          <select
            id='type'
            name='type'
            className='product-type-select'
            onChange={(e) => setType(e.target.value)}
          >
            {productType.map(product => 
              <option value={product}>{product}</option>)}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="profilePicture">Picture of Product:</label>
          <input
            type="file"
            id="profilePicture"
            accept="image/*"
            onChange={(e) =>
              setProductImage(e.target.files ? e.target.files[0] : null)
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            className="textarea"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="button-container">
          <button type="button" onClick={onClose} className="cancel-button">
            Cancel
          </button>
          <button type="submit" className="save-button">
            Create Product
          </button>
        </div>
      </form>
    </div>
  );
}
