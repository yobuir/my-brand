
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

			try {
				let data=await fetch ('https://fair-lime-beetle-toga.cyclic.app/users');
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

					
			} catch (error) {
				console.log(error);
				errMessage=error;
			}
        	

        	}

         
error.innerHTML=errMessage; 
   
}
Form.addEventListener('submit', createUser); 