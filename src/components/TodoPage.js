import React, {useState, useEffect} from 'react';
import TodoList from './TodoList';

const getLocalData = () => {
  const list = localStorage.getItem("todoList");
  if(list){
    return JSON.parse(list);
  }else{
    return []
  }
}


function TodoPage() {

    const [inputList, setInputList] = useState("");
    const [item, setItem] = useState(getLocalData);
  
    useEffect(() => {
      localStorage.setItem("todoList", JSON.stringify(item))
    }, [item])

    function todoTask(event) {
      setInputList(event.target.value)
    };
  
    function submitTask(){
      if(inputList===""){
        return alert("Enter a todo")
      }
      setItem((prevData) => {
        return [...prevData, inputList];
      })
      setInputList("");
    };

    function removeTodo(id) {
       setItem((prevData) => {
           return prevData.filter((task, index) => {
               return index !== id;
           })
       })
    }

    function preventDefault(e) {
      e.preventDefault()
    };
  
    return (
     <>
     <div className="main"> 
       <div className="todo-card">
        <h1>Todo List</h1>
        <div className='todo-card-inside'>
            <form onClick={preventDefault}>
            <input type="text" placeholder="Add a todo" value={inputList} onChange={todoTask} />
            <button onClick={submitTask}>Add</button>
            </form>
          <ol>
            {
              item.map((data, index) => {
               return < TodoList 
               passedData={data} 
               key={index} 
               id={index}
                onSelect={removeTodo}
                />
              })
            }
          </ol>
        </div>
        </div>
     </div>
     </>
    );
  }

export default TodoPage;