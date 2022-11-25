import React from "react";
import { Navigate } from "react-router-dom";
import { Card, CardBody, CardTitle } from "reactstrap";

const Profile = ({ user }) => {
  if (user) {
    return (
      <section className="col-md-8">
        <Card>
          <CardBody className="text-center">
            <CardTitle>
              <h3 className="font-weight-bold">
                Welcome back {user}!
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
