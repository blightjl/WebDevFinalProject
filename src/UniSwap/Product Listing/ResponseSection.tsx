import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../Types/Product';
import ProductComment from '../Types/ProductComment';
import * as accountClient from '../Account/client';
import * as productClient from '../Types/productClient';
import './ResponseSection.css'
import { FaPaperPlane, FaTrash } from "react-icons/fa";

function generateRandomId(length: number): number {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += Math.floor(Math.random() * 10); // Generate a random digit (0-9)
  }
  return Number(result);
}

export default function ResponseSection({
  product,
  comments,
} : {
  product: Product,
  comments: ProductComment[]
}): React.JSX.Element {
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
  const [allComments, setAllComments] = useState(comments);
  const [comment, setComment] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const user = await accountClient.home();
      setUser(user);
    }
    fetchUser();
  }, []);

  const submitComment = async () => {
    const newComment: ProductComment = {
      commentID: generateRandomId(10),
      userID: user._id,
      userName: user.username,
      description: comment,
    }
    console.log(newComment.commentID)
    setAllComments([...allComments, newComment])
    await productClient.updateProduct({...product, comments: allComments});
    setComment('');
  };
  const handleDelete = async (commentID: Number) => {
    const newComments = allComments.filter(comment => comment.commentID !== commentID);
    setAllComments(newComments);
    await productClient.updateProduct({...product, comments: newComments});
  }

  return(
    <div className='response-container'>
      <span style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 10
        }}>
        <textarea
          className='comment-textArea adjustedFont'
          placeholder='Send a comment!'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <FaPaperPlane
          className='comment-submit'
          onClick={submitComment}
        />
      </span>
      {allComments.map((comment: ProductComment, index: number) => (
        <span style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          {user.profileType === 'ADMIN' &&
           <FaTrash 
            className='comment-delete'
            onClick={() => handleDelete(comment.commentID)}
            />
          }
          <Link to={`/profile/?profileId=${comment.userName}`}>
            <span 
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                flexDirection: 'column',
                cursor: 'pointer',
              }}
              key={index}
            >
              <p className='adjustedFont' style={{ fontSize: '.5rem' }}>{`${comment.userName} says...`}</p>
              <span style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
                <p className='adjustedFont' style={{  margin: 0, marginRight: 5 }}>{comment.description}</p>
              </span>
            </span>
          </Link>
        </span>
      ))}
    </div>
  )
}
