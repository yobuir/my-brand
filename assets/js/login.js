const Form=document.getElementById("Form");
const error=document.getElementById("error");
let errMessage="";  
const baseUrl= 'https://mybrandbackend.up.railway.app/api';

const createUser =   (e) => {
    e.preventDefault();
	try {
		  const email= Form.email.value;
			const password= Form.password.value; 
			
				if ( email ===  "" || password ===  "") {
					errMessage="No valid data";
				}else{  
					console.log("Email", email, password);
					const user = {
							email: email,password: password
					} 
					axios.post( `${baseUrl}/auth/login`,{email,password})
						.then(function (response) { 
								Toastify({
									text:`${response.data.message}`,
									duration: 3000,  
									close: true,
									gravity: "top", // `top` or `bottom`
									position: "right", // `left`, `center` or `right`
									stopOnFocus: true, // Prevents dismissing of toast on hover
									className:"dangerous", // 
									onClick: function(){} // Callback after click
									}).showToast();
									sessionStorage.setItem("loggedUser",JSON.stringify({data:response.data.data,token:response.data.token}));
									console.log(response.data);
							errMessage="";
							// window.location.replace('blog.html');
							})
							.catch(function (error) {
  
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


					}  
       
	} catch (error) {
		// console.log(error)  
			Toastify({
				text:`${error.message}`,
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
   
}
Form.addEventListener('submit', createUser); 