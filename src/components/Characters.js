import { useState, useEffect } from 'react';
import sortArray from '../helpers/sortArray';
import { DotLoader } from "react-spinners";

const Characters = ({ characters }) => {
   
const [chars, setChars] = useState([]);

useEffect(() => {
    const promises = characters.map(url => 
        fetch(url)
        .then(res => res.json())
        .catch(err => console.log(err)));

        console.log(promises);

        async function resolveChars(){
            const data = await Promise.all(promises);
            console.log(data);

            const sorted = await sortArray(data)
            setChars(sorted);
        }
        resolveChars();

}, []);

console.log("chars state: ", chars);

return( 
    <>
    <h2 style={{
        fontFamily: 'Times New Roman',
        fontSize: "48px",
        fontWeight: 'lighter',
        color: "#F7E11E",
        display: 'flex',
        justifyContent: 'center'
    }}>Characters</h2> 
    {chars.length > 0 && (
    <div 
    style={{
        maxHeight: "40vh", 
        marginTop: "10px", 
        overflow: "auto",
        /* borderBottom: "6px solid #e1e1e1", */
    }}
    >
     {chars.map(char => <p key={char.url} style={
         {margin:"5px 0px",
         fontFamily: 'Helvetica',
         fontSize: "18px",
         fontWeight: 'lighter',
         color: "#F7E11E",
         display: 'flex',
         justifyContent: 'center',
    }
     }>
    {char.name}</p>)}   
    </div>
    )}
    {chars.length <= 0 && (
    <div 
    style={{
        height:"40vh", 
        display:"flex",
        alignItems:"center",
        justifyContent: "center",
    }}
    >
    <DotLoader size={72} color ='#F7E11E'/>
    </div>
    )}
</>
);
};

export default Characters;