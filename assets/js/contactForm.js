 function submitContact () {
        var form=document.getElementById("form_Form").addEventListener("submit", async(e)=>{
            e.preventDefault(); 
            name= document.getElementById("name").value;
            email = document.getElementById("email").value;
            message = document.getElementById("message").value; 
        
            if (!name){

                document.getElementById("error").innerHTML="Name required";
            }
            else if (!email){
                document.getElementById("error").innerHTML="Email required";
            }
            else if (!message){
                document.getElementById("error").innerHTML="Message required";
            }else if (email){  
                    document.getElementById("error").innerHTML="";

                    const messageContent= {
                        name:name,
                        email:email,
                        message:message,
                        date:new Date()
                    } 
                    try {

                          const requestSent=  await fetch('https://mybrandbackend.up.railway.app/api/contacts/create',{
                            method: 'POST',
                            headers:{'content-type': 'application/json'},
                            body:JSON.stringify(messageContent)

                        });                        
                          
                            document.getElementById("name").value=""; 
                            document.getElementById("email").value="";
                            document.getElementById("message").value=""; 
                            Toastify({
                                text:`Your response have been saved`,
                                duration: 3000,  
                                close: true,
                                gravity: "top", // `top` or `bottom`
                                position: "right", // `left`, `center` or `right`
                                stopOnFocus: true, // Prevents dismissing of toast on hover  
                                onClick: function(){} // Callback after click
                                }).showToast(); 
                        
                    } catch (error) {
                        document.getElementById("error").innerHTML='FAILED...', error;
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
        
            }

        });
 }