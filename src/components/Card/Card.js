import './_card.scss';
import ItemCartCount from '../ItemCartCount/ItemCartCount';

export default function Card ({title, pic ,price}) {
    
    return (
        <div className='card'>
            <h2>{title}</h2>
            <img src={pic} alt='Consola'/>
            <p>Precio: ${price}</p>
            <ItemCartCount
                stock={5}
                initial={1}
            />

        </div>
    )
}