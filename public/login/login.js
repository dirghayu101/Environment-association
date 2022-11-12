const formelement = document.querySelectorAll(".Logincontainer input");
const signup = document.querySelectorAll(".button1");
log.style.display="none"


const button = document.querySelector(".button1")
console.log(button)
button.addEventListener('click', postdata(data))


signup[0].addEventListener('click', async(e) => {
    var data={}

    
    if (formelement[0].value != "" && formelement[1].value != "") {
        
        
            data = {
                "username": formelement[0].value,
                "password": formelement[1].value,
                

            }
            const data1 =await postdata(data).then((data2)=>{
                alert(data2.message);
                e.preventDefault();
                console.log(data2.message)
                if(data2.message==="login Successful"){
                    window.location.href="http://localhost:3000/"
                    check= true
                }
        })
        
    
            
}});
