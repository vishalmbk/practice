import { useState } from "react";

const DailyTask = () => {

    const [activity, setActivity] = useState("");

    const [listData, setListData] = useState([])

    const addActivity = () => {
        setListData([...listData, activity]);
        setActivity('');
    }

    const clearTask = (i) => {
        const updatedTask = listData.filter((elem, id) => {
            return i !== id;
        })
        setListData(updatedTask);
    }
    const clearTaskList = () => {
        setListData([]);
    }
    return (
        <>
            <div>this is daily task note</div>
            <input type="text" placeholder="Add Task" value={activity} onChange={(e) => setActivity(e.target.value)} />
            <button onClick={addActivity}>Add</button>
            <p>Here is your tasks</p>
            {listData !== [] && listData.map((list, i) => {
                return (
                    <>
                        <p key={i}><div>{list}</div>
                            <button onClick={() => clearTask(i)}>Clear task</button>
                        </p>

                    </>
                )
            })}
            <div>
                {listData.length >= 1 && <button onClick={clearTaskList}>Clear All</button>}
            </div>
        </>
    )
}
export default DailyTask;