import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRocket } from '../redux/rockets/rockets';

const RocketsContainer = () => {
  const rockets = useSelector((state) => state.rocket);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!rockets.length) {
      dispatch(getRocket());
    }
  }, [dispatch, rockets.length]);
  return (
    <>
      {rockets.map((rocket) => (
        <p key={rocket.id}>{rocket.name}</p>
      ))}
    </>
  );
};

export default RocketsContainer;
