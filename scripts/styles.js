import { setStyleChoice } from "./transientState.js"

export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")
    const styles = await response.json()

        document.addEventListener("change", handleStyleChoice)

    const stylesHTML = styles.map((style => {
        return `<input type="radio" name="style" value="${style.style}" /> ${style.style}`
    })
)
    return stylesHTML.join("")

}

const handleStyleChoice = (event) => {

    if (event.target.name === "style") {
        setStyleChoice(event.target.value)
    }
}