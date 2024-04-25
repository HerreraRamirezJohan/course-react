import { useEffect, useState } from "react"
import "./index.css";
import { useCatImage } from "./Hooks/CatImage";
import { useFactCat } from "./Hooks/useFactCat";
import { CatImage } from "./Components/CatImage";

export function App() {

    const { fact, refreshFact } = useFactCat()
    const { imageUrl } = useCatImage({ fact })

    const handleClick = async () => {
        refreshFact()
    }
    return (
        <main>
            <h1>App de gatitos</h1>
            <button onClick={handleClick}>Get new Fact</button>
            {fact && <p>{fact}</p>} {/* renderizado condicional */}
            {imageUrl &&
                <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />
            }
        </main>
    )
}