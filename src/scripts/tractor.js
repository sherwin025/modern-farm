import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import { addPlants } from "./field.js";

export const plantSeeds = (plantingPlan) => {
    for (const plants of plantingPlan) {
        for (const seeds of plants) {
            switch (seeds) {
                case "Asparagus" :
                    const seed = createAsparagus()
                    addPlants(seed)
                    break;
                case "Corn" :
                    const seed1 = createCorn()
                    for (const seeds of seed1){ addPlants(seeds) }
                    break;
                case "Potato" :
                    const seed2 = createPotato()
                    addPlants(seed2)
                    break;
                case "Soybean":
                    const seed3 = createSoybean()
                    addPlants(seed3)
                    break;
                case "Sunflower":
                    const seed4 = createSunflower()
                    addPlants(seed4)
                    break;
                case "Wheat":
                    const seed5 = createWheat()
                    addPlants(seed5)
                    break;
                default:
                    console.log("Not a valid seed choice")
            }
        }
    }
}

