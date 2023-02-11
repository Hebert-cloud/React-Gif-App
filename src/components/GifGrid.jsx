import { useFetchGifs } from "../../Hooks/useFetchGifs";
import GifItems from "./GifItems";

export const GifGrid = ({ category }) => {   

    const { images, isLoading } = useFetchGifs( category );

    return(
        <>
            <h3>{ category }</h3>
            {
                isLoading && (<h2>cargando...</h2>)
            }
            <div className="card-grid">
                {
                    images.map( (img) => (
                        <GifItems key={img.id} 
                            { ...img }
                        />
                    ))
                }
            </div>
        </>
    )
}
