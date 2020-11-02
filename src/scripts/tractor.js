import  { createPotato }  from './seeds/potato.js'
import  { createAsparagus }  from './seeds/asparagus.js'
import  { createCorn }  from './seeds/corn.js'
import  { createSunflower }  from './seeds/sunflower.js'
import  { createSoybean }  from './seeds/soybean.js'
import  { createWheat }  from './seeds/wheat.js'
import  { addPlant } from "./field.js"

export const plantSeeds = (plantingPlan) => {
    plantingPlan.forEach(planArray => {
        planArray.forEach(plan => {
            if (plan === "Potato") {
                const onePotato = createPotato()
                addPlant(onePotato)
            }
            if (plan === "Asparagus") {
                const oneAsparagus = createAsparagus()
                addPlant(oneAsparagus)
            }
            if (plan === "Corn") {
                const oneCorn = createCorn()
                addPlant(oneCorn)
            }
            if (plan === "Sunflower") {
                const oneSunflower = createSunflower()
                addPlant(oneSunflower)
            }
            if (plan === "Soybean") {
                const oneSoybean = createSoybean()
                addPlant(oneSoybean)
            }
            if (plan === "Wheat") {
                const oneWheat = createWheat()
                addPlant(oneWheat)
            }
        })
    });
}