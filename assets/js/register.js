
const Form=document.getElementById("Form");
const error=document.getElementById("error");
let errMessage=""; 
let success=document.getElementById("success"); 

const createUser = async (e) => {
    e.preventDefault();

    const name= Form.name.value;
    const email= Form.email.value;
    const password= Form.password.value; 
    const cpassword= Form.cpassword.value; 

        if (name ===  "" || email ===  "" || password ===  "") {
             errMessage="No valid data";
        }else{ 
            if (password == cpassword ) {

            const user= {  
                  "name": name,
                  "email":email,
                  "password": password,
                  "role": "user",
                  "date": Date()
            }
             await fetch('https://my-backend-y2ud.onrender.com/users', {
                method: 'POST',
                body: JSON.stringify(user),
                headers: { 'Content-Type': 'application/json' }
            }); 

             success="User created now you can login"
              window.location.replace('login.html')

            }else{
                errMessage="Password not match";
            }
         }       
error.innerHTML=errMessage;
// success.innerHTML= success;
   
}

Form.addEventListener('submit', createUser);