const growingPlants = []

export const addPlants = (seedObj) => {
    growingPlants.push(seedObj)
} 

export const usePlants = () => {
    return growingPlants
}


