
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
             await fetch('http://localhost:3000/users', {
                method: 'POST',
                body: JSON.stringify(user),
                headers: { 'Content-Type': 'application/json' }
            }); 

             success="User created now you can login"

            }else{
                errMessage="Password not match";
            }
         }

        
console.log(errMessage);
error.innerHTML=errMessage;
success.innerHTML= success;
   
}

Form.addEventListener('submit', createUser);