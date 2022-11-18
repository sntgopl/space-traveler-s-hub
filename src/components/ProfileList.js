import PropTypes from 'prop-types';

const ListItem = ({
  name,
  id,
}) => (
  <tr>
    <td>
      {id}
      :
      {' '}
      {name}
    </td>
  </tr>
);

ListItem.propTypes = {
  name: PropTypes.node.isRequired,
  id: PropTypes.node.isRequired,
};

export default ListItem;
