var box = document.getElementById('check')
let checker = false;


//works to prevent any background scrolling for mobile
//even works when the menu isn't in a fixed position

box.addEventListener('click' , () => {

    if(checker == false) {
          document.body.style.position = 'fixed'  
    } else if (checker == true) {
        document.body.style.position = 'unset'
    }
})
