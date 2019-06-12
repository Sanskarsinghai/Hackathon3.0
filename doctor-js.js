  
function check(){
    const email = document.getElementById("email").value ;
    const password = document.getElementById("password").value ;
    axios.get('http://localhost:3000/password', {
        email: email ,
        password : password
  },{ headers: {
    'Content-Type': 'application/json'   
  }})
  .then(function (response) {
    if(response.status==200){
      window.open('http://localhost/doctors/password')
    }else{
      alert("error password or username") 
    }
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}  
