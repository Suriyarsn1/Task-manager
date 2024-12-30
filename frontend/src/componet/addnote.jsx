import axios from "axios"
function AddNote(props)
{
 const id1=props.id



function handledetele(id){
        console.log(id)
         axios.post("http://localhost:5000/send-id", { id });
         
    }
    return(<>
      <div
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl border-l-4 border-indigo-500 transition"
              >
                <h2 className="font-bold text-lg mb-2 text-indigo-700">
                  Task # 
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  {props.des}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium text-purple-600">
                    Due: {props.time}
                  </span>
                  <span className="text-xs font-medium text-purple-600">
                    Date: {props.date}
                  </span>
                  <button  onClick={() => handledetele(id1)} className="text-sm bg-indigo-100 text-indigo-700 py-1 px-3 rounded hover:bg-indigo-200 transition">
                    Delete
                  </button>
                </div>
              </div></>)
}export default AddNote