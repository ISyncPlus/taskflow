import React, {useState} from 'react'
import { IoDocumentText } from "react-icons/io5";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { Link } from 'react-router';
import { toast } from 'react-toastify';
import Loader from './Loader';
import { MdDeleteForever } from "react-icons/md";

const RightMenu = ({ todos, setTodos, notes, setNotes, loading }) => {
  const [openNoteId, setOpenNoteId] = useState(null);

  const toggleOptions = (id)=> { 
    setOpenNoteId(prevId=> prevId === id ? null : id);
  };

  const toggleChecked = (id) => {
    setTodos(prev =>
      prev.map(todo => 
        todo.id == id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

    // const deleteTask = async (id)=> {
    //   const confirm = window.confirm('Are you sure?');
    //   if (!confirm) return;
    //   const res = await fetch(`https://mock-todos-back-1.onrender.com/todos/${id}`,{
    //     method: 'DELETE'
    //   });
      
    //   if(res.ok){
    //     setTodos(prev => prev.filter(todo => todo.id != id));
    //   }
    //     toast.error('Task Deleted');
    // };

    const deleteNote = async (id)=> {
      const confirm = window.confirm('Are you sure you want to delete this?');
      if (!confirm) return;
      const res = await fetch(`https://mock-todos-back-1.onrender.com/notes/${id}`,{
        method: 'DELETE'
      });
      
      if(res.ok){
        setNotes(prev => prev.filter(note => note.id != id));
      }
        toast.error('Note Deleted');
    }

    const isSide = true;

    const recentTodos = isSide ? todos.slice(0, 3) : todos;
    const recentNotes = isSide ? notes.slice(0, 3) : notes;

  return (
    <div>
      <aside className="border-l-1 border-[#E6E4F0] pt-7.5 pb-4 pl-4 pr-3 scrollbar-thin 2xl:h-full">

        <header className="flex justify-between items-center border-b border-[#E6E4F0] pb-2">
          <section className="flex items-center">
            <img src="/Category.svg" alt="Overview" className='w-5.5 h-5.5 mr-1 text-[#56555C]' />
            <Link to="/todos" className="underline underline-offset-2 text-[#56555C] font-medium text-[1rem] hover:cursor-pointer transition-opacity duration-200 hover:opacity-80">
              Todos
            </Link>

          </section>
          {/* <Link to="/todos/add">
          <img src="/Add.svg" alt="add-more" className="w-4 h-4 hover:cursor-pointer hover:scale-110 transition-all duration-500" />
          </Link> */}
          
        </header>

        <article className="flex flex-col gap-1 mt-3.5 mb-4">
          {/* Lists jsx*/}
          {loading ? 
          ( <Loader /> ) : (
              recentTodos.map((todo)=> (
                <section
                key={todo.id}
                className="py-3 px-2.5 border border-[#E6E4F0] rounded-xl bg-[#F9F8FF]">
                <h1 className="flex items-center">
                  <input type="checkbox" name="list" onClick={()=> toggleChecked(todo.id)}    className="hover:cursor-pointer" />
                  <p className={`font-medium relative ml-2 text-sm after:content-[''] after:absolute after:h-[0.5px] after:bg-[#5577FFCC] after:top-1/2 after:w-full after:transition-all after:duration-400 after:left-0 ${todo.checked ? 'after:scale-x-100 text-[#5577FFCC]' : 'after:scale-x-0 text-black'} `}>
                    {todo.title}
                  </p>
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
            ))            
          )}
          <p className={`${todos.length > 3 ? '' : 'hidden'}  text-right mt-1`}>
          <Link to="/todos" className="text-xs text-blue-500  transition-opacity duration-200 hover:opacity-85 ">See more...</Link>
          </p>
        </article>
        
        {/* Notes */}

        <article>
          <header className="flex items-center justify-between border-b border-[#E6E4F0] pb-2 mb-4">
            <div className='flex items-center'>
              <img src="/notes.svg" alt="notes-icon" className="w-5.5 h-5.5 mr-1" />
              <Link to="/notes" className="text-[#56555C] font-medium underline underline-offset-2 ">Notes</Link>
            </div>
        
            {/* <Link to="/notes/add">
          <img src="/Add.svg" alt="add-more" className="w-4 h-4 hover:cursor-pointer hover:scale-110 transition-all duration-500" />
          </Link> */}
          
          </header>

          {/* Note 1 */}
          {loading ? (<Loader/>) : (
            recentNotes.map((note)=>(
              <figure key={note.id} className="py-3 border border-[#E6E4F0] bg-white shadow-md rounded-xl mb-3 relative">
              <section className="flex items-center justify-between px-4">
                <h1 className='flex gap-1 items-center'>
                  <IoDocumentText className='fill-[#85848b]' />
                  <p className="text-[#A3A3A3] text-xs">May 14, 2025</p>
                </h1>

                <IoEllipsisHorizontal onClick={ () => toggleOptions(note.id)}  className="fill-[#56555C] hover:cursor-pointer" />
                <section className={`absolute top-8 right-5 border border-[#E6E4F0] rounded-xl shadow-md pl-2 pr-9 py-3 text-xs text-[#5d5c5c] flex flex-col gap-3 bg-white transition-transform duration-100 ${openNoteId === note.id ? 'scale-100 origin-top-right' : 'scale-0 origin-top-right'}`}>
                  <Link to={`/notes/edit-note/${note.id}`} className="transition-opacity duration-300 hover:opacity-70">Edit</Link>
                  <Link onClick={ () => deleteNote(note.id)} className="transition-colors duration-300 text-red-500 hover:text-red-600">Delete</Link>

                </section>
              </section>

              <section className="mt-2 flex flex-col gap-1 pr-2 px-4">
                <Link to={`/notes/edit-note/${note.id}`} className='font-[600] text-sm'>
                  {note.title}
                </Link>
                <p className="text-[#999999] text-xs">
                 {note.content.substring(0, 100) + '...'}
                </p>
                <section className="flex items-center gap-1 mt-1">
                  <p className={`${note.secondTag == '' ? 'hidden' : ''} text-[#FD71AF] text-xs font-[600] px-2.5 py-1 bg-[#FD71AF4D] rounded-full`}>{note.firstTag}</p>
                  <p className={`${note.secondTag == '' ? 'hidden' : ''} text-[#00B884] text-xs font-[600] px-2.5 py-1 bg-[#00B8844D] rounded-full`}>{note.secondTag}</p>
                  <p className={`text-[#49CCF9] text-xs font-[600] px-2.5 py-1 bg-[#49CCF94D] rounded-full ${note.thirdTag == '' ? 'hidden' : ''}`} >{note.thirdTag}</p>
                </section>

              </section>
          </figure>
            ))
          )}
          <p className={`${notes.length > 3 ? '' : 'hidden'}  text-center`}>
          <Link to="/notes" className="text-xs text-blue-500  transition-opacity duration-200 hover:opacity-85 ">See more...</Link>
          </p>

        </article>

      </aside>

    </div>
  )
}

export default RightMenu
