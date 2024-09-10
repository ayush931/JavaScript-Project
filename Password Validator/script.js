let submit = document.querySelector("#submit")

submit.addEventListener('click', function(e){
    e.preventDefault()
    let password = document.querySelector
    ("#password").value
    let resetPassword = document.querySelector("#validate").value
    if(password === resetPassword){
        alert("Matched")
    }else{
        alert("Didn't matched")
    }
})