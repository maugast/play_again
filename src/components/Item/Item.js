import './_item.scss';

//Components
import ItemCartCount from '../ItemCartCount/ItemCartCount';
import {Link} from 'react-router-dom';

const Item = ({id,title, image ,price,stock})=> {
    

    const onAdd = (quantity)=>{
        console.log(quantity);
      }

    return (
        <div className='card'>
            <h2>{title}</h2>
            <Link to={`/productos/${id}`}><img src={image} alt='Consola'/></Link>
            <p>Precio: ${price}</p>
            <ItemCartCount
                stock={stock}
                initial={1}
                counter={onAdd}
            />

        </div>
    )
}

export default Item