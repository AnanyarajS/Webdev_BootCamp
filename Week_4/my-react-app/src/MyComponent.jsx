import { useState } from "react";
function MyComponent(){
    const[item, setItem] = useState([]); 
   
    function addItem(name){
     
        setItem((i)=>[...i, name] );
      
    }
    function deletebutton(index){
      const updatedItems = item.filter((_,i)=>i!==index);
      setItem(updatedItems);
    }
  
    return(<>
  
    <nav>
        <div className="logo">InstantBuy</div>
        <div className="option">Home</div>
        <div className="option">Settings</div>
        <div className="option">Call Us</div>     
    </nav>
    <div className="box">
        <div className="item"> 
            <img id="football" src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Football_Pallo_valmiina-cropped.jpg" alt="" />
            <p >Football </p>
            <button className="add" onClick={()=>addItem("Football")}>Add to Cart</button>
        </div>
        <div className="item"> 
            <img id="football" src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSSTIKGKXU1h_slm7K8-FhQyF6nZbu8TsbfDYKXIWgjFfOrxGflfuIKpXDEq0rsVheOJoZc-f_MyZMwbbY9eiNt9qAVzG3mGX_aMgVtOYw8CNc2ydELmfOsVw" alt="" />
            <p>Football Studs </p>
            <button className="add" onClick={()=>addItem("Football Studs")}>Add to Cart</button>
        </div>
        <div className="item"> 
            <img id="football" src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRphOCTLXwH8bYtjEWffW6jK43lf8ZttaJPnq6w_fWif2aXCVSwEBqbsIVW8L5DbhISAHT7GcCdewjEb-bYVWWzGhiOIYx8iwBbyKu3mLfnD3ykKAMzL19R-Q" alt="" />
            <p>Goalkeeper Gloves</p>
            <button className="add"onClick={()=>addItem("Goalkeeper Gloves")}>Add to Cart</button>
        </div>
    </div>
    <div className="cart">
        <h1>CART</h1>
        <ol>
        {item.map((itemName, index)=>(
            <li key={index}>
                <span>{itemName}</span>
                <button className="b" onClick={()=>deletebutton(index)}>Delete</button>
               
     
              
                
            </li>
            
        ))}
        </ol>
         
    </div>
      
    </>);
}
export default MyComponent;