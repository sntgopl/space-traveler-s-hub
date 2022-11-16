import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import '../stylesheets/Rocket.css';

const Rocket = ({
  name, img, description,
}) => (
  <div className="rocket">
    <img src={img} alt="rocket" />
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <Button variant="primary">Reserve Rocket</Button>
    </div>
  </div>
);

export default Rocket;

Rocket.propTypes = {
  name: PropTypes.node.isRequired,
  img: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
};
