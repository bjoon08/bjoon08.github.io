import React from 'react'
import "./modal.css"
import resume from "./resumeSS.png";
import BJresume from "./Brandon_Jang_Resume.pdf";

export const Modal = ({ setOpenModal }) => {
    return (
        <div className='modalBackground'>
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                    >
                        X
                    </button>
                </div>
                <div className="title">
                    <h1>Please click "Download" to view!</h1>
                </div>
                <br />
                <div className="body">
                    <img src={resume} alt=""></img>
                </div>
                <br />
                <div className="footer">
                    <a href={BJresume} download="Joon Hyuk's Resume">
                        <button>Download</button>
                    </a>
                    <button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                        id="cancelBtn"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}
