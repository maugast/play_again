import './_item.scss';
import ItemCartCount from '../ItemCartCount/ItemCartCount';

export default function Item ({title, image ,price}) {
    
    const onAdd = (quantity)=>{
        console.log(quantity);
      }

    

    return (
        <div className='card'>
            <h2>{title}</h2>
            <img onClick={()=>{console.log('Click!')}} src={image} alt='Consola'/>
            <p>Precio: ${price}</p>
            <ItemCartCount
                stock={5}
                initial={1}
                counter={onAdd}
            />

        </div>
    )
}