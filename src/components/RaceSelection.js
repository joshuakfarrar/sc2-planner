import React, { Component } from 'react'
import RACES from "../icons/races"
import CLASSES from "../constants/classes"

export default class RaceSelection extends Component {
    /**
     * If a race was selected, clear BOArea and BuildOrder and reset everything
     * Then load the right race in ActionSelection
     */

     state = {
        races: ["terran", "protoss", "zerg"]
     }

    render() {
        const iconSize = `w-${this.state.iconSize} h-${this.state.iconSize}`
        const classString = `${iconSize} ${CLASSES.icon}`

        const races = this.state.races.map((race, index) => {
            const item = RACES[race]
            return <div key={item.name}>
                <img race={item} className={classString} src={require("../icons/png/" + item.path)} alt={item.name} />
            </div>
        });

        return (
            <div>{races}</div>
        )
    }
}
