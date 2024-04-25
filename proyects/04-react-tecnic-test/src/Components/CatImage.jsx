import { useCatImage } from "../Hooks/CatImage";

export function CatImage({ fact = 'nothing' }) {
    const { imageUrl } = useCatImage({ fact: fact })

    return (
        <>
            {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} /> }
        </>
    )
}