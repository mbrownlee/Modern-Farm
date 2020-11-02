let allPlants = []

export const addPlant = (seed) => {
    if (Array.isArray(seed)) {
        allPlants = allPlants.concat(seed)
    } else {
        allPlants.push(seed)
    }
}

export const usePlants = () => {
    return allPlants
}

