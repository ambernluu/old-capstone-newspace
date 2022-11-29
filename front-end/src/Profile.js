import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Card, CardBody, CardTitle, Button, Form } from "reactstrap";
import CreatePost from "./CreatePost";
import { GetPosts } from "./helpers/api";
import ShowUserPosts from "./ShowUserPosts";

const Profile = ({ user }) => {
  const posts = GetPosts();
  useEffect(() => {

  },[posts])
  console.log(posts)
  if (user) {
    return (
      <section className="col-md-8">
        <Card>
          <CardBody className="text-center">
            <CardTitle>
              <h3 className="font-weight-bold">
                Welcome {user}!
                <CreatePost />
                {/* <ShowUserPosts /> */}
              </h3>
            </CardTitle>
          </CardBody>
        </Card>
      </section>
    );
  }
  else return <Navigate to={'/login'} />
  
}

export default Profile;

// import { GetPosts } from './helpers/api';
// import { Col, Container, Row } from 'reactstrap';
// // Array of Data 

// //GetPosts();

// const StudentData = [
//   {
//     Name: "Waji",
//     Degree: "Bachlorrs"
//   },
//   {
//     Name: "Zain",
//     Degree: "Matric"
//   },
//   {
//     Name: "Rahat",
//     Degree: "B.Com"
//   },
//   {
//     Name: "Wajahat",
//     Degree: "Bachlorrs"
//   },
//   {
//     Name: "Sabi",
//     Degree: "Bachlorrs"
//   }

// ]

// let NewCard = () => {
//   return (
//     <Row>
//       {GetPosts.map((props) => {
//         return (
//           <Col sm={6} md={4} className='mt-3'>
//             <div className="card" style={{ width: '18rem' }}>
//               <div className="card-body">
//                 <h5 className="h5">{props.Name}</h5>
//                 <p className="card-text">{props.Degree}</p>
//                 <a href="/" className="btn btn-primary">Click</a>
//               </div>
//             </div>
//           </Col>
//         )
//       })}
//     </Row>
//   )
// }

// export default function MyCard() {
//   return (
//     <Container>
//       <NewCard
//         title=''
//         calss=''
//       />
//     </Container>
//   )
// }