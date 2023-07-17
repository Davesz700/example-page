var menuitem = document.querySelectorAll('.option-menu')


function Selected(){
    menuitem.forEach((item)=>
    item.classList.remove('selected')
    )
    this.classList.add('selected')
}

menuitem.forEach((item)=>
item.addEventListener('click', Selected)
)