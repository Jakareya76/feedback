import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

function About() {
  return (
    <Card>
      <h4>This A About Page </h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi deleniti
        explicabo ab. Totam omnis nam enim nobis. Quod ducimus tenetur nostrum
        libero doloribus, quos aut.
      </p>
    <Link to="/">Go Back</Link>
    </Card>
  );
}

export default About;
