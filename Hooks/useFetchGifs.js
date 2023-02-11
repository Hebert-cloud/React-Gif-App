import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImgages = async () => {
        const newImages = await getGif( category );
        setImages(newImages);
        setIsLoading(false)
    }

    useEffect(() => {

        getImgages();

    }, [])

    return {
        images,
        isLoading
    }
}
