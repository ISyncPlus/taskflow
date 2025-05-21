import React, { useState, useEffect } from 'react'
import { useOutletContext } from 'react-router'
import { useParams, useNavigate } from 'react-router';
const EditNotePage = () => {
    const { setNotes } = useOutletContext();
    const { id } = useParams();
    const navigate = useNavigate();

    const [note, setNote] = useState(null);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [firstTag, setFirstTag] = useState('');
    const [secondTag, setSecondTag] = useState('');
    const [thirdTag, setThirdTag] = useState('');

    useEffect(() => {
        const fetchNote = async () => {
        const res = await fetch(`https://mock-todos-back-1.onrender.com/notes/${id}`);
        if(res.ok){
        const data = await res.json();
        setNote(data);
        } 
    };

  fetchNote();
}, [id]);

    useEffect(()=>{
        if(note){
            setTitle(note.title);
            setContent(note.content);
            setFirstTag(note.firstTag);
            setSecondTag(note.secondTag);
            setThirdTag(note.thirdTag);
        }
    }, [note]);

    const submitEdit = async (e) => {
        e.preventDefault();

        const editedNote = {
            id,
            title,
            content,
            firstTag,
            secondTag,
            thirdTag
        };

            const res = await fetch(`https://mock-todos-back-1.onrender.com/notes/${editedNote.id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
                body: JSON.stringify(editedNote)
            });

            if (res.ok){
                const edited = await res.json();
                setNotes((prev) =>
                prev.map((note) => (String(note.id) === String(id) ? edited : note))
            )};

       



        navigate('/notes'); 


    }
  return (
    <div className="bg-[#F9F8FF] w-full h-screen p-6 scrollbar-thin 2xl:h-full flex justify-center items-center">

        <form key={id} onSubmit={submitEdit} className="bg-white border border-[#E6E4F0] py-5 px-10 rounded-lg w-[80%] mx-auto">
            <header className='text-2xl text-center font-[500] mb-5'>
                Edit Note
            </header>
            <section>
                <label htmlFor="title" className="text-md font-medium text-slate-800">Note Title</label>
                <input type="text" name="title" id="title" value={title} placeholder="e.g Complete Sidebar Component" onChange={(e)=>{setTitle(e.target.value)}} className="block border border-[#E6E4F0] rounded-lg shadow-sm px-3 py-2  w-full mt-2 mb-3" required aria-required/>

                {/* Content */}
                <label htmlFor="content" className="">Note</label>
                <textarea value={content} onChange={(e)=>{setContent(e.target.value)}} name="content" id="content" cols="50" rows="5" className="block px-3 py-2 mb-2 border border-[#E6E4F0] rounded-lg shadow-sm"></textarea>

                {/* Tag 1 */}
                <label htmlFor="firstTag" className='text-md font-medium text-slate-800'>Tag 1</label>
                <select name="firstTag" id="firstTag" value={firstTag} onChange={(e)=>{setFirstTag(e.target.value)}} className="block border border-[#E6E4F0] rounded-lg shadow-sm px-3 py-2 w-full mt-2 mb-3">
                    <option value="" disabled hidden>Select a Tag</option>
                    <option value="Sport">Sport</option>
                    <option value="Tech">Tech</option>
                    <option value="Learning">Learning</option>
                    <option value="Self improvement">Self improvement</option>
                    <option value="Profitable">Profitable</option>
                    <option value="1 Person">1 Person</option>
                    <option value="AI">AI</option>
                    <option value="Other">Other</option>
                </select>

                {/* Tag 2 */}
                <label htmlFor="secondTag" className='text-md font-medium text-slate-800'>Tag 2</label>
                <select name="secondTag" id="secondTag" value={secondTag} onChange={(e)=>{setSecondTag(e.target.value)}} className="block border border-[#E6E4F0] rounded-lg shadow-sm px-3 py-2  w-full mt-2 mb-3">
               
                    <option value="" disabled hidden>Select a Tag</option>
                    <option value="Sport">Sport</option>
                    <option value="Tech">Tech</option>
                    <option value="Learning">Learning</option>
                    <option value="Self improvement">Self improvement</option>
                    <option value="Profitable">Profitable</option>
                    <option value="1 Person">1 Person</option>
                    <option value="AI">AI</option>
                    <option value="Other">Other</option>
                </select>

                {/* Tag 3 */}
                <label htmlFor="thirdTag" className='text-md font-medium text-slate-800'>Tag 3</label>
                <select name="thirdTag" id="thirdTag" value={thirdTag} onChange={(e)=>{setThirdTag(e.target.value)}} className="block border border-[#E6E4F0] rounded-lg shadow-sm px-3 py-2  w-full mt-2 mb-3">
               
                    <option value="" disabled hidden>Select a Tag</option>
                    <option value="Sport">Sport</option>
                    <option value="Tech">Tech</option>
                    <option value="Learning">Learning</option>
                    <option value="Self improvement">Self improvement</option>
                    <option value="Profitable">Profitable</option>
                    <option value="1 Person">1 Person</option>
                    <option value="AI">AI</option>
                    <option value="Other">Other</option>
                </select>

            </section>

            <button type="submit" className="py-1 px-3 border rounded-lg w-full bg-red-600  text-white mt-2 transition-colors duration-300 hover:cursor-pointer hover:bg-red-700 active:bg-red-600">Edit</button>

        </form>
       
      
    </div>
  )
}

export default EditNotePage
