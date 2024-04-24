import { useState } from "react";
import { ModalCloseButton } from '@chakra-ui/react'
import "./index.css"
import "../ColorScheme.css";
import * as accountClient from '../Account/client';
import profile from "../Types/Profile";
  
function EditProfile({
  account,
  onClose,
} : {
  account?: profile,
  onClose: any,
} ) {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [profilePicture, setProfilePicture] = useState<File | null>(null);

  const handleSave = async () => {
    const updatedAccount = {
      ...account,
      name: name === '' ? account?.name : name,
      bio: bio === '' ? account?.bio : bio,
      profilePicture: profilePicture ? URL.createObjectURL(profilePicture) : null
    };
    console.log(updatedAccount)
    await accountClient.updateProduct(updatedAccount)
    onClose();
  };

  return (
    <div className="edit-profile-modal adjustedFont">
      <ModalCloseButton />
      <h2>Edit Profile</h2>
      <form onSubmit={handleSave}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            className="textarea"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="bio">Bio:</label>
          <textarea
            id="bio"
            value={bio}
            className="textarea"
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="profilePicture">Profile Picture:</label>
          <input
            type="file"
            id="profilePicture"
            accept="image/*"
            onChange={(e) =>
              setProfilePicture(e.target.files ? e.target.files[0] : null)
            }
          />
        </div>
        <div className="button-container">
          <button type="button" onClick={onClose} className="cancel-button">
            Cancel
          </button>
          <button type="submit" className="save-button">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProfile;