// import { useEffect } from 'react';
// import { Col, Container, Row } from 'reactstrap';
// import { GetPosts } from './helpers/api';
// // Array of Data 

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
//   useEffect(() => {
//     async function showPosts() {
//       return await GetPosts();
//     } showPosts();
//   })
//   return (
//     <Row>
//       {StudentData.map((props) => {
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