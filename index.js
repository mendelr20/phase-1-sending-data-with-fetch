 function submitData(name, email) {
     return fetch("http://localhost:3000/users",{
         method: "post",
         headers:{
            "Content-Type": "application/json",
            Accept: "application/json",
         },
         body: JSON.stringify({
            name,
            email,
          }),
     })
     .then(response => response.json())
     .then (user => document.body.append(user.id))
     .catch(error => document.body.append('Unauthorized Access'))   
 }
submitData()