import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import '../stylesheets/Profile.css';

const Profile = () => {
  const missions = useSelector((state) => state.mission);
  const resultMissions = missions.filter((mission) => mission.reserved);
  const rockets = useSelector((state) => state.rocket);
  const resultRockets = rockets.filter((rocket) => rocket.reserved);
  return (
    <div className="profile">
      <Table bordered>
        <h2>My Missions</h2>
        <tbody>
          {resultMissions.map((mission) => (<tr key={mission.id}>{mission.name}</tr>))}
        </tbody>
      </Table>
      <Table bordered>
        <h2>My Rockets</h2>
        <tbody>
          {resultRockets.map((rocket) => (<tr key={rocket.id}>{rocket.name}</tr>))}
        </tbody>
      </Table>
    </div>
  );
};

export default Profile;
