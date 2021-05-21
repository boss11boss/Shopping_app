let cross=document.querySelector('#cross')
let modal=document.querySelector('#modal')
let btn=document.querySelector('#btn')
let add=document.querySelector('#add')
let PN=document.querySelector('#PN')
let PC=document.querySelector('#PC')
let PP=document.querySelector('#PP')
let cardz=document.querySelector('#cardz')


cross.addEventListener('click',function(){
    modal.style.display='none'
})

btn.addEventListener('click',function(){
    modal.style.display='initial'
})
add.addEventListener('click',function(){
    let PNv=PN.value
    let PCv=PC.value
    let PPv=PP.value
    console.log(PNv,PCv,PPv)
    PN.value=''
    PC.value=''
    PP.value=''
    let template=`
                <div class="card">
                    <div class="photo">
                        <img id="img" src="${PPv}" alt="F">
                    </div>
                    <p>${PNv}</p>
                    <p id="cate">${PCv}</p>
                    <button>Buy Now</button>
                </div>`
    
    cardz.innerHTML+=template
    modal.style.display='none'
})