import React, { useEffect } from "react";
import { Route, Routes, Link, useNavigate, useSearchParams } from "react-router-dom";
import { CiShop } from 'react-icons/ci';
import { FaEdit } from "react-icons/fa";
import "./index.css"
import "../ColorScheme.css";
import { SetStateAction, useState } from "react";
import { Product } from "./product";
import SavedProductTile from "./SavedProductTile";
import Header from "../Components/Header";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    useDisclosure
  } from '@chakra-ui/react'
import EditProfile from "../ProfileEdit";
  

function BuyerProfile() {
    const [savedProducts, setSavedProducts] = useState<Product[]>([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [profileInfo, setProfileInfo] = useState({
        name: "Buyer McBuyerson",
        bio: "Hi I’m buyer, I love buying things! Things such as shoes, shirts, and pants. This is my profile where I can view my bookmarked products, products that I’ve bookmarked! If I click on one of the squares it will take me to the product page.",
        profilePicture: "https://example.com/profile-image.jpg",
    });

    useEffect(()=> {
        const userID = searchParams.get('userID');
        
        // grab user from DB using ID and set it to vars
        // setUser();
        // setSavedProducts()
    }, [])

    const { isOpen, onOpen, onClose } = useDisclosure()
    const navigate = useNavigate();

    const handleProfileUpdate = (updatedInfo: SetStateAction<{ name: string; bio: string; profilePicture: string; }>) => {
        setProfileInfo(updatedInfo);
    };

    const [someState, setSomeState] = useState(false);
    return (
        // !NOTE: the UniSwap logo should collapse when it approaches the register box i.e. in screen size: xs, s, m
        <div>
            <Header />
            <div className="profile-icon">
                <img
                    src={profileInfo.profilePicture}
                    alt="Profile"
                    className="profile-image"
                />
                <FaEdit 
                    className="edit-icon edit-button"
                    onClick={onOpen}    
                />
            </div>
            <div className="text-area-wrapper">
                <p className="transparent-textarea">
                    <h2 className="profile-name adjustedFont">{profileInfo.name}</h2>
                    {profileInfo.bio}
                </p>
            </div>
            <div className="products-wrapper">
                <div> <h1 className="adjustedFont" style={{ color: 'grey' }}>Bookmarked Products</h1>
                    <div className="products-container-profile" style={{ backgroundColor: '#D0B783', padding: '20px' }}>
                        {savedProducts.map((product, index) => (
                            <SavedProductTile product={product} key={index} />
                        ))}
                    </div>
                </div>
            </div>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalBody>
                        <EditProfile onClose={onClose} />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    );
}

export default BuyerProfile;