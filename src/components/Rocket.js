import './styles/Rocket.css';
import PropTypes from 'prop-types';

const Rocket = ({
  id, image, name, description,
}) => (
  <div key={id} className="listContainer">
    <div className="imgContainer">
      <img src={image} alt="" className="rocketImg" style={{ width: '250px' }} />
    </div>
    <div className="details">
      <h2 className="rocketName">{name}</h2>
      <p className="rocketDispription">{description}</p>
      <button type="button" className="reservationBtn">Reserve Rocket</button>
    </div>
  </div>
);

Rocket.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Rocket;
