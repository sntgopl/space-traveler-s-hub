import PropTypes from 'prop-types';
import { Button, Badge } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/missions';

const Mission = ({
  name, description, id, reserved,
}) => {
  const dispatch = useDispatch();
  return (
    <tbody>
      <tr>
        <td>
          {name}
        </td>
        <td>{description}</td>
        <td>
          {!reserved && (
            <Badge bg="secondary">NOT A MEMBER</Badge>
          )}
          {reserved && (
            <Badge bg="primary">Active Member</Badge>
          )}
        </td>
        <td>
          {!reserved && (
            <Button
              onClick={() => dispatch(joinMission(id))}
              variant="outline-secondary"
            >
              Join Mission
            </Button>
          )}
          {reserved && (
            <Button
              onClick={() => dispatch(leaveMission(id))}
              variant="outline-danger"
            >
              Leave Mission
            </Button>
          )}

        </td>
      </tr>
    </tbody>

  );
};

Mission.propTypes = {
  name: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  id: PropTypes.node.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Mission;
