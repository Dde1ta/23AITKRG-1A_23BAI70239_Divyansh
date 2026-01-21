import logs from "../data/logs"
import Tile from "../components/Title";

const Logs = () => {
    const log = logs;

    const highCarbon = log.filter((curr) => {return curr.carbon >= 4});

    const tiles = [];

    console.log("hehhe");

    highCarbon.forEach(element => {
        tiles.push(<Tile key={element.id} act={element}/>);
    });

    return (
    <>
        <h1>High Carbon Activity</h1>
        <>{tiles}</>
    </>);
}

export default Logs;