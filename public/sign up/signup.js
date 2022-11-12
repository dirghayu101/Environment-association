
const formelement = document.querySelectorAll(".forms input");
const signup = document.querySelectorAll(".forms button");

const postdata=async(dat)=>{
    const response= await fetch("http://localhost:3000/signup",{
        method :'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(dat)
    });
    return response.json();
}


signup[0].addEventListener('click', async(e) => {
    var data={}

    
    if (formelement[0].value != "" && formelement[1].value != "" && formelement[2].value != "" && formelement[3].value != "") {
        if (formelement[2].value != formelement[3].value) {
            alert("Password Does not match")
        }
        else {
            data = {
                "username": formelement[0].value,
                "email": formelement[1].value,
                "password": formelement[2].value,

            }
            const data1 =await postdata(data).then((data2)=>{
                alert(data2.message);
                e.preventDefault();
                console.log(data2.message)
                if(data2.message==="user created"){
                    window.location.href="http://localhost:3000/"
                }
        })
        
    
            
}}});

        





