let arrLength10 = [2000, 2500, 3000, 4000, 5000, 6000, 7000, 8000]
let arrLength3 = [2000, 3000, 4000, 6000]
let arrLength4 = [2000, 3000, 4000, 6000, 6500]
let arrLength5 = [2000, 3000, 4000, 6000]
let arrLength6 = [2000, 3000, 4000, 6000, 6500]
let arrLength8 = [2000, 3000, 4000, 6000, 6500]
let arrLength16 = [3000, 6000]
let arrLength6Pro = [2000, 3000, 6000]
let arrLength8Pro = [2000, 3000, 6000]
let arrLength10Pro = [2000, 2500, 3000, 4000, 5000, 6000, 7000, 8000]
let arrLength16Pro = [3000, 6000]


let arrLengthStandard = []

let arrColors = ["Brąz", "Dymiony brąz", "Dymny", "Opal", "Bezbarwny"]

let thicknessPl = document.getElementById('thicknessPl'); 

let widthPl = document.getElementById('widthPl')

let lengthPl = document.getElementById('lengthPl')

let colorPl = document.getElementById('colorPl')


let halfPlate = 0

let price = 200
let priceProfileH = 10
let priceProfileU = 5
let priceLinings = 2
let priceRibbonPP = 3
let priceRibbonP = 7
let priceRibbonPP38 = 4

let allTd

let messageError = document.querySelector('.kalk_error')
let messageErrorLength = document.querySelector('.kalk_error_2')

let lineHalfPlate = document.querySelector('.halfPlate')
console.log('lineHalfPlate', lineHalfPlate)


let setError = () =>{
 messageError.innerHTML = "Wpisz wartość od 500 do 8000"
}

let setErrorLength = () =>{
  messageErrorLength.innerHTML = "Wprowadź wartość"
}

let isValid = () => {
  return widthPl.value.trim()==0 ? false : true
}

let isValidLength = () => {
 return lengthPl.value.trim()==0 ? false : true
}

  function myFunction(e) {
    e.preventDefault()

    allTd = document.getElementsByClassName('value_sheet')
    for (let i = 0; i < allTd.length; i += 1) {
      allTd[i].innerHTML = '0';
    }
    //  console.log('thicknessPl1111', thicknessPl.value);
    // console.log("widthPl", widthPl.value) 
    // console.log("lengthPl", lengthPl.value)

    if(!isValid()){
      setError()
      return
    }
    if(!isValidLength()){
      setErrorLength()
      return 
    }

    messageError.innerHTML = ""
    messageErrorLength.innerHTML = ""
  
    
    

   calculatePlates(lengthPl.value, widthPl.value, thicknessPl.value, colorPl.value)

   document.getElementById("widthPl").value = ""
    document.getElementById("lengthPl").value = ""
    halfPlate = 0
  }


  const btn = document.getElementById('btn');
  // btn.disabled = false
  
  btn.addEventListener('click', myFunction);


  function calculatePlates(lengthPl, widthPl, thicknessPl, colorPl){
    

    let widthBase1 = 2100
    let widthBase2 = 1050
   
    // console.log("xxxxxxxx", typeof thicknessPl)

    
    switch (thicknessPl) {
        case '3':
            arrLengthStandard = arrLength3
           
            break;
        case '4': 
            arrLengthStandard = arrLength4
            
            break;
        case '5':
              arrLengthStandard = arrLength5
              
              break;
        case '6': 
              arrLengthStandard = arrLength6
             
              break;
        case '8': 
              arrLengthStandard = arrLength8
             
              break;
        case '10':
                arrLengthStandard = arrLength10
               
                break;
        case '16': 
                arrLengthStandard = arrLength16
                
                break;
        case '6 PRO': 
                arrLengthStandard = arrLength6Pro
                thicknessPl = '6'
                break;        
        case '8 PRO': 
                arrLengthStandard = arrLength8Pro
                thicknessPl = '8'
                break;
        case '10 PRO': 
                arrLengthStandard = arrLength10Pro
                thicknessPl = '10'
                break;
        case '16 PRO': 
                arrLengthStandard = arrLength16Pro
                thicknessPl = '16'
                break;

        default:
            arrLengthStandard = arrLength10
           
    }
    // console.log("arrStandard", arrLengthStandard)

    let sheetColor = arrColors.find(item=>item == colorPl)
    console.log('sheetColor', sheetColor)

    let currentLength = definitionLength(widthPl, arrLengthStandard)
    //  console.log('currentLength', currentLength)
   
    let amountPlates = lengthPl/widthBase1
    // console.log(Math.floor(amountPlates))
 
    let roundPlates = Math.floor(amountPlates)

    // if(isNaN(currentLength)){
    //   roundPlates=0
    // }
 
    let rest = lengthPl-(roundPlates*widthBase1)
 
    // console.log('rest', rest)

    let quantityProfileU
 
    if(rest>widthBase2){
      roundPlates++
      quantityProfileU = roundPlates*2
      // lineHalfPlate.innerHTML = ""
      lineHalfPlate.hidden = true
    } else if (rest <= widthBase2) {
     
     halfPlate = 1
     quantityProfileU = roundPlates*2+1
     lineHalfPlate.hidden = false
   } 


   let quantityProfileH = roundPlates+halfPlate-1
   let quantityLinings = Math.ceil(widthPl/1000*lengthPl/1000*2.5)
   let quantityRibbonPP = Math.ceil(lengthPl/1000)
   let quantityRibbonP = quantityRibbonPP


    let lineRibbon25 = document.querySelector('.ribbon25')
    let lineRibbon38 = document.querySelector('.ribbon38')

    let fullPriceRibbon38
    let fullPriceRibbon25

   if(Number(thicknessPl) <= 6){

      lineRibbon38.hidden = true
      lineRibbon25.hidden = false
      
      fullPriceRibbon25 = quantityRibbonPP*priceRibbonPP
      fullPriceRibbon38 = 0
      
    } else if(Number(thicknessPl) > 6) {

      lineRibbon38.hidden = false
      lineRibbon25.hidden = true

      fullPriceRibbon25 = 0
      fullPriceRibbon38 = quantityRibbonPP*priceRibbonPP38
    
    }

   let fullPrice = roundPlates*price
   let fullPriceHalf = halfPlate*price/2
   let fullPriceProfileH = priceProfileH*quantityProfileH
   let fullPriceProfileU = priceProfileU*quantityProfileU
   let fullPriceLinings = quantityLinings*priceLinings
   


   let fullPriceRibbonP = quantityRibbonP*priceRibbonP

   let total = fullPrice+fullPriceHalf+fullPriceLinings+fullPriceProfileH+fullPriceProfileU+fullPriceRibbon25+fullPriceRibbon38+fullPriceRibbonP
 
    


    
      let valueSheetLength = document.getElementById('table').rows[1].cells[1]
      valueSheetLength.textContent = `${currentLength}`

      console.log('qqqqqqq', valueSheetLength.textContent)
      console.log('kkkkkkk', isNaN(currentLength))


      let valueSheetLengthHalf = document.getElementById('table').rows[2].cells[1]
      valueSheetLengthHalf.textContent = `${currentLength}`
      console.log ("valueSheetLengthHalf.textContent", valueSheetLengthHalf.textContent)

      
      let valueSheetThickness = document.getElementById('table').rows[1].cells[2]
      valueSheetThickness.textContent = `${thicknessPl}`

      let valueSheetThicknessHalf = document.getElementById('table').rows[2].cells[2]
      valueSheetThicknessHalf.textContent = `${thicknessPl}`

      let valueSheetColor = document.getElementById('table').rows[1].cells[3]
      valueSheetColor.textContent = `${sheetColor}`

      let valueSheetColorHalf = document.getElementById('table').rows[2].cells[3]
      valueSheetColorHalf.textContent = `${sheetColor}`


      let valueSheetQuantity = document.getElementById('table').rows[1].cells[4]
      valueSheetQuantity.textContent = `${roundPlates} szt`

      let valueSheetQuantityHalf = document.getElementById('table').rows[2].cells[4]
      valueSheetQuantityHalf.textContent = `${halfPlate} szt`

      let valueSheetPrice = document.getElementById('table').rows[1].cells[5]
      valueSheetPrice.textContent = `${price}`

      let valueSheetPriceHalf = document.getElementById('table').rows[2].cells[5]
      valueSheetPriceHalf.textContent = `${price/2}`   // цена половины плиты

      let valueSheetFullPrice = document.getElementById('table').rows[1].cells[6]
      valueSheetFullPrice.textContent = `${fullPrice}`

      let valueSheetFullPriceHalf = document.getElementById('table').rows[2].cells[6]
      valueSheetFullPriceHalf.textContent = `${fullPriceHalf}`



     //**************************** */

      let valueSheetProfileH = document.getElementById('table').rows[3].cells[1]
      valueSheetProfileH.textContent = `${currentLength}`

      let valueSheetThicknessH = document.getElementById('table').rows[3].cells[2]
      valueSheetThicknessH.textContent = `${thicknessPl}`
     
      let valueSheetColorH = document.getElementById('table').rows[3].cells[3]
      valueSheetColorH.textContent = `${sheetColor}`

      let valueSheetQuantityProfileH = document.getElementById('table').rows[3].cells[4]
      valueSheetQuantityProfileH.textContent = `${quantityProfileH} szt`
    
      let valueSheetPriceProfileH = document.getElementById('table').rows[3].cells[5]
      valueSheetPriceProfileH.textContent = `${priceProfileH}`

      let valueSheetFullPriceProfileH = document.getElementById('table').rows[3].cells[6]
      valueSheetFullPriceProfileH.textContent = `${fullPriceProfileH}`


      let valueSheetProfileU = document.getElementById('table').rows[4].cells[1]
      valueSheetProfileU.textContent = `${widthBase1}`

      let valueSheetThicknessU = document.getElementById('table').rows[4].cells[2]
      valueSheetThicknessU.textContent = `${thicknessPl}`

      let valueSheetColorU = document.getElementById('table').rows[4].cells[3]
      valueSheetColorU.textContent = `${sheetColor}`
      
      let valueSheetQuantityProfileU = document.getElementById('table').rows[4].cells[4]
      valueSheetQuantityProfileU.textContent = `${quantityProfileU} szt`
    
      let valueSheetPriceProfileU = document.getElementById('table').rows[4].cells[5]
      valueSheetPriceProfileU.textContent = `${priceProfileU}`

      let valueSheetFullPriceProfileU = document.getElementById('table').rows[4].cells[6]
      valueSheetFullPriceProfileU.textContent = `${fullPriceProfileU}`
    
    
      let valueSheetQuantityLinings = document.getElementById('table').rows[5].cells[4]
      valueSheetQuantityLinings.textContent = `${quantityLinings} szt`

      let valueSheetPriceLinings = document.getElementById('table').rows[5].cells[5]
      valueSheetPriceLinings.textContent = `${priceLinings}`

      let valueSheetFullPriceLinings = document.getElementById('table').rows[5].cells[6]
      valueSheetFullPriceLinings.textContent = `${fullPriceLinings}`

      ///////////////////////////////   PP 25 /// PP 38 //////////////
      

      let valueSheetQuantityPP38 = document.getElementById('table').rows[7].cells[4]
       valueSheetQuantityPP38.textContent = `${quantityRibbonPP} m`

       let valueSheetPricePP38 = document.getElementById('table').rows[7].cells[5]
       valueSheetPricePP38.textContent = `${priceRibbonPP38}`

       let valueSheetFullPricePP38 = document.getElementById('table').rows[7].cells[6]
       valueSheetFullPricePP38.textContent = `${fullPriceRibbon38}`


       let valueSheetQuantityPP = document.getElementById('table').rows[6].cells[4]
       valueSheetQuantityPP.textContent = `${quantityRibbonPP} m`

       let valueSheetPricePP = document.getElementById('table').rows[6].cells[5]
       valueSheetPricePP.textContent = `${priceRibbonPP}`

       let valueSheetFullPricePP = document.getElementById('table').rows[6].cells[6]
       valueSheetFullPricePP.textContent = `${fullPriceRibbon25}`

      let valueSheetQuantityP = document.getElementById('table').rows[8].cells[4]
      valueSheetQuantityP.textContent = `${quantityRibbonP} m`

      let valueSheetPriceP = document.getElementById('table').rows[8].cells[5]
      valueSheetPriceP.textContent = `${priceRibbonP}`

      let valueSheetFullPriceP = document.getElementById('table').rows[8].cells[6]
      valueSheetFullPriceP.textContent = `${fullPriceRibbonP}`


      let valueSheetTotal = document.getElementById('table').rows[9].cells[6]
      valueSheetTotal.textContent = `${total}`

      if(isNaN(currentLength)){
        allTd = document.getElementsByClassName('value_sheet')
        for (let i = 0; i < allTd.length; i += 1) {
          allTd[i].innerHTML = 'niedostępne';
        }
      }
}
 
 
   function definitionLength(widthPl, arr){
    
   
   for (let i = 0; i < arr.length; i++) {
       const el = arr[i]
   
      // console.log(el)
   
      if(widthPl <= el){
   
        // console.log("el",el)
       return el
      }
       
   }
 }

  document.getElementById("clear").onclick = function(e) {
    
    // e.preventDefault()
    
    document.getElementById("widthPl").value = ""
    document.getElementById("lengthPl").value = ""
    halfPlate = 0

    // console.log("ssssssssssss", document.getElementById('thicknessPl').value)

   allTd = document.getElementsByClassName('value_sheet')
   for (let i = 0; i < allTd.length; i += 1) {
    allTd[i].innerHTML = '0';
   }

  }
 




