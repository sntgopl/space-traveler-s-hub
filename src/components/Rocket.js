import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelRocket } from '../redux/rockets/rockets';
import '../stylesheets/Rocket.css';

const Rocket = ({
  id, name, img, description, reserved,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="rocket">
      <img src={img} alt="rocket" />
      <div>
        <h2>{name}</h2>
        {reserved && (
          <div>Reserve</div>
        )}
        <p>{description}</p>
        {!reserved && (
          <Button onClick={() => dispatch(reserveRocket(id))} variant="primary">Reserve Rocket</Button>
        )}
        {reserved && (
          <Button onClick={() => dispatch(cancelRocket(id))} variant="outline-danger">Cancel Reservation</Button>
        )}
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
  reserved: PropTypes.bool.isRequired,
};
