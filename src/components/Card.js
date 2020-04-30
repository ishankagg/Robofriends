import React from 'react';


const Card = ({id, name, email}) => {
    return (
        <div className ='tc bg-light-green dib br3 pa4 ma2 grow bw2 shadow-5'>
            <img alt='robot' src={`https://robohash.org/${id}?150*150`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

// export default Card;

// const Card = (props) => {
//     return (
//         <div className ='tc bg-light-green dib br3 pa4 ma2 grow bw2 shadow-5'>
//             <img alt='robot' src={`https://robohash.org/${props.id}?150*150`}/>
//             <div>
//                 <h2>{props.name}</h2>
//                 <p>{props.email}</p>
//             </div>
//         </div>
//     );
// }

export default Card;