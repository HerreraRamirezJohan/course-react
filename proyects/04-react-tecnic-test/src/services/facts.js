const CAT_ENDPOINT_RAMDOM_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {

    const result = await fetch(CAT_ENDPOINT_RAMDOM_FACT);
    const data = await result.json();
    const { fact } = data;
    return fact;
}