    const bold =document.getElementById('bold');
    const italic =document.getElementById('italic');
    const underline =document.getElementById('underline');

    const left =document.getElementById('left');
    const center =document.getElementById('center');
    const right =document.getElementById('right');
    const justify =document.getElementById('justify');

    const size =document.getElementById('size');
    const font =document.getElementById('font');
    const color =document.getElementById('color');

    const textArea = document.getElementById('textArae');


    bold.addEventListener("click", function(){
        textArea.style.fontWeight = 'bold';
    });

    italic.addEventListener('click', function(){
        textArea.style.fontStyle = 'italic';
    });

    underline.addEventListener('click', function(){
        textArea.style.textDecoration = 'underline';
    });

    left.addEventListener('click', function(){
        textArea.style.textAlign = 'left';
    });

    center.addEventListener('click', function(){
        textArea.style.textAlign = 'center';

    });

    right.addEventListener('click', function(){
        textArea.style.textAlign = 'right';
    });

    justify.addEventListener('click', function(){
        textArea.style.textAlign = 'justify';
    });

    color.addEventListener('click', function(){
        textArea.style.color = color.value ;
    });

    size.addEventListener('click', function(){
        textArea.style.fontSize = size.vslue + 'px';
    });
    
    font.addEventListener('click', function(){
        textArea.style.fontFamily = font.value;
    });