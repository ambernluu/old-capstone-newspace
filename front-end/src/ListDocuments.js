import React, { useState, useEffect } from "react";

// import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

const ListDocuments = () => {
  
  const [documents, setDocuments] = useState({});

  useEffect(() => {
    async function getDocuments() {
      let res = await OnTaskApi.getDocuments();
      console.log('what is res?: ', res)
      setDocuments(res);
    }
    getDocuments();
  }, []);

  //console.log({ documents });

  return (
    <section className="col-md-12">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
          <h1>My Documents</h1>
          </CardTitle>
          <CardText>
            Just some cool text
          </CardText>
          {/* <ListGroup>
            {items.map(item => (
              <Link to={`/${link}/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup> */}
        </CardBody>
      </Card>
    </section>
  );
}

export default ListDocuments;
