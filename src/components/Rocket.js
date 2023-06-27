import './styles/Rocket.css';

const Rocket = () => (
  <li>
    <div className="imgContainer">
      <img src="Rocket.png" alt="" className="rocketImg" />
    </div>
    <div className="details">
      <h2 className="rocketName">Name</h2>
      <p className="rocketDispription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, animi. Impedit ipsam deleniti dolores, totam in pariatur voluptates suscipit nisi ducimus? Libero eligendi iure deserunt harum non obcaecati accusantium tempora.</p>
      <button type="button" className="reservationBtn">Reserve Rocket</button>
    </div>
  </li>
);

export default Rocket;
