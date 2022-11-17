import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRocket } from '../redux/rockets/rockets';
import Rocket from './Rocket';

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
        <Rocket
          key={rocket.id}
          id={rocket.id}
          name={rocket.name}
          type={rocket.type}
          img={rocket.image}
          description={rocket.description}
          reserved={rocket.reserved}
        />
      ))}
    </>
  );
};

export default RocketsContainer;
