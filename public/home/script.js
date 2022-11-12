
document.getElementById("add").addEventListener("click", displayDate);
        function displayDate() {
            document.getElementById('add').innerHTML = Date();
            document.getElementById('add').style.color = 'white';
            document.getElementById('add').style.fontSize="20"; 
        }