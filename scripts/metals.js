import { setMetalChoice } from "./transientState.js"

export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()

document.addEventListener("change", handleMetalChoice)


    const metalsHTML = metals.map((metal => {
        return `<input type="radio" name="metal" value="${metal.metal}" /> ${metal.metal}`
    })
)
    return metalsHTML.join("")

}



const handleMetalChoice = (event) => {

    if (event.target.name === "metal") {
        setMetalChoice(event.target.value)
    }
}