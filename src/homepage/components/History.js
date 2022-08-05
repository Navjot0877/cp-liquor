import React, { useEffect,useState } from 'react';
import './History.css'

const History = () =>{

    const[loadItems, setLoadItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:9005/test/capstones')
        .then(response => response.json())
        .then(data => {
            setLoadItems(data);
        })
    },[])

    
    const item = [];

   
    const length = loadItems.length;

    for(let i = 0; i < length; i++){
        if(i < 3){
            item.push(loadItems[i]);
        }
    }
    
    console.log(item);

    return(
        <>
        <div className='history'>
            <h4>Order Based on History</h4>
            <div className='history-items'>
            {item.map((items) => (
               <div className='history-item'>
                <figure><img src={items.productUrl} alt="" /></figure>
                <div className='back-design'>
                    <p>{items.productName}</p>
                    <p className=''>{items.productPrice}</p>
                </div>
                </div> 
            ))}
            
            </div>
        </div>
        </>
    ) 
    
}
export default History;
