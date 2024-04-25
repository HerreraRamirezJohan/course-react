import { useState, useEffect } from "react"
import { getRandomFact } from "../services/facts";

export function useFactCat() {
    const [fact, setFact] = useState()

    const refreshFact = () => {
        getRandomFact().then(newFact => setFact(newFact))
    }

    useEffect(refreshFact, [])//Nos aseguramos que por el momento solo se ejecute una vez

    return {fact, refreshFact}
}