import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import '../stylesheets/Profile.css';
import ListItem from '../components/ProfileList';

const Profile = () => {
  const missions = useSelector((state) => state.mission);
  const resultMissions = missions.filter((mission) => mission.reserved).map((mission) => (
    <ListItem key={mission.id} id={mission.id} name={mission.name} />
  ));
  const rockets = useSelector((state) => state.rocket);
  const resultRockets = rockets.filter((rocket) => rocket.reserved).map((rocket) => (
    <ListItem key={rocket.id} id={rocket.id} name={rocket.name} />
  ));
  return (
    <div className="profile">
      <Table bordered>
        <thead>
          <tr>
            <th>My Missions</th>
          </tr>
        </thead>
        <tbody>
          {resultMissions}
        </tbody>
      </Table>
      <Table bordered>
        <thead>
          <tr>
            <th>My Rockets</th>
          </tr>
        </thead>
        <tbody>
          {resultRockets}
        </tbody>
      </Table>
    </div>
  );
};

export default Profile;
