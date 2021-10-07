import React from 'react';
import '../styles/SSTM.module.css';
import ButtonPrimary from '../components/Button/Default/ButtonPrimary';
import ButtonSecondary from '../components/Button/Default/ButtonSecondary';
import ButtonDisabled from '../components/Button/Default/ButtonDisabled';

function SSTMPage() {
    return (
       <div id="sstm">
           <div><ButtonPrimary/></div>
           <div><ButtonSecondary/></div>
           <div><ButtonDisabled/></div>
       </div>
    )
}

export default SSTMPage;