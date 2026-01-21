import logs from "../data/logs"
import Tile from "../components/Title";

const Dashboard = () => {
    const log = logs;

    const total = log.reduce( (acc, curr) => {
        acc += curr.carbon;
        return acc;
    }, 0)

    const tiles = [];

    logs.forEach(element => {
        tiles.push(<Tile key={element.id} act={element}/>);
    });
    

    return (
        <div>
            <h1>Total Carbon Footprint is {total} kg CO2</h1>

            <div>
                {tiles}
            </div>
        </div>
    );
}

export default Dashboard;