import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () =>{

    // const categories = ['One punch','Samurai x','Dragon Ball'];
    const [categories, setCategories] = useState(['One punch']);

    // const handleAdd = () =>{
        // ['One Piece',...categories] ponerlo primero
        // setCategoreies(cats => [...cats,'One Piece']);
    //       setCategories([...categories,'One Piece']);
    // }



    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr/>


            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                        key={category}
                        category={category}/>
                    ))
                }
            </ol>
        </>
    );


}

