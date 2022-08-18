import React, { useEffect } from 'react'
import axios from 'Components/lib/axios'
import { getPics } from 'Components/lib/helpers'
import 'Components/lib/fullScreenImage.css'
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import 'Components/Feed/Restaurant/lib/components/style.css'

function Reviews({reviews}) {

  const addComment = async (e, id) => {
    e.preventDefault()

    const text = e.target.comment.value;
    const {status} = await axios.post('comment', {
      text,
      review: id,
      uporabnik: sessionStorage.getItem('user_id')
    })

    if (status === 201) window.location.reload();
  }
  useEffect(() =>{
    getPics()
  },[])


  const react = async (reaction, review_id) => {
    const {status} = await axios.put('/reactToReview', {
      reaction,
      review_id,
    })

    if(status === 200) window.location.reload()
  }


  return (
    <div>
      {reviews.map(review => (
        <>
          <div style={{position:'relative', padding: '20px', margin: '50px', borderRadius: '20px', border:'1px solid black',display:'flex', flexDirection: 'column'}}>
            <div style={{position:'absolute', top:'-30px', left:'20px'}}>username: {review.Uporabnik.username}</div>
              <div>
                {review.text}
              </div>
              <div style={{display:'flex', justifyContent:'space-evenly', margin:'20px',}}>
                <div style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
                  <ThumbUpAltIcon className='thumb' style={{fontSize:'50px'}} onClick={() => react('like', review.id)}/>
                   {review.like_num}
                </div>
                <div style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
                  <ThumbDownIcon className='thumb' style={{fontSize:'50px'}} onClick={() => react('disslike', review.id)} />
                  {review.dislike_num}
                </div>
              </div>
              <div style={{display: 'flex', margin:'50px 0px 10px 0px', justifyContent:'space-around', flexWrap:'wrap'}}>
                {review.images.map(image => <img style={{height:'130px', width:'130px'}} src={`data:image/png;base64,${image.image}`} />)}
              </div>
              <hr/>

              {review.comments.map(comment => (
                <>
                    <div style={{display: 'flex', justifyContent:'space-between'}}>
                      <div style={{ paddingRight: '30px'}}>{comment.Uporabnik.username}</div>
                      <div style={{borderLeft: '1px solid', paddingLeft: '30px'}}>{comment?.text}</div>
                    </div>
                    <hr />
                </>
              ))}
              <form onSubmit={(e) => addComment(e, review.id)} style={{display: 'flex'}}>
                <input style={{height:'40px', border: '1px solid grey', borderRadius:'20px', width:'90%', display:'flex', margin:'auto', padding:'20px'}} name='comment' type='text' />
                <button type='submit' style={{borderRadius:'20px'}} >post</button>
              </form>
          </div>
        </>
      ))}
    </div>
  )
}

export default Reviews