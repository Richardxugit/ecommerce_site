import React from 'react';

const Thumb = props => {
    return (
        <div className={props.classes}>
            <img src={props.src} alt={props.alt} title={props.title} />
        </div>
    );
};

export default Thumb;
