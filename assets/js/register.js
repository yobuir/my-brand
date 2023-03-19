
const Form=document.getElementById("Form");
const error=document.getElementById("error");
let errMessage=""; 
let success=document.getElementById("success"); 
const baseUrl= 'https://mybrandbackend.up.railway.app/api';
const createUser = async (e) => {
    e.preventDefault();

    try {

        const name= Form.name.value;
        const email= Form.email.value;
        const password= Form.password.value; 
        const confirm_password= Form.cpassword.value; 
        const role = 'user';

        if (name ===  "" || email ===  "" || password ===  "") {
             errMessage="No valid data";
        }else{ 
            if (password == confirm_password ) {

            const user= {  
                  name: name,
                  email:email,
                  password: password,
                  confirm_password:confirm_password,
                  role: "user"
            }   
	            axios.post( `${baseUrl}/users/create`,{name,email,confirm_password,password,role})
                    .then(function (response) { 
                    Toastify({
                        text:`${response.data.message}`,
                        duration: 3000,  
                        close: true,
                        gravity: "top", // `top` or `bottom`
                        position: "right", // `left`, `center` or `right`
                        stopOnFocus: true, // Prevents dismissing of toast on hover 
                        onClick: function(){} // Callback after click
                        }).showToast();
		
	                    window.location.replace('login.html');
                    }).catch (function (error) {
		            console.log(error.response.data.message);  
                    Toastify({
                        text:`${error.response.data.message}`,
                        duration: 3000,  
                        close: true,
                        gravity: "top", // `top` or `bottom`
                        position: "right", // `left`, `center` or `right`
                        stopOnFocus: true, // Prevents dismissing of toast on hover
                        className:"dangerous", // 
                        onClick: function(){} // Callback after click
                        }).showToast();
		
	                    });

             success="User created now you can login"
            //   window.location.replace('login.html')

            }else{
                errMessage="Password not match";
            }
         } 
        
    } catch (error) {
        console.log(error);
         Toastify({
                text:`${error}`,
                duration: 3000,  
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                className:"dangerous", // 
                onClick: function(){} // Callback after click
                }).showToast();
		
	                
    }
      
error.innerHTML=errMessage;
// success.innerHTML= success;
   
}

Form.addEventListener('submit', createUser);