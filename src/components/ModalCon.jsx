import React, { useState,useContext } from 'react';
import Modal from './Modal';
import ThemeContext from '../contexts/ThemeContext';

function ModalCon() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalVal,setModalVal]= useState("0");
  var items=[{name:"First",num:5},{name:"Second",num:12},{name:"Third",num:25},{name:"Forth",num:57}];
  function runModal(val){
    setModalVal(val);
    setIsModalOpen(true);
  }

  const { theme, toggleTheme } = useContext(ThemeContext);
    const conStyle = {
    background: theme === 'dark' ? '#333' : '#FFF',
    color: theme === 'dark' ? '#FFF' : '#333',
    padding: '10px 20px',
    border: '1px solid #ccc',
    cursor: 'pointer'
  };

  return (
    // <div className="App">
    //   <h1>My Application</h1>
    //   <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      
    //   <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
    //     <h2>Modal Title</h2>
    //     <p>This content is rendered in a portal!</p>
    //   </Modal>
    // </div>
    <div style={conStyle}>
        <button className="waves-effect waves-light btn"  onClick={toggleTheme}>
                Toggle Theme (Currently {theme})
            </button>
        <div className="row">
        {items.map((item)=>{ return( 
          <div className="col s12 m6" key={item.name}>
              <div className="card">
                <p>{item.name}</p>
                  <div className="card-image">
                      <img src="../../public/sample-1.jpg"/>{/*image here has a close /> */}
                  </div>
                  <div className="card-content">
                      <p>{item.num}</p>
                      <button className="waves-effect waves-light btn" onClick={()=>runModal(item.num)}>Open Modal</button>
                      {/* not to have an error use callbact with on click as you use setsate in the function */}
                </div>
              </div>
          </div>
      )})}
      </div>
       <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} modalVal={modalVal}>
         <h2>Modal Title</h2>
         <p>This content is rendered in a portal!</p>
       </Modal>
      </div>
  );
}

export default ModalCon;