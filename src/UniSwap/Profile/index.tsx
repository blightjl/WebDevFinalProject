import { FaEdit } from "react-icons/fa";
import { useNavigate, useSearchParams } from "react-router-dom";
import "../ColorScheme.css";
import "./index.css"
import { useEffect, useState } from "react";
import ProductListingTile from "./ProductListingTile";
import Header from '../Components/Header';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure
} from '@chakra-ui/react'
import * as accountClient from '../Account/client';
import EditProfile from "../ProfileEdit";
import profile from "../Types/Profile";

function hasNumber(input: string) {
  return /\d/.test(input);
}

function ProfilePage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [account, setAccount] = useState<profile>();
  const [user, setUser] = useState<profile>();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(()=> {
    let userId = searchParams.get('identifier');
    if (userId) {
      const fetchAccount = async () => {
        if (hasNumber(userId!)) {
          const user = await accountClient.findUserById(userId!);
          setAccount(user);
        } else {
          const user = await accountClient.findUserByName(userId!);
          setAccount(user);
        }
      }
      fetchAccount();

      const fetchUser = async () => {
        try {
          const user = await accountClient.home();
          setUser(user);
        } catch (error) { }
      }
      fetchUser();
    }
  }, [searchParams, isOpen])
  
  return (
    <div style={{ height: '100vh' }}>
      <Header />
      <div style={{ display: 'flex', flexDirection: 'column', }}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="profile-icon">
            <img
              src='./default_profile.jpeg'
              alt="Profile"
              className="profile-image"
            />
            {user && user._id === account?._id && <FaEdit 
              className="edit-icon edit-button"
              onClick={onOpen}
            />}
            </div>
            <h1 className="adjustedFont" style={{ width: 'fit-content', marginTop: 5, fontSize: '1.7rem', color: '#414141' }}>{account?.name || account?.username}</h1>
          </div>
          <p className="profileBio adjustedFont">
            <br />
            {account && (account.bio || 'Hi I\'m new Here!')}
          </p>
        </div>
        <div className="products-wrapper">
          <div> <h1 className="adjustedFont" style={{ color: 'grey' }}>{account?.accountType === 'SELLER' ?  'Product Listings' : 'Bookmarked Products'}</h1>
            <div className="products-container-profile">
              {account?.products
              ? account?.products.map((product, index) => (
                  <ProductListingTile product={product} key={index} />
                )) 
              : <p className="adjustedFont" style={{ marginLeft: 5 }}>{`No ${account?.accountType === 'BUYER' ? 'Saved Products' : 'Product Listings'}`}</p>}
            </div>
          </div>
        </div>
      </div> 
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent backgroundColor='#E1E9B7'>
          <ModalBody>
            <EditProfile onClose={onClose} account={account} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default ProfilePage;