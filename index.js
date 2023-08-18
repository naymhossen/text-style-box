function calculatorTriangelArea(){

    const trinagleBaseValueFiled = document.getElementById('triangle-base');
    const triangleText = trinagleBaseValueFiled.value ;
    const triangleBase = parseFloat(triangleText);
    console.log(triangleBase);

    const triangleHeightField = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightField.value;
    const triangleHeight = parseFloat(triangleHeightText);
    console.log(triangleHeight);

     // validate a number
     if(isNaN(triangleBase) || isNaN(triangleHeight)){
        alert('Pleace Provide a number');
        return;
}

    const area = 0.5 * triangleBase * triangleHeight ;
    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText = area;
}

function calculatorRacetangleArea(){
    const raectangleValueField = document.getElementById('rectangle-w');
    const rectangleText = raectangleValueField.value;
    const rectangleWight = parseFloat(rectangleText);
    console.log(rectangleWight);

    const ractangleLeanthFiled = document.getElementById('rectangle-l');
    const ractangangleTaxt = ractangleLeanthFiled.value;
    const ractangangleLenth = parseFloat(ractangangleTaxt);
    console.log(ractangangleLenth);


    const area = rectangleWight * ractangangleLenth;
    const ractangangArea = document.getElementById('rectangle-area');
    ractangangArea.innerText = area;
}


/* RECATANGLE FUNTION START */

function rhombusArea(){
    const rhombFirst = getInputValue('rhombus-d1');
    const rhombSecond = getInputValue('rhombus-d2');

    // validate a number
    if(isNaN(rhombFirst) || isNaN(rhombSecond)){
        alert('Pleace Provide a number');
        return;
    }
    const areas = 0.5 * (rhombFirst * rhombSecond);

    setAreaElementTex('rhombus-area', areas);
    addCalculationArea('Rhombus', areas);
}

function ParallelogramCalculator(){
const base = getInputValue('parallelogram-a');
const height = getInputValue('Parallelogram-b');

    // validate a number

    if(isNaN(base) || isNaN(height)){
        alert('Pleace Provide a number');
        return;
    }

const area = base * height ;

setAreaElementTex("Parallelogram-area", area);
addCalculationArea('Parallelogram', area);
}

function pentagonCalculation(){
    const pentagonPower = getInputValue('pentagon-p');
    const pentagonArea = getInputValue('pentagon-b');

    if(isNaN(pentagonPower) || isNaN(pentagonArea)){
        alert('Pleace Provide a Number');
        return;
    }
    const area = 0.5 * (pentagonPower * pentagonArea);
    setAreaElementTex('pentagon-area', area)

    addCalculationArea('Rectangle', area);
}

function ellipseCalculation(){
    const ellipseFirst = getInputValue('ellipse-a');
    const ellipseLast = getInputValue('ellipse-b');
    const ellipseArea = 3.14 * (ellipseFirst * ellipseLast);
    setAreaElementTex('ellipse-area', ellipseArea);
}



/* reusable function --and-- reduce duolicate code */

function getInputValue(inputId){
    const inputFiledById = document.getElementById(inputId);
    const inputValueString = inputFiledById.value;
    const inputValue = parseFloat(inputValueString);
    return inputValue;
}

function setAreaElementTex(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;    
}
function addCalculationArea(areaType, area){
    console.log(areaType+ ' '  + area);
    const calculationEntry = document.getElementById('calculation-entry');
    const count = calculationEntry.childElementCount;
    const creatText = document.createElement('p');
    creatText.classlist.add('my-4');
    creatText.innerHTML = `${count + 1}. &{areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success">Convert</button>`;
    calculationEntry.appendChild(creatText);
}