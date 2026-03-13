import { useState } from "react";

const TaskTile = ({title, priority}) => {
    return(
        <div className="Tile">
            <h4>Next Task is {title} with {priority} priority</h4>
        </div>
    )
}

const TaskManager = () => {

    const [ title, setTitle ] = useState("Enter Task Title");
    const [ priority, setPriority ] = useState("High");

    const [ taskList, setTaskList ] = useState([]);
    
    const resetForm = () => {
        setTitle("Enter Task Title");
        setPriority("High");
    }

    const submitForm = (e) => {        
        e.preventDefault();
        if(title !== "Enter Task Title" && priority !== "Select"){
            setTaskList([...taskList, {title, priority}]);
        }
        console.log(taskList);
        resetForm();
    }

    return (
        <div className="TaskManager">
            <h1>What are we doing today ?</h1>

            <form onSubmit={submitForm} onReset={resetForm}>
                <h3>Title:</h3>
                <input 
                    className="Task Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}></input>
                <h3>Priority</h3>
                <select
                    className="Task Priority"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}>
                    <option value="High"> High </option>
                    <option value="Medium"> Medium </option>
                    <option value="Low"> Low </option>
                </select>

                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
            </form>

            <div className="TaskList">
                {taskList.map((task, index) => (
                    <TaskTile key={index} title={task.title} priority={task.priority} />
                ))}
            </div>
        </div>
    );

}

export default TaskManager;