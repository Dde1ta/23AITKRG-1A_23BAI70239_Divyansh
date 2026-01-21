const Tile = (props) => {
    const name = props.act.activity;
    const carbon = props.act.carbon;
    // console.log(props.act);

    return (
        <div>
            <h3>{name}: footprint is {carbon} KG</h3>
        </div>
    );
}


export default Tile;