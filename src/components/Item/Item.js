import './_item.scss';
import ItemCartCount from '../ItemCartCount/ItemCartCount';

export default function Card ({title, image ,price}) {
    
    const onAdd = (quantity)=>{
        console.log(quantity);
      }

    return (
        <div className='card'>
            <h2>{title}</h2>
            <img src={image} alt='Consola'/>
            <p>Precio: ${price}</p>
            <ItemCartCount
                stock={5}
                initial={1}
                counter={onAdd}
            />

        </div>
    )
}