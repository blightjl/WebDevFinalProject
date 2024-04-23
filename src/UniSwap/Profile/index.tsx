import { FaEdit } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
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
import Product from "../Types/Product";

function ProfilePage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [user, setUser] = useState<profile>({
    username: 'placeholder',
    password: 'placeholder',
    name: "John Doe",
    bio: "Hi, I’m a seller. I love selling things! Things such as shoes, shirts, and pants.",
    products: [],
    profilePicture: "https://example.com/profile-image.jpg",
    profileType: 'SELLER',
    _id: 1,
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const [savedProducts, setSavedProducts] = useState<Product[]>([]);

  useEffect(()=> {
    let userId = searchParams.get('profileId');
    if (userId) {
      const fetchUser = async () => {
        const user = await accountClient.findUserById(userId!);
      }
      fetchUser();
    } else {
      const fetchUser = async () => {
        const user = await accountClient.home();
        setUser(user);
      }
      fetchUser();
    }
  }, [])

  return (
    <div style={{ height: '100vh' }}>
      <Header />
      <div style={{ display: 'flex', flexDirection: 'column', }}>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="profile-icon">
                  <img
                    src={user.profilePicture}
                    alt="Profile"
                    className="profile-image"
                  />
                  <FaEdit 
                    className="edit-icon edit-button"
                    onClick={onOpen}
                  />
                </div>
                <h1 className="adjustedFont" style={{ width: 'fit-content', marginTop: 5, fontSize: '1.7rem', color: '#414141' }}>{user.name}</h1>
            </div>
            <p className="profileBio adjustedFont">
              <br />
              {user.bio}
            </p>
          </div>
          <div className="products-wrapper">
              <div> <h1 className="adjustedFont" style={{ color: 'grey' }}>{user.profileType === 'SELLER' ?  'Product Listings' : 'Bookmarked Products'}</h1>
                  <div className="products-container-profile">
                      {savedProducts.length > 0 
                      ? savedProducts.map((product, index) => (
                          <ProductListingTile product={product} key={index} />
                        )) 
                      : <p className="adjustedFont" style={{ marginLeft: 5 }}>{`No ${user.profileType === 'BUYER' ? 'Saved Products' : 'Product Listings'}`}</p>}
                  </div>
              </div>
          </div>
      </div> 
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent backgroundColor='#E1E9B7'>
          <ModalBody>
            <EditProfile onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default ProfilePage;