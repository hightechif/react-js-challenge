import React from 'react';
import style from '../../styles/Button.module.css';

// var notif = document.getElementsByClassName("circle");
// 
// const refreshButton = () => {
//   if (notif[0].style.visibility !== "hidden") {
//   	notif[0].style.visibility = "hidden";
//   } else {
//   	notif[0].style.visibility = "visible";
//   }
// }

function ButtonNotif() {
    return (
        <button>
            Pesan
            <div className={style.circle}></div>
        </button>
    )
}

export default ButtonNotif;