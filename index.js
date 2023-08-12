var box = document.getElementById('check')


//works to prevent any background scrolling for mobile
//even works when the menu isn't in a fixed position

box.addEventListener('click' , () => {
    document.body.style.position = 'fixed'
})
