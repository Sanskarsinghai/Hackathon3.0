
myloadfunction(){
    axios.get('')
  .then(function (response) {
    document.getElementById("name").innerHTML += response.name ;
    document.getElementById("gender").innerHTML += response.gender ;
    document.getElementById("degree").innerHTML += response.degree ;
    document.getElementById("clinic").innerHTML += response.clinic ;
    document.getElementById("location").innerHTML += response.loction ;
    document.getElementById("medicalno").innerHTML += response.medical_license_number ;
    document.getElementById("speciality").innerHTML += response.speciality ;
    document.getElementById("experience").innerHTML +=  response.experience ;
  },{ headers: {
    'Content-Type': 'application/json'   
  }})
  .catch(function (error) {
    console.log(error);
  })
}

