import React, { useState } from 'react'
import { useOutletContext, Link } from 'react-router'
import Loader from '../components/Loader';
import { IoDocumentText } from 'react-icons/io5';
import { IoEllipsisHorizontal } from 'react-icons/io5';
const NotesPage = () => {
    const {notes, setNotes, loading} = useOutletContext();
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
        };
    
    const [openNoteId, setOpenNoteId] = useState(null);
    const toggleOptions = (id)=> { 
    setOpenNoteId(prevId=> prevId === id ? null : id);
    };
  return (
    <div className="p-6 scrollbar-thin">
      <Link to="/notes/add">
                    <button className='w-full p-1 bg-[#5577FF4D] transition-all duration-300 hover:scale-97 text-[#5577FF] text-[16px] rounded-lg hover:cursor-pointer'>+ Add Note</button>
                  </Link>
        <section className="mt-5 grid gap-3">
            {loading ? (<Loader/>) : (
            notes.map((note)=>(
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

              <Link to={`/notes/edit-note/${note.id}`}  className="mt-2 flex flex-col gap-1 pr-2 px-4">
                <h1 className='font-[600] text-sm'>
                  {note.title}
                </h1>
                <p className="text-[#999999] text-xs">
                 {note.content}
                </p>
                <section className="flex items-center gap-1 mt-1">
                  <p className={`${note.secondTag == '' ? 'hidden' : ''} text-[#FD71AF] text-xs font-[600] px-2.5 py-1 bg-[#FD71AF4D] rounded-full`}>{note.firstTag}</p>
                  <p className={`${note.secondTag == '' ? 'hidden' : ''} text-[#00B884] text-xs font-[600] px-2.5 py-1 bg-[#00B8844D] rounded-full`}>{note.secondTag}</p>
                  <p className={`text-[#49CCF9] text-xs font-[600] px-2.5 py-1 bg-[#49CCF94D] rounded-full ${note.thirdTag == '' ? 'hidden' : ''}`} >{note.thirdTag}</p>
                </section>

              </Link>
          </figure>
            ))
          )}

        </section>
      
    </div>
  )
}

export default NotesPage
