/* 

const nop1 = document.querySelector('#nop')
const bt1 = document.querySelector('#bt')
const hour = document.querySelector('#hr')
const ans = document.querySelector('#answer')




function boattype(){
    let as = 0
    let ac = 0
        for (let index = 0; index < bt1.length; index++) {
           if(bt1[index].selected==true){
                as = (JSON.parse(bt1.value).seat) ;
                ac = (JSON.parse(bt1.value).charges) ;

                
            
           }
            }
            console.log(`as : ${as}`);
                console.log(`ac : ${ac}`);
            return ([as, ac]);
}

function getboatcount()
{
    g2 = boattype();
   console.log(g2);
   if( (nop1.value%g2[0])==0){
        return (nop1.value/g2);
    } else {
        return ((nop1.value/g2)+1);
    }
}

function getboatprice()
{
    g3 = getboatcount();
    g4 = boattype();
 gp = g3 * g4[1];
 return gp;
}
function getbill() {
    g6 = getboatprice();
    bill = hour.value*g6;
    return bill;
}

function bookride()
{    event.preventDefault();
    q1 = boattype();
    q2 = getboatcount();
    q3 = getboatprice();
    q4 = getbill();

ans.innerHTML = q2;
}
*/




// const persons = parseInt(document.getElementById("nop").value)
const person = document.getElementById("nop");
const boatType = document.getElementById("bt")
// const travelDuration = parseInt(document.getElementById("hr").value)
const travelD = document.getElementById("hr")
// const travelDuration1 =(document.getElementById("hr"))
// const travelDuration = parseInt(travelDuration1.value)
const ans = document.querySelector('#answer')
function bookride(){
    event.preventDefault()
    // Values
    const persons = parseInt(person.value)
    const travelDuration = parseInt(travelD.value)
    console.log(`persons: ${persons}`);
    console.log(`boatType: ${boatType.value}`);
    console.log(`travelDuration: ${travelDuration}`);
    let seater = 0;
    let charges = 0;
    let boatNumber = 0
    // Experiment on boattype
    for(let i=0; i<boatType.length; i++){
    
        // console.log();
        if(boatType[i].selected === true){
            console.log(JSON.parse(boatType[i].value));
            seater = JSON.parse(boatType[i].value).seat
            charges = JSON.parse(boatType[i].value).charges
        }
    }

    console.log(`seater: ${seater}`);
    console.log(`charges: ${charges}` );

    // console.log(persons);
    if(persons%seater == 0){
        boatNumber = parseInt(persons/seater ); 
    }
    else{
        boatNumber = parseInt(Math.ceil(persons/seater) ); 
    }
 
    console.log(`boatNumber: ${boatNumber}`);

    console.log(`Cost for BoatTravel without Hours: ${boatNumber * charges}`);
    console.log(`FinalRide Cost : ${boatNumber * charges * travelDuration}`);

    ans.innerHTML=`You have to pay ${boatNumber * charges * travelDuration}`
    console.log(travelDuration);
}