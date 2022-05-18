let foundYou = document.getElementById('myForm')

var selectArray = foundYou.getElementsByTagName('input')

for(let i = 0; selectArray.length; i++){
    console.log(selectArray[i].value)
}