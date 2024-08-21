import React from 'react'
import { useDrag } from 'react-dnd';

const Note = ({note,TestName,binnedItems}) => {
const [{isDragging},drag]= useDrag(()=>({
type: "note",
item:{name:note},
end:(item,mointor)=>{
  const dropResult=mointor.getDropResult()
  if(item && dropResult){
    alert(`you Threw ${item.name} into ${dropResult.name}`)
    
    let tempList=binnedItems;
    tempList.push(item.name);
    //console.log(tempList)
    
    localStorage.setItem("BinnedItems", JSON.stringify(tempList));
   // console.log(localStorage)
    
  }
},
collect: (mointor)=>({
isDragging: !!mointor.isDragging(),
})
}),[])

  return ( 
        <>
       
          <div ref={drag}>
            {note} 
          </div>

        
        </>
        );
}

export default Note