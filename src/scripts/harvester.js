let harvestArray = []

export const harvestPlants = (plantsArray) => {
    for (const plant of plantsArray)
        if (plant.type == 'Corn'){
            for (let i = 0; i < plant.output / 2; i++) {
                    harvestArray.push(plant)
                }
            } else {
            for (let i = 0; i < plant.output; i++) {
                harvestArray.push(plant)
            }
        } 
    return harvestArray

}