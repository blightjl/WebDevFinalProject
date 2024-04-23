import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../Types/Product';
import ProductComment from '../Types/ProductComment';
import './ResponseSection.css'

export default function ResponseSection({comments} : {comments: ProductComment[]}): React.JSX.Element {

  return(
    <div className='response-container'>
      {comments.map((comment: ProductComment, index: number) => (
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
      ))}
    </div>
  )
}
