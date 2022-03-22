//import React from 'react'
import React,{useState} from 'react';
import './ClickTest.css'

// export default class ClickTest extends React.Component{
//     constructor(props){
//         super(props);
        
//     }
    
   
//     render(){
//         return (
//             <div className='clickTest'>
//                 <button onClick={()=>console.log('click')}>Click!!!</button>
//                 {/* <div id='clickZone' onClick={()=>console.log('click')}><span>Please Click!!!!</span></div> */}
//             </div>
//         );
//     }

//     //var a = "aa";
// }

function ClickTest(props){

    const [number, setNumber] = useState(props.value);

    const numberPlus = () => {
        const tempNumber = number + 1;
        setNumber(tempNumber);
    }
    return (
        <div className='clickTest'>
                <span onClick={()=>numberPlus()}>👍</span>
                <span>{number}</span>
                {/* <button onClick={()=>numberPlus()}>{number}</button> */}
                {/* <div id='clickZone' onClick={()=>console.log('click')}><span>Please Click!!!!</span></div> */}
            </div>
    );
}

export default ClickTest;