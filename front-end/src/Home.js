import React, { useEffect, useState } from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import { Navigate } from 'react-router';
import { GetPosts, GetLikes, SetLike, RemoveLike } from "./helpers/api";

const Home = ({user}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const userLikes = async () => {
      return await GetLikes(user);
    }
    (async () => {
      const postRes = await GetPosts();
      const likes = await userLikes();
    
      const newArr = postRes.map(obj => {
        for (let i = 0; i < likes.likes.length; i++) {
          if (obj.id === likes.likes[i].post_id) {
            obj.like = true;
          }
        }
        return obj;
      });
    
      setPosts(newArr);
    })();
  }, [user, posts]);


  
  const handleLike = async (p) => {
    if (p.like === true) {
      await RemoveLike(p);
    }
    await SetLike(p);  
  }

  const imgStyle = {
    maxHeight: 300,
    maxWidth: 300
  }
  if (!user) return < Navigate to = { '/login'} />
  return (
    <section className="col-md-8">
        <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              What's new on NewSpace!
            </h3>
          </CardTitle>
        </CardBody>
      </Card>
      {posts.map((p) => {
        return <Card>
          <CardBody className="text-center">
            <img
              src={p.image_url}
              alt="new"
              style={imgStyle}
            />
            <CardTitle>
              <h3 className="font-weight-bold">
                <p>{p.body}</p>
              </h3>
            </CardTitle>
            <p onClick={() => handleLike(p)}>{p.like ? "❤️" : "🤍"}</p>
            <h5>Posted by: {p.posted_by}</h5> 
            <span>Posted at: {p.posted_at}</span>
          </CardBody>
        </Card>
      })}


      
    </section>
  );
}

export default Home;
//  <Row>
//   {posts.map((p) => {
//     return (
//       <Col sm={6} md={4} className='mt-3'>
//         <div className="card" style={{ width: '18rem' }}>
//           <div className="card-body">
//             <p className="card-text">{p.body}</p>
//             <img
//               src={p.image_url}
//               alt="new"
//             />
//             <a href="/" className="btn btn-primary">Click</a>
//           </div>
//         </div>
//       </Col>
//     )
//   })}
// </Row> 