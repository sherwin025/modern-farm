import { createPlan } from "./plan.js";
import { plantSeeds } from "./tractor.js"
import { usePlants } from "./field.js"
import { harvestPlants } from "./harvester.js"
import { catalog } from "./catalog.js"

// console.log("Welcome to the main module")

const yearlyPlan = createPlan()

// console.log(yearlyPlan)

const planted = plantSeeds(yearlyPlan)
const seedList = usePlants()

// console.log(seedList)

const foodToSell = harvestPlants(seedList)

// console.log(foodToSell)

const elContainer = document.querySelector(".container")
elContainer.innerHTML = catalog(foodToSell)

