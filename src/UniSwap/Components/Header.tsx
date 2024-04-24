import React, { useEffect, useState } from "react";
import "./Header.css";
import marketPlace from "../Images/marketplace_icon.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
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
    id: -1,
  });
  
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    const fetchUser = async () => {
      const user = await client.home();
      setUser(user);
    }
    fetchUser();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const logout = async (event : any) => {
    event.preventDefault();
    console.log("LOG OUT")
    try {
        // console.log(" YOU ARE NOW LOGGING IN...")
        await client.logout();
        // console.log(response)
        console.log("LOGGING OUT!");
        navigate("/login");
    } catch (error) {
        console.log(error);
        console.log("FAILED LOGGING OUT");
        // alert(error);
    }
};

  const HomeIcon = (
    <Link to="/home">
      <div className="home-icon">
        <img alt='home icon' src={marketPlace} className="home-icon-image"/><br/>
        {user.id != -1 && 
      <div className="account-button">
        <button className="adjustedFont" type="button"  onClick={logout}>
                        <strong>Logout</strong>
                    </button>
      </div>
    }
      </div>
    </Link>
  );

  const AccountButton = (
    <Link to={user.id === -1 ? '/login' : `/profile/?profileId=${user.id}`}>
      <div className="account-button">
        <h2 className="adjustedFont" style={{ margin: 0, padding: 0, textDecoration: 'none' }}>
          {user.id === -1 ? 'Log In' : user.username}
        </h2>
      </div>
    </Link>
  );
  

  const onSubmit = (value: string) => {
    navigate(`/search/?productName=${value}`)
  }

  const openProductModal = () => {
    if(user.id !== -1) {
      onOpen();
    } else {
      alert('Must Log in First');
      navigate('/login');
    }
  }

  const CreateProductButton = (
    <div className="create-product-button" onClick={openProductModal}>
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
    <div className="row" style={{ justifyContent: 'center', alignItems: 'center', flexWrap:'nowrap', height: 96 }}>
      {HomeIcon}
      {AccountButton}
      {CreateProductButton}
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