import RecycledItemForm from "./RecycledItemForm";
import { useState } from 'react';

function RecycledItems({deleteThatItem, edit, item}) {

    const [edditToggle, setEditToggle] = useState(false); 
    
    return (
        <div className = 'item'>
            { !edditToggle ?

                <>
                    <h1>Name: <span className = 'not-bold'>{item.name}</span></h1>
                    <span className = 'make-bold'>Desc:</span>{item.desc}
                    <span className = 'make-bold'> | </span>
                    <span className = 'make-bold'> Quantity: </span>
                    <span>{item.quantity}</span>
                    <span className = 'make-bold'> | </span>
                    <span className = 'make-bold'> PPU: </span>
                    <span>{item.ppu}</span>
                    <br></br>
                    <button 
                        onClick = {() => deleteThatItem(item._id)} 
                        className = 'delete'>
                        Delete
                    </button>

                    <button 
                        onClick = {() => setEditToggle((prevToggle) => !prevToggle)}
                        className = 'edit'>
                        Edit
                    </button>

                </>

                :
                <>
                    <RecycledItemForm 
                        name = {item.name}
                        desc = {item.desc}
                        id = {item._id}
                        btnText = 'Submit Edit'
                        add = {edit}/>
                        <button
                            onClick = {() => setEditToggle((prevToggle) => !prevToggle)}
                            className = 'close-btn'>
                            Confirm
                        </button>
                </>
            }
        </div>
    );
}

export default RecycledItems;