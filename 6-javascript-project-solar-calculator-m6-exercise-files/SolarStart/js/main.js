/*jslint browser:true */
"use strict";

function addMonths(elem) {
 var annualUse=0, dailyUse=0, i=0, x=0
 let months = document.getElementById(elem).getElementsByTagName('input')
//  console.log(months)

 for(let i = 0; i < months.length; i++){
     x = Number(months[i].value)
     annualUse += x
    //  console.log(x)
    }
 dailyUse = annualUse/365
 return dailyUse
}
function sunHrs () {
var hrs
var theZone = document.forms.solarForm.zone.selectedIndex
theZone += 1
switch(theZone) {
    case 1: 
        hrs = 6;
        break;
    case 2:
        hrs = 5.5;
        break;
    case 3:
        hrs = 5;
        break;
    case 4: 
        hrs = 4.5;
        break;
    case 5:
        hrs = 4.2;
        break;
    case 6:
        hrs = 3.5;
        break;
    default:
            hrs = 0;
}

return hrs
}
function calculatePanel() {
    var userChoice = document.forms.solarForm.panel.selectedIndex
    var panelOptions = document.forms.solarForm.panel.options
    var power = panelOptions[userChoice].value
    var name = panelOptions[userChoice].text
    var x = [power, name]
    return x
}
function calculateSolar() {
    let dailyUse = addMonths('mpc')
    // console.log(dailyUse)

    let sunHrsPerDay = sunHrs()
    // console.log(sunHrsPerDay)

    var minKwNeed = dailyUse/sunHrsPerDay
    // console.log(minKwNeed)

    var realKwNeeds = minKwNeed * 1.25
    
    var realWattNeeds = realKwNeeds * 1000
    console.log(realKwNeeds, realWattNeeds)

    var panelInfo = calculatePanel()
    var panelOutput = panelInfo[0]
    var panelName = panelInfo[1]
    console.log(panelOutput, panelName)

    var panelsNeeded = Math.ceil(realWattNeeds / panelOutput)

    let feedback = "";
    feedback += "<p>Based on your average daily use of "+Math.round(dailyUse)+" kWh, you will need to purchase "+panelsNeeded+" "+panelName+" solar panels to offset 100% of your electricity bill.</p>"
    feedback += "<h2>Additional Details</h2>"
    feedback += "<p>Your average daily electricity consumption: "+Math.round(dailyUse)+" Kwh per day.</p>"
    feedback += "<p> Average sunhine hour per day: "+sunHrsPerDay+" hours</p>"
    feedback += "<p>Realistic watts needed per hour: "+Math.round(realWattNeeds)+" watts/hour. </p>"
    feedback += "<p> The "+panelName+" panel you selected generates about "+panelOutput+" watts per hour</p>"

    document.getElementById('feedback').innerHTML = feedback

}
