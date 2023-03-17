
const Form=document.getElementById("Form");
const error=document.getElementById("error");
let errMessage="";  

const createUser = async (e) => {
    e.preventDefault();

	try {


		const email= Form.email.value;
		const password= Form.password.value; 
		const user = {
			"email":"demotest@gmail.com",
  			"password":"test"
		}

			if ( email ===  "" || password ===  "") {
				errMessage="No valid data";
			}else{  

				await fetch('https://mybrandbackend.up.railway.app/api/auth/login',{
						method:'POST', 
						body:JSON.stringify(user)

					}).then((response)=>{
						console.log(response);
					});
				}
		
	} catch (error) {
		error.innerHTML=error; 
		
	}
  

         
error.innerHTML=errMessage; 
   
}
Form.addEventListener('submit', createUser); 