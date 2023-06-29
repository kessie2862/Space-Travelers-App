import { useDispatch } from 'react-redux';
import './styles/Rocket.css';
import PropTypes from 'prop-types';
import { bookReservation, cancelReservation } from '../redux/rocket/rocketSlice';

const Rocket = ({
  id, image, name, description, reserved,
}) => {
  const dispatch = useDispatch();
  const bookReservationHandler = () => {
    dispatch(bookReservation(id));
  };
  const cancelReservationHandler = () => {
    dispatch(cancelReservation(id));
  };
  return (
    <div key={id} className="listContainer">
      <div className="imgContainer">
        <img src={image} alt="" className="rocketImg" style={{ width: '250px' }} />
      </div>
      <div className="details">
        <h2 className="rocketName">{name}</h2>
        {!reserved && (
        <>
          <p className="rocketDispription">{description}</p>
          <button type="button" className="reservationBtn" onClick={bookReservationHandler}>Reserve Rocket</button>
        </>
        )}
        {reserved && (
        <>
          <p className="rocketDispription">
            <span className="reserved">Reserved</span>
            {description}
          </p>
          <button type="button" className="cancellationBtn" onClick={cancelReservationHandler}>Cancel Reservation</button>
        </>
        )}
      </div>
    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Rocket;
