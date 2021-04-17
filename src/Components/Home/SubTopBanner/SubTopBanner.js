import React from 'react';

const SubTopBanner = (props) => {
    const {name, imageURL, _id} = props.datum;
    return (
        <div>
        <div style={{padding: '20px'}}>
            <h2>This is subTop banner</h2>
          <img src={imageURL} alt="img" className="img-fluid rounded" style={{width: '100%'}}/>
         <h2 style={{color: 'white'}}>{name?.name}</h2>
        </div>
        </div>
    );
};

export default SubTopBanner;