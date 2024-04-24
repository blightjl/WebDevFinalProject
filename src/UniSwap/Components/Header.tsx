import React, { useEffect, useState } from "react";
import "./Header.css";
import marketPlace from "../Images/marketplace_icon.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import * as accountClient from '../Account/client';
import { Modal, ModalBody, ModalContent, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import CreateProductModal from "./CreateProductModal";
import profile from "../Types/Profile";

export default function Header(
) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [width, setWidth] = useState(window.innerWidth);
  const navigate = useNavigate();
  const [user, setUser] = useState<profile>();
  const [update, setUpdate] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    const fetchUser = async () => {
      try {
        const user = await accountClient.home();
        setUser(user);
      } catch (error) { }
    }
    fetchUser();
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
    <Link to={user ? `/profile/?identifier=${user._id || 1}` : '/login'}>
      <div className="account-button">
        <h2 className="adjustedFont" style={{ margin: 0, padding: 0, textDecoration: 'none' }}>
          {user ? user.username : 'Log In'}
        </h2>
      </div>
    </Link>
  );
  

  const onSubmit = (value: string) => {
    navigate(`/search/?identifier=${value}`)
  }

  const openProductModal = () => {
    if(user) {
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

  const LogoutButton = () => {
    const handleLogout = async () => {
      try {
        await accountClient.logout();
        navigate('/home?');
        setUpdate(!update);
      } catch (error) {
        alert('Error Logging out');
      }
    };

    return(
      <div
        className="logout-button adjustedFont"
        onClick={handleLogout}
      >
        Log Out
      </div>)
  };
  
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
            if (target.value.trim() !== '') {
              onSubmit(target.value);
            }
          }
        }}
      />
    </div>
  );

  return(
    <div className="row" style={{ justifyContent: 'center', alignItems: 'center', flexWrap:'nowrap', height: 96 }}>
      {HomeIcon}
      {AccountButton}
      {CreateProductButton}
      {user && <LogoutButton />}
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