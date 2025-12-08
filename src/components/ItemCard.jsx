import { useEffect, useState } from 'react'
import '../materialize.min.css'
import { Outlet } from 'react-router-dom'

function ItemCard() {

    const [item,setItems]=useState([]);
    useEffect(()=>{
        const fetchItems = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/items");
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                // Parse the response body as JSON
                const data = await response.json();
                //console.log(data[0].name);
                setItems(data);
            }
            catch(error){
                console.log(error.message);
            }
        };
        fetchItems();
    },[]);
  return (
    <div>
      <div className="row">
          <div className="col s12 m6">
              <div className="card">
                  <div className="card-image">
                      <img src="../../public/sample-1.jpg"/>{/*image here has a close /> */}
                          <span className="card-title">{item[0]?.name}</span>
                          <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
                  </div>
                  <div className="card-content">
                      <p>{item[0]?.quantity}</p>
                  </div>
              </div>
          </div>
      </div>
      <Outlet/>
      </div>
  )
}

export default ItemCard
