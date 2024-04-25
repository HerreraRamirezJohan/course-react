import { useState, useEffect } from "react"

export function useCatImage({ fact }) {
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {
        if (!fact) return
        // const firstword = fact.split(' ').slice(0, 3).join(' ')
        const threeFirstWords = fact.split(' ', 3).join(' ')
        const newUrl = `https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=white`
        setImageUrl(newUrl)
    }, [fact]) //que la imagen cambie cuando el fact cambia

    return { imageUrl }
}
