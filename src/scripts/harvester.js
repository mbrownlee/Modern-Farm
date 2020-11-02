export const harvestPlants = (plantsArray) => {
    const seedArrays = []
    plantsArray.forEach(plant => {
        if (plant.type === "Corn") {
            for (let i = 0; i < plant.output / 2; i++) {
                seedArrays.push(plant)
            }
        } else {
            for (let i = 0; i < plant.output; i++) {
                seedArrays.push(plant)
            }
        }
    })
    return seedArrays
}