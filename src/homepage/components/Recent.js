import React, { useEffect,useState } from 'react';
import './Recent.css';

const Recent = () =>{

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

    for(let i = 1; i < length; i++){
        if(i < 4){
            item.push(loadItems[i]);
        }
    }

    return(
        <>
        <div className='recent'>
            <h4>Recently Ordered</h4>
            <div className='recent-items'>
            {item.map((items) => (
               <div className='recent-item'>
                <figure><img src={items.productUrl} alt="" /></figure>
                <div className='back-design'>
                    <p>{items.productName}</p>
                </div>
                </div> 
            ))}
            
            </div>
        </div>
        </>
    )
}
export default Recent;