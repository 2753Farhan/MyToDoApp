import {  useState } from "react";
import Box from "./components/box";
import Model from "./components/model";
import Mainlayout from "./layout/mainlayout"
import DeletedBox from "./components/deletedbox";
import Donebox from "./components/donebox";
 // State variable to toggle between Box and DeletedBox


// Access the navigate function from react-router-dom


function App() {
  // Access the navigate function from react-router-dom
  const [showDeletedBox, setShowDeletedBox] = useState(false);
  const [todos, setTodos] = useState([]);
  const [removedTodos, setRemovedTodos] = useState([]);
  const [showModel, setShowModel] = useState(false);
  const [doneTodos, setDoneTodos] = useState([]);
  const [showDoneBox, setShowDoneBox] = useState(false);
  const [deletedCount, setDeletedCount] = useState(0);
  const [upcomingCount, setUpcomingCount] = useState(0);


  const showDoneBoxHandler = (val) => {
    setShowDoneBox(val);
  };

  const deletedBoxHandler = (val) => {
    setShowDeletedBox(val)
  }

  const removeDeletedTodo = (id) => {
    const updatedRemovedTodos = removedTodos.filter((_, index) => index !== id);
    setRemovedTodos(updatedRemovedTodos);
    setDeletedCount((prevDeletedCount) => prevDeletedCount - 1);
  };

  const removeDoneTodo = (id) => {
    const updatedDoneTodos = doneTodos.filter((_, index) => index !== id);
    setDoneTodos(updatedDoneTodos);
    // You may want to update counts or perform other actions related to removing done todos
  };


  const removeToDo = (id) => {
    // Display a conMfirmation prompt
    const confirmed = window.confirm("Are you sure you want to delete this to-do?");

    // If user confirms, proceed with removal
    if (confirmed) {
      const removedTodo = todos.find((_, index) => index === id);
      setRemovedTodos((prevRemovedTodos) => [...prevRemovedTodos, removedTodo]);

      const newTodos = todos.filter((_, index) => index !== id);
      setTodos(newTodos);
      setDeletedCount((prevDeletedCount) => prevDeletedCount + 1);

    }
    setUpcomingCount((prevUpcomingCount) => prevUpcomingCount - 1);
  };

  const markAsDoneHandler = (id) => {
    const doneItem = todos.find((_, index) => index === id);
  
    // Add the done item to the doneTodos list
    setDoneTodos((prevDoneTodos) => [...prevDoneTodos, doneItem]);
  
    // Remove the todo from the todos list
    setTodos((prevTodos) => prevTodos.filter((_, index) => index !== id));
    setUpcomingCount((prevUpcomingCount) => prevUpcomingCount - 1);
  };
  
  
  const editToDo = (id, editedValues) => {
    setTodos((prevTodos) => {
      // Create a new array with the updated todo
      const updatedTodos = prevTodos.map((todo, index) => {
        if (index === id) {
          return {
            title: editedValues.title,
            date: editedValues.date,
            time: editedValues.time,
            note: editedValues.note,
          };
        }
        return todo;
      });

      return updatedTodos;
    });
  };

  const addToDoHandler = (item) => {
    setTodos([
      ...todos,
      {
        title: item[0],
        date: item[1],
        time: item[2],
        note: item[3],
      },
    ]);
    setUpcomingCount((prevUpcomingCount) => prevUpcomingCount + 1);

  };

  const handleOnClose = () => setShowModel(false);
  
console.log(doneTodos)
  return (
    <>
          <Mainlayout deletedboxhandler={deletedBoxHandler} showdoneboxHandler={showDoneBoxHandler} deletecount={deletedCount} upcomingcount={upcomingCount}>
        {showDeletedBox ?(
            <p className=" text-slate-500 text-3 mx-3">Deleted Todos:</p>
          ):(
            showDoneBox ? (
              <p className=" text-slate-500 text-3 mx-3">Completed Todos:</p>
            ):(
            <button className="text-2xl mx-2 px-2 py-2 rounded-lg bg-slate-500 text-white" onClick={() => setShowModel(true)}>
            Add task
          </button>
            )
          )}

        <Model onClose={handleOnClose} visible={showModel} handler={addToDoHandler} />
        {showDeletedBox ? (
          <DeletedBox data={removedTodos} removeHandler={removeDeletedTodo} />
        ) : (
          showDoneBox ? (
            <Donebox data={doneTodos} removeHandler={removeDoneTodo}/>
          )
          :(
          <Box data={todos} donetodoHandler={markAsDoneHandler} removeHandler={removeToDo} editHandler={editToDo} />
          )
        )}

      </Mainlayout>
    </>
    
  );
}

export default App;




// import React, { useState } from 'react';
// import Box from './components/box';
// import Model from './components/model';
// import Mainlayout from './layout/mainlayout';
// import DeletedBox from './components/deletedbox';

// function App() {
//   const [showDeletedBox, setShowDeletedBox] = useState(false);
//   const [showDoneBox, setShowDoneBox] = useState(false);
//   const [todos, setTodos] = useState([]);
//   const [doneItems, setDoneItems] = useState([]);
//   const [removedTodos, setRemovedTodos] = useState([]);
//   const [showModel, setShowModel] = useState(false);

//   const deletedBoxHandler = (val) => {
//     setShowDeletedBox(val);
//   };

//   const showDoneBoxHandler = () => {
//     setShowDoneBox(!showDoneBox);
//   };

//   const removeToDo = (id) => {
//     const confirmed = window.confirm('Are you sure you want to delete this to-do?');
//     if (confirmed) {
//       const removedTodo = todos.find((_, index) => index === id);
//       setRemovedTodos((prevRemovedTodos) => [...prevRemovedTodos, removedTodo]);

//       const newTodos = todos.filter((_, index) => index !== id);
//       setTodos(newTodos);
//     }
//   };

//   const editToDo = (id, editedValues) => {
//     setTodos((prevTodos) => {
//       const updatedTodos = prevTodos.map((todo, index) => {
//         if (index === id) {
//           return {
//             title: editedValues.title,
//             date: editedValues.date,
//             time: editedValues.time,
//             note: editedValues.note,
//           };
//         }
//         return todo;
//       });
//       return updatedTodos;
//     });
//   };

//   const addToDoHandler = (item) => {
//     setTodos([
//       ...todos,
//       {
//         title: item[0],
//         date: item[1],
//         time: item[2],
//         note: item[3],
//       },
//     ]);
//   };

//   const markAsDoneHandler = (id) => {
//     const doneItem = todos.find((_, index) => index === id);
//     setDoneItems((prevDoneItems) => [...prevDoneItems, doneItem]);
//     setTodos((prevTodos) => prevTodos.filter((_, index) => index !== id));
//   };

//   const markAsUndoneHandler = (id) => {
//     const undoneItem = doneItems.find((_, index) => index === id);
//     setTodos((prevTodos) => [...prevTodos, undoneItem]);
//     setDoneItems((prevDoneItems) => prevDoneItems.filter((_, index) => index !== id));
//   };

//   const handleOnClose = () => setShowModel(false);

//   return (
//     <>
//       <Mainlayout deletedboxhandler={deletedBoxHandler}>
//         {showDeletedBox ? (
//           <p className='text-slate-500 text-3xl mx-3'>Deleted Todos:</p>
//         ) : (
//           <button
//             className='text-2xl mx-2 px-2 py-2 rounded-lg bg-slate-500 text-white'
//             onClick={() => setShowModel(true)}
//           >
//             Add task
//           </button>
//         )}

//         <button className='text-2xl mx-2 px-2 py-2 rounded-lg bg-slate-500 text-white' onClick={showDoneBoxHandler}>
//           {showDoneBox ? 'Hide Done' : 'Show Done'}
//         </button>

//         <Model onClose={handleOnClose} visible={showModel} handler={addToDoHandler} />
//         {showDeletedBox ? (
//           <DeletedBox data={removedTodos} />
//         ) : (
//           <>
//             <Box
//               data={todos}
//               removeHandler={removeToDo}
//               editHandler={editToDo}
//               markAsDoneHandler={markAsDoneHandler}
//               markAsUndoneHandler={markAsUndoneHandler}
//             />
//             {showDoneBox && (
//               <div>
//                 <p className='text-slate-500 text-3xl mx-3'>Done Todos:</p>
//                 <Box data={doneItems} removeHandler={() => {}} editHandler={() => {}} />
//               </div>
//             )}
//           </>
//         )}
//       </Mainlayout>
//     </>
//   );
// }

// export default App;
