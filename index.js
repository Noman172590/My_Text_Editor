document.getElementById('bold').addEventListener('click',function(){


    document.getElementById("texarea").style.fontWeight = 'bold';
    document.getElementById("texarea").style.fontSize = '25px';
})
document.getElementById('italic').addEventListener('click',function(){


    document.getElementById("texarea").style.fontStyle = 'italic';
    document.getElementById("texarea").style.fontSize = '25px';
})
document.getElementById('underline').addEventListener('click',function(){


    document.getElementById("texarea").style.textDecoration = 'underline';
    document.getElementById("texarea").style.fontSize = '25px';
})
document.getElementById('center').addEventListener('click',function(){


    document.getElementById("texarea").style.textAlign = 'center';
    document.getElementById("texarea").style.fontSize = '25px';
})
document.getElementById('right').addEventListener('click',function(){


    document.getElementById("texarea").style.textAlign = 'right';
    document.getElementById("texarea").style.fontSize = '25px';
})
document.getElementById('equal').addEventListener('click',function(){


    document.getElementById("texarea").style.textAlign = 'left';
    document.getElementById("texarea").style.fontSize = '25px';
})