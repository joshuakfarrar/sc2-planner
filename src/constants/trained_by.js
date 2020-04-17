import {CREATION_ABILITIES, MORPH_ABILITIES} from "./creation_abilities"
import UNITS_BY_ID from "./units_by_id"
import UPGRADE_BY_ID from "./upgrade_by_id"

import data from "./data.json"
// const data = require("./data.json")

const TRAINED_BY = {}
// console.log(CREATION_ABILITIES)

data.Unit.forEach((trainingUnit) => {
    trainingUnit.abilities.forEach((ability) => {
        const resultingUnitId = CREATION_ABILITIES[ability.ability]
        const resultingUnit = UNITS_BY_ID[resultingUnitId]
        // Check if ability id maps to a train / build command
        if (resultingUnit !== undefined) {
            let requiredStructureId = null
            let requiredUpgradeId = null
            let requiresTechlab = false
            let isMorph = MORPH_ABILITIES.has(ability.ability)
            const isFreeMorph = resultingUnit.minerals === trainingUnit.minerals && resultingUnit.gas === trainingUnit.gas
            // Ignore free morphs, e.g. hellbat to hellion is a free morph but adds the armory requirement for hellion
            if (isFreeMorph) {
                return
            }
            // if (isMorph) {
            //     console.log("--------");
            //     console.log(trainingUnit);
            //     console.log(resultingUnit);
            // }
            let consumesUnit = resultingUnit.race === "Zerg" && resultingUnit.is_structure && !trainingUnit.is_structure
            if (Array.isArray(ability.requirements)) {
                for (let requirement of ability.requirements) {
                    if (requirement.upgrade) {
                        requiredUpgradeId = requirement.upgrade
                    }
                    if (requirement.building) {
                        requiredStructureId = requirement.building
                    }
                    if (requirement.addon) {
                        requiresTechlab = true
                    }
                }
            }

            let requiredStructure = requiredStructureId !== null ? UNITS_BY_ID[requiredStructureId].name : null
            let requiredUpgrade = requiredUpgradeId !== null ? UPGRADE_BY_ID[requiredUpgradeId].name : null

            // If it doesnt exist: create
            if (TRAINED_BY[resultingUnit.name] === undefined) {
                TRAINED_BY[resultingUnit.name] = {
                    trainedBy: new Set([trainingUnit.name]),

                    requiresTechlab: requiresTechlab,

                    isMorph: isMorph,

                    consumesUnit: consumesUnit,
                }
            } else {
                // Entry already exists, add training unit to object of 'trainedBy' and update requirement
                TRAINED_BY[resultingUnit.name].trainedBy.add(trainingUnit.name)
            }
            TRAINED_BY[resultingUnit.name].requiredStructure = !TRAINED_BY[resultingUnit.name].requiredStructure ? requiredStructure : TRAINED_BY[resultingUnit.name].requiredStructure

            TRAINED_BY[resultingUnit.name].requiredUpgrade = !TRAINED_BY[resultingUnit.name].requiredUpgrade ? requiredUpgrade : TRAINED_BY[resultingUnit.name].requiredUpgrade
            // if (resultingUnit.name === "Zergling") {
            //     console.log(TRAINED_BY[resultingUnit.name]);
            //     console.log(ability);
            //     console.log(requiredStructure);
            // }
        }
    })
})

// console.log(TRAINED_BY);
    
/**
{Adept: 
    requiredStructure: "CyberneticsCore",
    requiredUpgrade: null,
    requiresTechlab: false,
    trainedBy: { Gateway: 1, WarpGate: 1 }
    // E.g. when a hatch morphes to lair, is a morph
    isMorph: false
    // E.g. when a drone builds a spawning pool, it consumes the drone
    consumesUnit: false
}
 */
console.assert(Object.keys(TRAINED_BY).length === 111, `${Object.keys(TRAINED_BY).length} is not 111`)

console.assert(TRAINED_BY["Zergling"].requiredStructure === "SpawningPool", TRAINED_BY["Zergling"].requiredStructure)

export default TRAINED_BY
