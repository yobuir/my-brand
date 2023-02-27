
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
        	let data=await fetch ('https://my-backend-y2ud.onrender.com/users');
        	response=await data.json(data); 
        	let userLogged=response.filter(user =>user.email == email); 
        	if (JSON.stringify(userLogged) !== []) { 
				if(userLogged[0].password == password){
					// console.log('1',userLogged);
					sessionStorage.setItem("loggedUser",JSON.stringify(userLogged));
				
					errMessage="";
					window.location.replace('blog.html');
				}else{
					errMessage="Check password and try again.";

				}
        	
        	}else{ 
        		errMessage="user not found";
        		}
        	}

         
error.innerHTML=errMessage; 
   
}
Form.addEventListener('submit', createUser); 