import React from 'react';
import Item from '../Item/Item';
import { useState } from 'react';
import { useEffect } from 'react';



const ItemList = ()=>{

    const mockConsoles = [
        {id: 1,
        title: "Atari 2600",
        image: '',
        price: 26000
        },
        {id: 2,
        title: "Nintendo Game Boy",
        image: '../Images/gameboy.png',
        price: 15000
        },
        {id: 3,
        title: "Sega Genesis",
        image: '../Images/genesis.png',
        price: 32000
        },
        {id: 4,
        title: "Atari Jaguar",
        image: '../Images/mastersystem.png',
        price: 52000
        },
        {id: 5,
        title: "Sega Master System",
        image: '../Images/mastersystem.png',
        price: 22000
        },
        {id: 6,
        title: "Nintendo NES",
        image: '../Images/nes.png',
        price: 20000
        },
        {id: 7,
        title: "Panasonic 3DO",
        image: '../Images/panasonic.png',
        price: 36000
        },
        {id: 8,
        title: "Super Nintendo",
        image: '../Images/snes.png',
        price: 42000
        },
    ]


    const [consoles , setConsoles] = useState([])

    const getConsoles = ()=>{
        return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          return resolve(mockConsoles)
        },2000);
        })
    }


    useEffect(()=>{
        getConsoles().then((mockConsoles)=>{
            setConsoles(mockConsoles);
        })
    },[])


    return(
        <div className='card-grid'>
            {
            consoles.map((console)=>{
                return <Item
                        key= {console.id}
                        title= {console.title}
                        image= {console.image}
                        price= {console.price}
                        />
            })
                }    
        </div>
    )
}

export default ItemList