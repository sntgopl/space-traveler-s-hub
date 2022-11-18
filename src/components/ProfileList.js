import PropTypes from 'prop-types';

const ListItem = ({
  name,
}) => (
  <tr>
    <td>
      {' '}
      {name}
    </td>
  </tr>
);

ListItem.propTypes = {
  name: PropTypes.node.isRequired,
};

export default ListItem;
