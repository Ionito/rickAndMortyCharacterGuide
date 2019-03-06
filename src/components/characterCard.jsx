import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const CharacterCard = ({title,img,created,status,species,loc}) => {
    
    const creado = new Date(created);
    console.log(creado + ' - ' + created )
    const fecha = ("0" + creado.getDate()) + '/' + ("0" + (creado.getMonth() + 1)).slice(-2) + '/' + creado.getFullYear();
    
    let statusClassName = status.toLowerCase();
    let iconStatus = (statusClassName==="dead")?'skull-crossbones':'heart';
    if(statusClassName==='unknown')iconStatus='question-circle';
    statusClassName+=" card";

 
    

    return ( 
        <article>
        <div className={statusClassName} style={{width: '18rem'}} >
            <img src={ img } className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><FontAwesomeIcon icon="user" className='icon'/>{species}</li>
                <li className="list-group-item"><FontAwesomeIcon icon='map-marker-alt' className='icon'/>{loc}</li>
                <li className="list-group-item"><FontAwesomeIcon icon={iconStatus} className='icon'/>{(status==='unknown')?"Unknown Status":status}</li>
            </ul>
            <div className="card-body metadata">
            created on
            <FontAwesomeIcon icon="caret-right" className='icon' /> {fecha}
            </div>
        </div>
        </article>
      );
}
 
export default CharacterCard