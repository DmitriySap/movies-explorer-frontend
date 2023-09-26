import React from 'react';
import './Upward.css';

const Upward = () => {
    window.addEventListener('scroll', function() {
        let scroll = document.querySelector('.upward');
        scroll.classList.toggle('upward_active', window.scrollY>500)
    })

    return (
        <div className='upward' onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}}>

        </div>
    )
}

export default Upward;