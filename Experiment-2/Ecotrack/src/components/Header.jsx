

const Header = (props) => {
    const title = props.title;
    return(
        <header style={
            {
            padding: "1rem",
            backgroundColor: "#6495ed",
            color: "wheat",
            textAlign: "center"
            }
        }>
            <h1>{title}</h1>
        </header>
    );
}


export default Header;
