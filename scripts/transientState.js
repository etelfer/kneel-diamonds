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


export const placeOrder = async () => {
    /*
        Add the required keys to the object below that are
        needed for a POST operation.
    */
        const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    // Send the transient state to your API
    const response = await fetch("http://localhost:8088/orders", postOptions)

    const newOrderEvent = new CustomEvent("newOrderCreated")
    document.dispatchEvent(newOrderEvent)
}