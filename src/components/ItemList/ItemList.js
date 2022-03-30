import React from 'react';
import Item from '../Item/Item';
import { useState, useEffect } from 'react';
import Atari from '../../Images/atari2600.png';
import GameBoy from '../../Images/gameboy.png';
import Genesis from '../../Images/genesis.png';
import Jaguar from '../../Images/jaguar.png';
import MasterSystem from '../../Images/mastersystem.png';
import Nes from '../../Images/nes.png';
import Panasonic from '../../Images/panasonic.png';
import Snes from '../../Images/snes.png';

const ItemList = ()=>{

    const mockConsoles = [
        {id: 1,
        title: "Atari 2600",
        image: Atari,
        price: 26000
        },
        {id: 2,
        title: "Nintendo Game Boy",
        image: GameBoy,
        price: 15000
        },
        {id: 3,
        title: "Sega Genesis",
        image: Genesis,
        price: 32000
        },
        {id: 4,
        title: "Atari Jaguar",
        image: Jaguar,
        price: 52000
        },
        {id: 5,
        title: "Sega Master System",
        image: MasterSystem,
        price: 22000
        },
        {id: 6,
        title: "Nintendo NES",
        image: Nes,
        price: 20000
        },
        {id: 7,
        title: "Panasonic 3DO",
        image: Panasonic,
        price: 36000
        },
        {id: 8,
        title: "Super Nintendo",
        image: Snes,
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