import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Product from '../Types/Product';
import ProductComment from '../Types/ProductComment';
import * as accountClient from '../Account/client';
import * as productClient from '../Types/productClient';
import './ResponseSection.css'
import { FaPaperPlane, FaTrash } from "react-icons/fa";
import profile from '../Types/Profile';

function generateRandomId(length: number): number {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += Math.floor(Math.random() * 10); // Generate a random digit (0-9)
  }
  return Number(result);
}

export default function ResponseSection(): React.JSX.Element {
  const [user, setUser] = useState<profile>();
  const [allComments, setAllComments] = useState<ProductComment[]>();
  const [comment, setComment] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await accountClient.home();
        setUser(user);
      } catch (error) { }
    }
    fetchUser();

    const fetchProduct = async () => {
      const searchedProduct = searchParams.get('identifier');
      setSearchParams(searchParams)
      const product = await productClient.findProductByName(searchedProduct!);
      setProduct(product)
      setAllComments(product.comments);
    }
    fetchProduct();
  }, []);

  const submitComment = async () => {
    const newComment: ProductComment = {
      commentID: generateRandomId(10),
      userID: user!._id,
      userName: user!.username,
      description: comment,
    }
    setAllComments(allComments ? [...allComments, newComment] : [newComment])
    await productClient.updateProduct({...product, comments: allComments ? [...allComments, newComment] : [newComment]});
    setComment('');
  };

  const handleDelete = async (commentID: Number) => {
    const newComments = allComments?.filter(comment => comment.commentID !== commentID);
    setAllComments(newComments);
    await productClient.updateProduct({...product, comments: newComments});
  }

  return(
    <div className='response-container'>
      {user && 
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
      }
      {allComments && allComments.length > 0 
        ? allComments.map((comment: ProductComment, index: number) => (
            <span style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} key={index}>
              {user && user.accountType === 'ADMIN' &&
              <FaTrash 
                className='comment-delete'
                onClick={() => handleDelete(comment.commentID)}
                />
              }
              <Link to={`/profile/?identifier=${comment.userName}`}>
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
          ))
        : <p className='adjustedFont'>No Comments</p>
      }
    </div>
  )
}
