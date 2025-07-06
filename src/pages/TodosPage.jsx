import React from 'react'
import { useOutletContext, Link } from 'react-router'
import { MdDeleteForever } from 'react-icons/md';
import Loader from '../components/Loader';
import { toast } from 'react-toastify';
const TodosPage = () => {
  const {todos, setTodos, loading} = useOutletContext();
  const deleteTask = async (id)=> {
        const confirm = window.confirm('Are you sure?');
        if (!confirm) return;
        const res = await fetch(`https://mock-todos-back-1.onrender.com/todos/${id}`,{
          method: 'DELETE'
        });
        
        if(res.ok){
          setTodos(prev => prev.filter(todo => todo.id != id));
        }
          toast.error('Task Deleted');
      };

  
  return (
    <div className=" p-6">
      <div>
            {/* <img src="/public/Add.svg" alt="add todos" className="" /> */}
            <Link to="/todos/add">
              <button className='w-full p-1 bg-[#5577FF4D] transition-all duration-300 hover:scale-97 text-[#5577FF] text-[16px] rounded-lg hover:cursor-pointer'>+ Add Todo</button>
            </Link>
            
          </div>
        <section className="grid gap-3 mt-5">
            {loading ? (<Loader/>) : (todos.map((todo)=>(
                <section
                                key={todo.id}
                                className="py-3 px-2.5 border border-[#E6E4F0] rounded-xl bg-[#F9F8FF]">
                                <h1 className="flex items-center">
                                  <input type="checkbox" name="list" onClick={()=> toggleChecked(todo.id)}    className="hover:cursor-pointer" />
                                  <p className={`font-medium relative ml-2 text-sm after:content-[''] after:absolute after:h-[0.5px] after:bg-[#5577FFCC] after:top-1/2 after:w-full after:transition-all after:duration-400 after:left-0 ${todo.checked ? 'after:scale-x-100 text-[#5577FFCC]' : 'after:scale-x-0 text-black'} `}>
                                    {todo.title}
                                  </p>
                
                                  {/* delete button */}
                                  <MdDeleteForever onClick={ ()=> deleteTask(todo.id) } className='ml-auto fill-red-600 transition-transform duration-200 h-4.5 w-4.5 hover:cursor-pointer hover:scale-90'/>
                                </h1>
                    
                                <figure className="flex justify-between items-center">
                                  <section className="mt-2">
                                    <button className="text-[#5577FF] text-xs bg-[#5577FF4D] py-1 px-2.5 rounded-full font-[600]">{todo.firstTag}</button>
                                    <button className={`text-[#00B884] text-xs bg-[#00B88433] py-1 px-2.5 rounded-full ml-1 font-[600] ${todo.secondTag == '' ? 'hidden' : ''}`}>{todo.secondTag}</button>
                    
                                  </section>
                    
                                  <section className="text-[#BBBABE] text-xs">
                                    May 20, 2025
                                  </section>
                    
                                </figure>
                    
                    
                              </section>
            )))}
        </section>
      
    </div>
  )
}

export default TodosPage
