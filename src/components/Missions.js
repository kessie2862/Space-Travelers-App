import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setMissions,
  joinMission,
  leaveMission,
} from '../redux/missions/missionSlice';
import './styles/Missions.css';

function Missions() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.mission.missions);

  useEffect(() => {
    const fetchMissions = async () => {
      try {
        const response = await fetch('https://api.spacexdata.com/v3/missions');
        const data = await response.json();
        dispatch(setMissions(data));
      } catch (error) {
        console.error('Error fetching missions:', error);
      }
    };

    fetchMissions();
  }, [dispatch]);

  const handleJoinMission = (missionId) => {
    dispatch(joinMission(missionId));
  };

  const handleLeaveMission = (missionId) => {
    dispatch(leaveMission(missionId));
  };

  return (
    <div className="table-container">
      <table className="missions-table">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th rowSpan="3">Status</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td className="missions-title">{mission.mission_name}</td>
              <td className="missions-description">{mission.description}</td>
              <td>
                <div className="status-container">
                  <span
                    className={`status ${mission.reserved ? 'active' : ''}`}
                    style={{
                      backgroundColor: mission.reserved ? '#0290ff' : 'grey',
                    }}
                  >
                    {mission.reserved ? 'ACTIVE MEMBER' : 'NOT A MEMBER'}
                  </span>
                </div>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => (mission.reserved
                    ? handleLeaveMission(mission.mission_id)
                    : handleJoinMission(mission.mission_id))}
                  className={`join-button ${mission.reserved ? 'active' : ''}`}
                  style={{
                    border: mission.reserved
                      ? '2px solid red'
                      : '2px solid grey',
                    background: 'transparent',
                    color: mission.reserved ? 'red' : 'grey',
                  }}
                >
                  {mission.reserved ? 'Leave Mission' : 'Join Mission'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Missions;
