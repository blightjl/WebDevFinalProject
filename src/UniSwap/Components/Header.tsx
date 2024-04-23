import React, { useEffect, useState } from "react";
import "./Header.css";
import marketPlace from "../Images/marketplace_icon.png";
import { Link, useNavigate } from "react-router-dom";
import * as client from '../Account/client';
import { Modal, ModalBody, ModalContent, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import CreateProductModal from "./CreateProductModal";

export default function Header(
) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [width, setWidth] = useState(window.innerWidth);
  const navigate = useNavigate();
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
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    const getClient = async () => {
      const user = await client.home();
      setUser(user);
    }
  getClient();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const HomeIcon = (
    <Link to="/home">
      <div 
        className="home-icon"
      >
        <img alt='home icon' src={marketPlace} className="home-icon-image"/>
      </div>
    </Link>
  );

  const AccountButton = (
    <Link to={`/profile/?userID=${user._id}`}>
      <div className="account-button">
        <h2 className="adjustedFont" style={{ margin: 0, padding: 0, textDecoration: 'none' }}>Account</h2>
      </div>
    </Link>
  );
  

  const onSubmit = (value: string) => {
    navigate(`/product/?productName=${value}`)
  }

  const LoginButton = (
    <Link to={'/login'}>
      <div className="login-button">
        <h2 className="adjustedFont" style={{ margin: 0, padding: 0, textDecoration: 'none' }}>Log In</h2>
      </div>
    </Link>
  );

  const CreateProductButton = (
    <div className="create-product-button" onClick={onOpen}>
      <h2 className="adjustedFont" style={{ margin: 0, padding: 0, textDecoration: 'none' }}>Create Product</h2>
    </div>

  );
  
  const SearchBar = (
    <div>
      <input 
        className="searchbar" 
        type="text" 
        id="searchBar" 
        placeholder="Search for a Product..." 
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            const target = e.target as HTMLInputElement;
            onSubmit(target.value);
          }
        }}
      />
      {/* <button onClick={() => onSubmit((document.getElementById('searchBar') as HTMLInputElement)?.value || '')}>Search</button> */}
    </div>
  );

  return(
    <div className="row" style={{ alignItems: 'center', flexWrap:'nowrap', height: 96 }}>
      {HomeIcon}
      {AccountButton}
      {CreateProductButton}
      {/* {user._id 
        ? user.profileType === 'Seller' && CreateProductButton
        : LoginButton} */}
      {SearchBar}
      {width > 1150 && <h3 className="adjustedFont uniswapLogoMini titleColor">UniSwap</h3>}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent backgroundColor='#E1E9B7'>
          <ModalBody>
            <CreateProductModal onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  )
}