
const data = document.getElementsByClassName('content-container')

// console.log(data)


for (let i = 0; i < data.length; i++) {
    data[i].addEventListener('click', function() {

        this.classList.toggle('active')
        
    })
    
}