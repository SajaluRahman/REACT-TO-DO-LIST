import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const [toDos, setToDos] = useState([]); 
  const [completedItems, setCompletedItems] = useState([]); 
  const [deletedItems, setDeletedItems] = useState([]);
  const [toDo, setToDo] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-teal-600 text-white">
      
      <header className="bg-teal-800 fixed w-full z-10 shadow-md">
        <div className="container mx-auto p-4 flex justify-between items-center">
          
          <h1 className="text-2xl font-bold">OnTrack</h1>

          
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Contact</a>
          </nav>

          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>

        
        {isMenuOpen && (
          <nav className="md:hidden bg-teal-700">
            <ul className="space-y-2 p-4 text-center">
              <li><a href="#" className="block hover:underline">Home</a></li>
              <li><a href="#" className="block hover:underline">About</a></li>
              <li><a href="#" className="block hover:underline">Contact</a></li>
            </ul>
          </nav>
        )}
      </header>

     
      <main className="flex-grow  pt-20">
        <div className="container mx-auto p-4">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6 ">
           
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-gray-800">Stay Organized</h2>
              <p className="text-gray-600">
                Manage your tasks effectively and stay productive!
              </p>
            </div>

          
            <div className="input mt-4 flex items-center">
              <input
                value={toDo}
                onChange={(e) => setToDo(e.target.value)}
                type="text"
                placeholder="🖊️ Add a new task..."
                className="flex-1 text-black p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
              <button
                onClick={() => {
                  if (toDo.trim()) {
                    setToDos([...toDos, { id: Date.now(), text: toDo }]);
                    setToDo("");
                  }
                }}
                className="ml-2 bg-teal-700 text-white p-2 rounded-lg hover:bg-teal-800"
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>

           
            <div className="todos mt-6 space-y-3">
              <h3 className="text-xl font-semibold text-gray-800">Tasks</h3>
              {toDos.length === 0 && (
                <p className="text-center text-gray-600">No tasks yet. Start adding some!</p>
              )}
              {toDos.map((obj) => (
                <div
                  key={obj.id}
                  className="flex items-center justify-between bg-gray-100 p-3 rounded-lg shadow-sm"
                >
                  <div className="flex items-center">
                    <input
                      onChange={(e) => {
                        if (e.target.checked) {
                          setCompletedItems([...completedItems, obj]);
                          setToDos(toDos.filter((todo) => todo.id !== obj.id));
                        }
                      }}
                      type="checkbox"
                      className="mr-2 h-5 w-5 text-teal-500 focus:ring-teal-400"
                    />
                    <p className="text-gray-700">{obj.text}</p>
                  </div>
                  <button
                    onClick={() => {
                      setDeletedItems([...deletedItems, obj]); 
                      setToDos(toDos.filter((todo) => todo.id !== obj.id));
                    }}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                </div>
              ))}
            </div>

            
            {completedItems.length > 0 && (
              <div className="completed-todos mt-8">
                <h3 className="text-xl font-semibold text-gray-800">Completed Tasks</h3>
                <div className="space-y-3">
                  {completedItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between bg-green-100 p-3 rounded-lg shadow-sm"
                    >
                      <p className="text-gray-700 line-through">{item.text}</p>
                      <button
                    onClick={() => {
                      setDeletedItems([...deletedItems, item]); 
                      setCompletedItems(completedItems.filter((completed) => completed.id !== item.id));
                    }}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            
            {deletedItems.length > 0 && (
              <div className="deleted-todos mt-8">
                <h3 className="text-xl font-semibold text-gray-800">Deleted Items</h3>
                <div className="space-y-3">
                  {deletedItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between bg-red-100 p-3 rounded-lg shadow-sm"
                    >
                      <p className="text-gray-700">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      
      <footer className="bg-teal-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 OnTrack. All rights reserved.</p>
          <nav className="mt-2">
            <a href="#" className="hover:underline mx-2">Privacy Policy</a>
            <a href="#" className="hover:underline mx-2">Terms of Service</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default Home;
