import Table from 'react-bootstrap/Table';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMission } from '../redux/missions/missions';
import Mission from './Mission';

const MissionContainer = () => {
  const missions = useSelector((state) => state.mission);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!missions.length) {
      dispatch(getMission());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th>Function</th>
        </tr>
      </thead>
      {missions.map((mission) => (
        <Mission
          key={mission.id}
          id={mission.id}
          name={mission.name}
          description={mission.description}
          reserved={mission.reserved}
        />
      ))}
    </Table>
  );
};

export default MissionContainer;
