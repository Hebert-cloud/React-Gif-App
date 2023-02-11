import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpApp = () => {
    
    const [ categories, setCategories ] = useState([ 'Fire' ]);
    
    const onAddCategory = (onNewCategory) => {

        if( !categories.includes(onNewCategory)){
            setCategories([onNewCategory, ...categories])
        }
    }

    return(
        <>
            {/*Titulo*/}
            <h1>Gif Expert App</h1>

            {/*Input*/}
            <AddCategory 
                //setCategories={ setCategories } 
                onNewCategory={ (value) => onAddCategory(value) }
            />

            {/*Lista*/}
            {/*<button onClick={onAddCategory}>Agregar</button>*/}
            {categories.map( category => (<GifGrid key={ category } category={ category } />))}
            
            {/*Gif Items*/}
        </>
    )
}


