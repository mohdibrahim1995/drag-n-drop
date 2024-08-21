import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import Note from './Components/Note';
import Bin from './Components/Bin';
import { useEffect, useState } from 'react';

function App() {
  const [notes, setNotes] = useState([]); // Initialize with an empty array
  const [binnedItems, setBinnedItems] = useState([]); // Initialize with an empty array

  useEffect(() => {
    const initialNotes = ["Note 1", "Note 2", "Note 3"];
    localStorage.setItem("noteList", JSON.stringify(initialNotes));

    const storedNotes = localStorage.getItem("noteList");
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes)); // Parse and set notes from localStorage
    }
  }, []);

  useEffect(()=>{
    let array =localStorage.getItem("BiinedItems");
    if(array){
      setBinnedItems(JSON.parse(array))
      for(let i=0; i<notes.length;i++){
        for(let j=0; j<binnedItems.length; j++){
          if(notes[i]=== binnedItems[j]){
            notes.splice(i,1)
          }
        }
      }
    }

  },[notes])

  return (
    <DndProvider backend={HTML5Backend}>
      
   <h1 className='text-3xl text-center font-semibold mt-5'>Drag and Drop</h1>
   {notes.map((item,index) => (
        <Note TestName="IBrahim"           
          key={index }  // Using the index as the key temporarily
          note={item}
          binnedItems={binnedItems}
        />
      ))}

      <Bin  binnedItems={binnedItems}/>
    </DndProvider>
  );
}

export default App;
