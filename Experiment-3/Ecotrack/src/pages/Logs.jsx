import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogs } from "../stores/logsSlice";
import Tile from "../components/Title";

const Logs = () => {
    const dispatch = useDispatch();

    const {data, status, error} = useSelector((state) => state.logs);

    const HandelRefresh = () => {
        dispatch(fetchLogs());
    }

    useEffect( () => {
        if (status === "idle"){
            dispatch(fetchLogs());
        }
    }, [status, dispatch]);

    if (status === "pending"){
        return <p>Loading Logs ......</p>
    }

    if (status === "failed"){
        return <p>Error: {error}</p>
    }

    return (
        <div>
            <h3>Daily Logs (Redux)</h3>
            <ul>
                {
                    data.map((log) => (
                        <li key={log.id}>
                            {log.activity} - {log.carbon} kg CO2; 
                        </li>
                    ))
                }
            </ul>
            <button onClick={HandelRefresh}>
                Refresh.
            </button>
        </div>
    )
}

export default Logs;