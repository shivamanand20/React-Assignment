
const onediv = document.querySelector('#one');
const onedivtext= onediv.querySelector('h1');
onedivtext.textContent='Welcome to Fareportal ';
onediv.style.border='5px solid red';
onediv.style.width='400px';
onediv.style.textAlign='center';
onediv.style.margin='auto';
onediv.addEventListener('mouseover',()=>{
    onedivtext.style.color='red';
});

onediv.addEventListener('mouseleave',()=>{
    onedivtext.style.color='black';
})

const twodiv= document.querySelector('#two');
const twodivtext= twodiv.querySelector('h2');
twodivtext.textContent='Welcome Shivam ';
twodiv.style.border='5px solid blue';
twodiv.style.width='300px';
twodiv.style.textAlign='center';
twodiv.style.margin='auto';
twodiv.style.marginTop='100px';
twodiv.addEventListener('mouseover',()=>{
    twodivtext.style.color='red';
});
twodiv.addEventListener('mouseleave',()=>{
    twodivtext.style.color='black';
})


