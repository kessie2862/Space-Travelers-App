import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { fetchRockets } from '../redux/rocket/rocketSlice';
import Rocket from './Rocket';

function Rockets() {
  const rocketItems = useSelector((state) => state.rocket.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);
  return (
    <div className="container">
      {rocketItems.map((rocket) => (
        <Rocket
          key={rocket.id}
          id={rocket.id}
          image={rocket.image}
          name={rocket.rocket_name}
          description={rocket.description}
        />
      ))}
    </div>
  );
}

export default Rockets;
