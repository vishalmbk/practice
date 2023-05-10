import React, { useState } from 'react'

const ToDoList = () => {
    const [activity, setActivity] = useState('');

    const [listData, setListData] = useState([]);

    const addActivity = () => {
        // setListData([...listData, activity]);
        // console.log(listData);

        setListData((listData) => {
            const updatedList = [...listData, activity];
            console.log(updatedList);
            setActivity('');
            return updatedList;
        })
    }
    const removeActivity = (i) => {
        const updatedListData = listData.filter((elem, id) => {
            return i !== id;
        })
        setListData(updatedListData)
    }
    const clearTask = () => {
        setListData([])
    }
    return (
        <>
            <div >
                <div >TODO LIST</div>
                <input type='text' value={activity} onChange={(e) => setActivity(e.target.value)} />
                <button onClick={addActivity}>Add</button>
                <p>Here is your List :{')'}</p>
                {listData !== [] && listData.map((data, i) => {
                    return (
                        <>
                            <p key={i}>
                                <div>{data}</div>
                                <button onClick={() => removeActivity(i)}>Remove(-)</button>
                            </p>
                        </>
                    )
                })}
                {listData.length >= 1 && <button onClick={clearTask}>Clear Task</button>}
            </div>
        </>
    )
}

export default ToDoList