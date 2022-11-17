import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
//import SearchForm from "./SearchForm"
//import ListDocuments from "./ListDocuments";

function Home() {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
             NewSpace!
            </h3>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
