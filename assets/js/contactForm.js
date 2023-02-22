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

                          const requestSent=  await fetch('https://fair-lime-beetle-toga.cyclic.app/contacts',{
                            method: 'POST',
                            headers:{'content-type': 'application/json'},
                            body:JSON.stringify(messageContent)

                        });                        
                         
                            document.getElementById("success").innerHTML=` Your response have been saved,  `+name;
                            document.getElementById("name").value=""; 
                            document.getElementById("email").value="";
                            document.getElementById("message").value="";
                      
                     
                        
                    } catch (error) {
                        document.getElementById("error").innerHTML='FAILED...', error;
                    }                
        
            }

        });
 }