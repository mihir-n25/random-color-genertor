const getcolor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);  //math.f convert 0-9 math.r generate krta h random decimal number ko 1677..convert hexadecimal me

    const randomCode = "#" + randomNumber.toString(16);          //randomNumber ko string m convert kra hexadecimal ki form me

    document.body.style.backgroundColor = randomCode;

    document.getElementById("color-code").innerText = randomCode;       //this will convert cc id to randomcode

    navigator.clipboard.writeText(randomCode)         //this will copy the randomcode automatically to clipboard 
}

document.getElementById("btn").addEventListener(
    "click",
    getcolor
)

getcolor();