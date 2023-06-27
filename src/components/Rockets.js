import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux/es/hooks/useSelector';
import { fetchRockets } from '../redux/rocket/rocketSlice';
import Rocket from './Rocket';

function Rockets() {
  // const rocketItems = useSelector((state) => state.rocket.Rockets);
  const dispatch = useDispatch();
  // console.log(rocketItems);
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);
  return (
    <div className="container">
      <Rocket />
      <Rocket />
      <Rocket />
    </div>
  );
}

export default Rockets;
