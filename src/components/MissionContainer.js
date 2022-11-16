import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMission } from '../redux/missions/missions';

const MissionContainer = () => {
  const missions = useSelector((state) => state.mission);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!missions.length) {
      dispatch(getMission());
    }
  }, [dispatch, missions.length]);
  return (
    <>
      {missions.map((mission) => (
        <p key={mission.id}>
          {mission.name}
          {mission.description}
        </p>
      ))}
    </>
  );
};

export default MissionContainer;
