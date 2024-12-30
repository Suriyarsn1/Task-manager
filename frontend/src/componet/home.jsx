import { useEffect, useState } from "react";
import AddNote from "./addnote";
import axios from "axios"


function Home()


{
  
  const [isOpen, setIsOpen] = useState(false);
  const [newnote,setnewnote]=useState()
  const [newtime,setTime]=useState()
  const [newdate,setDate]=useState()
  const [addnote,setnote]=useState([])

  useEffect(function(){
  axios.get("http://localhost:5000/retdata").then(function(data){
    console.log(data.data)
    setnote(data.data)
  })

},[])
 
  function handleadd()
  {
    axios.post("http://localhost:5000/addtask",{newtask:newnote,date:newdate,time:newtime})
    if (newnote && newdate && newtime) {
      const newTask={ id:Date.now(),des:newnote,date:newdate,time:newtime}
      setnote([...addnote,newTask]);
      setnewnote("");
      setDate("");
      setTime("");
    } else {
      alert("Please fill in all fields!");
    }
  }


  


  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  


    return (<>  <div> <div className="flex h-screen bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-100">
        {/* Sidebar */}
        <aside className="w-64 bg-gradient-to-b from-purple-600 to-indigo-600 text-white flex flex-col">
          <div className="p-4 text-center font-extrabold text-2xl">Task Manager</div>
          <nav className="flex-1">
            <ul className="space-y-2 p-4">
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 rounded-md bg-purple-500 hover:bg-purple-400 transition"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 rounded-md hover:bg-purple-500 transition"
                >
                  My Tasks
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 rounded-md hover:bg-purple-500 transition"
                >
                  Teams
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 rounded-md hover:bg-purple-500 transition"
                >
                  Settings
                </a>
              </li>
            </ul>
          </nav>
          <div className="p-4 text-sm text-center text-gray-200">
            © 2024 Task Manager
          </div>
        </aside>
  
        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Header */}
          <header className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-extrabold text-indigo-700">
              Dashboard
            </h1>
            <button onClick={openModal} className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-2 px-4 rounded-md shadow-lg hover:shadow-xl transition">
              Add Task
            </button>
          </header>
  
          {/* Task List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           
            {/* Task Card */}
            
            {
            addnote.map((e, index) => (
            <AddNote key={index} des={e.task} time={e.time} date={e.date} id={e._id} ></AddNote>
            
            ))}
          

           
          </div>
        </main>
      </div>

      <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Button to Open Popup */}
     

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-96"
            onClick={(e) => e.stopPropagation()} // Prevent click on the modal itself from closing it
          >
            <h2 className="text-xl font-bold mb-4">ADD Task</h2>
            <h1>Discription</h1>
              <textarea onChange={(e)=>setnewnote(e.target.value)} value={newnote} className="border outline-double m-2 w-[300px] p-2" placeholder="Enter your note" ></textarea>
              <div className="flex m-2 border justify-around">
                <input onChange={(e)=>setDate(e.target.value)}   type="date" />
                <input onChange={(e)=>setTime(e.target.value)}  type="time"/>
              </div>
            <div className="flex justify-around">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Close
              </button>
              <button onClick={handleadd}
                
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
 



    </div>     
</>)
}export default Home