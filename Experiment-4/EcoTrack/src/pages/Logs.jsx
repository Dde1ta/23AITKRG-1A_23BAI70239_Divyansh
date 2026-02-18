import { useEffect, useMemo, useCallback, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogs } from "../store/logSlice";

const Logs = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.logs);

  const handleRefresh = useCallback(() => {
    dispatch(fetchLogs());
  }, [dispatch]);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchLogs());
    }
  }, [status, dispatch]);

  const totalCarbon = useMemo(() => {
    return data.reduce((acc, log) => acc + log.carbon, 0);
  }, [data]);

  if (status === "loading") {
    return (
      <div className="container">
        <div className="logs-container">
          <p style={{ textAlign: 'center', color: '#667eea' }}>Loading Logs...</p>
        </div>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="container">
        <div className="logs-container">
          <p style={{ textAlign: 'center', color: '#e74c3c' }}>Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="logs-container">
        <h1 className="logs-title">Activity Logs</h1>

        <div className="total-carbon">
          Total Carbon Footprint: {totalCarbon} kg CO2
        </div>

        <ul className="logs-list">
          {data.map((log) => (
            <li key={log.id} className="log-item">
              <span className="log-activity">{log.activity}</span>
              {" - "}
              <span className="log-carbon">{log.carbon} kg CO2</span>
            </li>
          ))}
        </ul>

        <button className="refresh-btn" onClick={handleRefresh}>
          Refresh Logs
        </button>
      </div>
    </div>
  );
};

export default memo(Logs);
