import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const Mission = ({
  name, description, id,
}) => (
  <tr>
    <td>
      {id}
      {name}
    </td>
    <td>{description}</td>
    <td>Non-Active</td>
    <td><Button variant="outline-secondary">Join Mission</Button></td>
  </tr>
);

Mission.propTypes = {
  name: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  id: PropTypes.node.isRequired,
};

export default Mission;
