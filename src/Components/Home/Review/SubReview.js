import React from 'react';

const SubReview = (props) => {
    console.log(props)
    const {img, name, title, content} = props.datum;
    return (
        <main className="sub-services p-4">
            <section style={{display: 'flex', justifyContent: 'space-between'}}>
                <img src={img} style={{borderRadius: '50%', width: '22%'}} alt=""/>
                <div>
                    <h4>{name}</h4>
                    <h6>{title}</h6>
                </div>
            </section>

            <section>
             <div style={{textAlign: 'justify'}}>
                 <p>{content}</p>
             </div>

             <h5 style={{color: 'yellow'}}><i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i></h5>
            </section>
        </main>
    );
};

export default SubReview;