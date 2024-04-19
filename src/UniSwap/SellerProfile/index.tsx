import { FaEdit } from "react-icons/fa";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import "../ColorScheme.css";
import "./index.css"
import { SetStateAction, useEffect, useState } from "react";
import { Product } from "./product";
import ProductListingTile from "./ProductListingTile";
import Header from '../Components/Header';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    useDisclosure
  } from '@chakra-ui/react'
import EditProfile from "../ProfileEdit";

function SellerProfile() {
    // const [savedProducts, setSavedProducts] = useState<Product[]>([]);
    
    const [searchParams, setSearchParams] = useSearchParams();
    const [user, setUser] = useState<Product>();

    useEffect(()=> {
        const userID = searchParams.get('userID');
        
        // grab product from DB using ID and set it to product
        // setUser();
    }, [])

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [profileInfo, setProfileInfo] = useState({
        name: "John Doe",
        bio: "Hi, I’m a seller. I love selling things! Things such as shoes, shirts, and pants.",
        profilePicture: "https://example.com/profile-image.jpg",
    });
    const navigate = useNavigate();

    const handleProfileUpdate = (updatedInfo: SetStateAction<{ name: string; bio: string; profilePicture: string; }>) => {
        setProfileInfo(updatedInfo);
        navigate('/seller/profile'); // Navigate back to the SellerProfile page after updating
    };


    const [someState, setSomeState] = useState(false);
    const [savedProducts, setSavedProducts] = useState<Product[]>([

    ]);

    return (
        // !NOTE: the UniSwap logo should collapse when it approaches the register box i.e. in screen size: xs, s, m
        <>
            <Header />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
                        <h1 className="adjustedFont" style={{ width: 'fit-content', marginTop: 5, fontSize: '1.7rem' }}>{profileInfo.name}</h1>
                    </div>
                    <p className="transparent-textarea adjustedFont">
                        {profileInfo.bio}
                    </p>
                </div>
                <div className="products-wrapper">
                    <div> <h1 className="adjustedFont" style={{ color: 'grey' }}>Product Listings</h1>
                        <div className="products-container-profile">
                            {savedProducts.map((product, index) => (
                                <ProductListingTile product={product} key={index} />
                            ))}
                        </div>
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
        </>
    );
}

export default SellerProfile;