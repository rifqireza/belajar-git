const tes = "hai nama saya reza";
const firstCapital = (props) => {
    const name = props.split(" ");
    let element = "";
    name.map(e => {
        element += e[0].toUpperCase() + e.split("").filter((a,i) => {
            return e[i - 1]
        }).join("") + " "; 
    }) 
    return element;
}

console.log(firstCapital(tes));