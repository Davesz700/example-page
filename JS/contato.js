var button = document.querySelector('.button')



button.addEventListener('click', copy)


function copy(){
    navigator.clipboard.writeText('myemail@email.com').then(() => { 
        button.setAttribute('value', 'Copiado!')
        
    })
    
}