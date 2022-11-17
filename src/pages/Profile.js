import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import '../stylesheets/Profile.css';

const Profile = () => {
  const missions = useSelector((state) => state.mission);
  const rockets = useSelector((state) => state.rocket);
  return (
    <div className="profile">
      <Table bordered>
        <h2>My Missions</h2>
        <tbody>
          {missions.map((mission) => {
            if (mission.reserved) {
              return (<tr key={mission.id}>{mission.name}</tr>);
            }
            return false;
          })}
        </tbody>
      </Table>
      <Table bordered>
        <h2>My Rockets</h2>
        <tbody>
          {rockets.map((rocket) => {
            if (rocket.reserved) {
              return (<tr key={rocket.id}>{rocket.name}</tr>);
            }
            return false;
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Profile;
