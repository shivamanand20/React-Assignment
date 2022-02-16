let onediv= document.querySelector('#one');

onediv.addEventListener('mouseover',()=>{
    onediv.style.backgroundColor='red';
    
});
onediv.addEventListener('mouseleave',()=>{
    onediv.style.backgroundColor='black' ;
})

let twodiv= document.querySelector('#two');

twodiv.addEventListener('mouseover',()=>{
    twodiv.style.backgroundColor='red';
});
twodiv.addEventListener('mouseleave',()=>{
    twodiv.style.backgroundColor='black' ;
});