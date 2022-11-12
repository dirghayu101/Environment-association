const fields = document.getElementsByClassName("content2")
const sub = document.getElementsByClassName("submit")
console.log(sub)
// function myFunction() {
//     document.getElementById("fname").style.color = "red";
//   }
  const postdata=async(dat)=>{
    const response= await fetch("http://localhost:3000/contactus",{
        method :'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(dat)
    });
    return response.json();
}
sub[0].addEventListener('click', async(e) => {
  var data={}

  e.preventDefault();
  if (fields[0].value != "" && fields[1].value != "" && fields[2].value != "" && fields[3].value != "") {
      
      
      
          data = {
              "firstName": fields[0].value,
              "lastName": fields[1].value,
              "email": fields[2].value,
              "comment": fields[3].value,

          }
          const data1 =await postdata(data).then((data2)=>{
        
              alert(data2.message);
              e.preventDefault();
              
               
      })
      
  
          
}});