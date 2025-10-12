import { useState } from "react";
import './Modal.css'


function Modal(){
    let [open, setOpen] = useState(false);

    let image ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl8aVeOQFvCUUTJlxZU1_cLNL1ectw5KUCmRt1Y3s4JaP7gl59dEI_wD0mYKBpwe2iQ4p-aBQ7d-WX9UUc-JmMxuAxxs6x5I2_AE5CKNN1"

    return(
        <div>
            <img src={image} className="small" alt="" onClick={() => setOpen(true)} style={{display: open ? "none" : "block"}} />
            
            {open && (<div>
                <div>
                    <img src={image} className="big" alt=""  onClick={() => setOpen(false)} />
                </div>
            </div>)}
            
        </div>
    )
}

export default Modal;