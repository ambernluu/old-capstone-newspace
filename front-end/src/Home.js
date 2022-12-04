import React, { useEffect, useState } from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import { Navigate } from 'react-router';
import { GetPosts } from "./helpers/api";

const Home = ({user}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const postRes = await GetPosts();
      setPosts(postRes);
    })();
  }, []);
  const imgStyle = {
    maxHeight: 300,
    maxWidth: 300
  }
  if (!user) return < Navigate to = { '/login'} />
  return (
    <section className="col-md-8">
      {/* <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              <a href="/posts/new" className="btn btn-secondary">Add new post</a>
            </h3>
          </CardTitle>
        </CardBody>
      </Card> */}
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