import React, { useState } from 'react';
import Product from '../Types/Product';
import ProductComment from '../Types/ProductComment';
import Pink_Heart from '../Images/Pink_Heart.png';
import './ResponseSection.css'

export default function ResponseSection({comments} : {comments: ProductComment[]}): React.JSX.Element {
  const [hasLikedList, setHasLikedList] = useState<Number[]>([]);
  
const handleCommentClick = (commentID: Number) => {
  if (hasLikedList.includes(commentID)) {
    const commentIndex = hasLikedList.indexOf(commentID);
    setHasLikedList(prevList => prevList.filter((_, index) => index !== commentIndex));
  } else {
    setHasLikedList([...hasLikedList, commentID]);
  }

  // change the like number in the db
}

  return(
    <div className='response-container'>
      {comments.map((comment: ProductComment, index: number) => (
        <span 
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            flexDirection: 'column'
            }}
        >
          <p className='adjustedFont' style={{ fontSize: '.5rem' }}>{`${comment.userName} says...`}</p>
          <span style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
            <p className='adjustedFont' style={{  margin: 0, marginRight: 5 }}>{comment.description}</p>
            <span 
              style={{
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                alignItems: 'center',
              }}
              onClick={() => handleCommentClick(comment.commentID)}
            >
              <img src={Pink_Heart} style={{ width: 25, height: 20 }} />
              <p style={{ fontSize: '.5rem', margin: 0 }}>{`${comment.likes} likes`}</p>
            </span>
          </span>
        </span>
      ))}
    </div>
  )
}
