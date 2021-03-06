// type BarName = "time" | "worker" | "action" | "unit" | "structure" | "upgrade"
// const CLASSES: {
//     [name: string]: string | { [name in BarName]: string }
//     bgColor: { [name in BarName]: string }
//     typeColor: { [name in BarName]: string }
//     hoverColor: { [name in BarName]: string }
// } = {

const CLASSES = {
    title: "text-4xl font-bold antialiased cursor-text",

    errorLabel: "text-red-600 text-2xl font-bold",
    // Race icon and the items on the right side icons
    raceIcon:
        "h-8 w-8 mx-1 p-0 z-10 flex-shrink-0 hover:bg-gray-400 cursor-pointer",
    timeIcon: "h-24 w-24 mx-1 p-0 z-10",
    timeText: "absolute z-20 text-white",

    // Action selection container
    actionContainer: "flex flex-wrap bg-gray-600 m-1 p-1",
    // Action icon
    actionIconContainer:
        "relative h-12 w-12 m-0 p-0 z-10 hover:bg-gray-400 cursor-pointer",
    actionIconText:
        "m-0 p-0 absolute z-40 text-white bg-black select-none text-xs",

    // Icons in the build order at the top
    bo: "flex flex-row overflow-x-auto mx-1 p-0",
    boItem:
        "m-0 p-0 h-16 w-16 bg-green-700 hover:bg-green-500 cursor-move border border-black",
    boItemDragging:
        "m-0 p-0 h-16 w-16 bg-green-300 cursor-move border border-black",
    boItemInvalid:
        "m-0 p-0 h-16 w-16 bg-red-700 hover:bg-red-500 cursor-move border border-black",
    boItemInvalidDragging:
        "m-0 p-0 h-16 w-16 bg-red-300 cursor-move border border-black",
    boItemHighlighting:
        "m-0 p-0 h-16 w-16 bg-green-300 cursor-move border border-black",
    // Build order area in the bottom left
    boArea: "m-1 p-1 overflow-x-auto bg-indigo-400",
    // Time bar at the top of the area
    timeBar: "",
    // Build order bars things
    bgColor: {
        time: "bg-orange-700",
        worker: "bg-green-700",
        action: "bg-red-700",
        unit: "bg-pink-600",
        structure: "bg-teal-600",
        upgrade: "bg-purple-700",
    },
    typeColor: {
        time: "bg-orange-600",
        worker: "bg-green-600",
        action: "bg-red-600",
        unit: "bg-pink-500",
        structure: "bg-teal-500",
        upgrade: "bg-purple-600",
    },
    // Should be 100 to 300 less than above
    hoverColor: {
        time: "bg-orange-400",
        worker: "bg-green-400",
        action: "bg-red-400",
        unit: "bg-pink-300",
        structure: "bg-teal-300",
        upgrade: "bg-purple-400",
    },
    // Would like to add margin to boCol but doesnt allow me
    boCol: "flex table-row m-0 p-0 border border-black",
    boRow: "flex m-0 p-0 border border-black",
    boTimeElement:
        "z-40 flex flex-shrink-0 items-center border-l border-r border-black",
    boElementContainer:
        "z-40 flex flex-shrink-0 items-center border-l-2 border-r-2 border-black",
    boElementIcon: "m-0 p-0 h-8",
    boElementText: "z-20 m-0 p-0 whitespace-no-wrap",

    // Dropdown of export, import, settings
    dropDown:
        "absolute left-0 top-auto z-50 rounded bg-gray-300 whitespace-no-wrap flex flex-col",
    dropDownContainer: "m-1 p-1 flex flex-row justify-between",
    // Only export import
    dropDownButton:
        "hover:bg-gray-400 px-2 flex flex-row justify-between cursor-move",
    // Only settings
    dropDownLabel: "hover:bg-gray-400 px-2 flex flex-row justify-between",
    dropDownInput: "rounded w-20 mx-2 z-50",

    // Rectangle items in the BOArea
    // Import export buttons
    buttons:
        "hover:bg-blue-500 relative bg-gray-300 text-gray-700 font-semibold mx-1 py-2 px-4 rounded items-center select-none h-10",
}

export default CLASSES
