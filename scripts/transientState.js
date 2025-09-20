const transientState = {
    metalChoice: "",
    sizeChoice: 0,
    styleChoice: ""
}

export const setMetalChoice = (chosenMetal) => {
        transientState.metalChoice = chosenMetal
        console.log(transientState)
}

export const setSizeChoice = (chosenSize) => {
        transientState.sizeChoice = chosenSize
                console.log(transientState)
}

export const setStyleChoice = (chosenStyle) => {
        transientState.styleChoice = chosenStyle
                console.log(transientState)
}