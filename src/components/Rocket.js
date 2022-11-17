import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../redux/rockets/rockets';
import '../stylesheets/Rocket.css';

const Rocket = ({
  id, name, img, description,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="rocket">
      <img src={img} alt="rocket" />
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <Button onClick={() => dispatch(reserveRocket(id))} variant="primary">Reserve Rocket</Button>
      </div>
    </div>
  );
};

export default Rocket;

Rocket.propTypes = {
  id: PropTypes.node.isRequired,
  name: PropTypes.node.isRequired,
  img: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
};
