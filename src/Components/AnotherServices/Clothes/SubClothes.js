import React from 'react';
import { useHistory } from 'react-router';

const SubClothes = (props) => {
    // console.log(props)
    const {name, _id, imageURL} = props.cloth
    const history = useHistory();

   const handleClothClick = (dynamicParameter) => {
    //    console.log('clicked')
       history.push(`/cloth/${dynamicParameter}`)

   }


    return (
        <main onClick={() => {handleClothClick(_id)}} className='sub-services'>
            <div className="card" style={{display: 'flex', justifyContent: 'space-between'}}>
            <img src={imageURL} className="img-thumbnail rounded" alt=""/>
            <div>
                    <h5>Price: ${name?.price}</h5>
            </div>
             </div>
           
        </main>
    );
};

export default SubClothes;