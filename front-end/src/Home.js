import React, { useEffect, useState } from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import { Navigate } from 'react-router';
import { GetPosts, GetLikes, SetLike} from "./helpers/api";
//import Heart from "react-animated-heart";

const Home = ({user}) => {
  const [posts, setPosts] = useState([]);
  const [isClick, setClick] = useState(false);

  useEffect(() => {
    (async () => {
      const postRes = await GetPosts();
      const likes = await userLikes();
      console.log(likes)
      const newArr = postRes.map(obj => {
        for (let i = 0; i < likes.likes.length; i++) {
          if (obj.id === likes.likes[i].post_id) {
            obj.like = true;
          }
        }
        return obj;
      });
      console.log({newArr})
      setPosts(newArr);
    })();
  }, []);

  const userLikes = async () => {
    return await GetLikes(user);
    //console.log("likes ", likes);
    //console.log(posts);
  }
  
  const handleLike = async (p) => {
    await SetLike(p.post_id)
    //console.log("p ", p.like);
    // if (p.like === true) p.like = false;
    

    console.log(posts)
    //here do the opposite thing like => !like
    

    
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
        console.log(posts)
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