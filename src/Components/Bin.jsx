import React from 'react';
import { useDrop } from 'react-dnd';

const Bin = ({ binnedItems }) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "note",
    drop: () => ({ name: "The Bin" }),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));

  console.log(binnedItems);

  return (
    <div className='border h-48' ref={drop}>
      <h2 className='text-3xl text-center py-2'>Bin</h2>
      {binnedItems.map((item, index) => (
        <div key={index}>
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
}

export default Bin;
