import React from "react";
import { Card } from "react-bootstrap";
import nur from "../../../src/images/nuruddin.jpg";

const About = () => {
  return (
    <div className="mt-2">
      <Card className="p-3 mx-auto" style={{ width: "18rem" }}>
        <Card.Img className="" variant="top" src={nur} />
        <Card.Body className="text-center">
          <Card.Title>Nur Uddin</Card.Title>
          <Card.Text>
            I am passionate, energetic, responsible applicant and susceptible to
            work freely with initiative and as individual as well as in team. I
            will trying to have problem identificaton and solving skills and
            also have good organizational and commucative skills. I haven't
            proper command in English but I'm trying to best. Consequently
            highly movtivated eager to learn new things. As much as hardship, I
            want to be a professional web developer. So, I keep trying to hark
            work every day and night.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default About;
