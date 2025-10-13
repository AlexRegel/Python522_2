function Task(props) {
    let { task, doneTask, undoneTask, index, deleteTask } = props;

    return (
        <div className="task" style={{ textDecoration: task.done ? 'line-through' : '' }}>
            {task.text}
            <div>
                <button onClick={task.done ? () => undoneTask(index) : () => doneTask(index)}>Done/Undone</button>
                <button style={{marginLeft: '10px', fontSize: 16}} onClick={() => deleteTask(index)}>X</button>
            </div>
        </div>
    )
}

export default Task;