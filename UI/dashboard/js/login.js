
const Form=document.getElementById("Form");
const error=document.getElementById("error");
let errMessage="";  

const createUser = async (e) => {
    e.preventDefault();

    const email= Form.email.value;
    const password= Form.password.value; 

        if ( email ===  "" || password ===  "") {
             errMessage="No valid data";
        }else{  
        	let data=await fetch ('http://localhost:3000/users');
        	response=await data.json(data);
        	// console.log(response);
        	let userLogged=response.filter(user =>user.email == email && user.password == password);
        	if (JSON.stringify(userLogged) !== []) {
        		// console.log(userLogged);
                sessionStorage.setItem("loggedUser",JSON.stringify(userLogged));
              
                errMessage="";
                window.location.replace('home.html')
        	}else{ 
        		errMessage="user not found";
        		}
        	}

         
error.innerHTML=errMessage; 
   
}
Form.addEventListener('submit', createUser); 