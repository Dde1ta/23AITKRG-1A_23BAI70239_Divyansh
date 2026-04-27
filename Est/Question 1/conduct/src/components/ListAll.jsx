import { useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchlist } from "../store/ListSlice";


const ListTile = ({number, text}) => {
    const num = number;
    const to_write = text;
    return(
        <>
            <div style={{
                display: "flex",
                flexDirection: "row"
            }}>
                <h1>{num}</h1>
                <h1>{"             "}</h1>
                <h1>{to_write}</h1>
            </div>
        </>
    )
};


const ListAll = () => {
    const dispatch = useDispatch();

    const { data, status } = useSelector((state) => state.list);

    console.log("Redering");

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchlist());
        }
    }, [status, dispatch]);

    if (status === "loading") {
        return (
        <div>
            <div>
            <p style={{ textAlign: 'center', color: '#667eea' }}>Loading 1000 element List...</p>
            </div>
        </div>
        )
    }

   return(
        <>
            <h1>Here Is Your 1000 element List</h1>
            <ListTile number={"No."} text={"This is random things"}/>

            <ul>
            {
                data.map((item) => (
                    <li key={item.number}>
                        <ListTile number={item.number} text={item.text}/>
                    </li>
                ))
            }
            </ul>
            
        </>
    )
    
  };

export default memo(ListAll);