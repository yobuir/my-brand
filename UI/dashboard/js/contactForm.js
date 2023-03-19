
const commentContainer=document.getElementById('commentContainer');
let content= '';
let user =  sessionStorage.getItem("loggedUser");
let Authuser =JSON.parse(user); 

const LoadComments=async () => {
    try {

        let uri='https://mybrandbackend.up.railway.app/api/contacts/all';
        let res=await fetch(uri, {headers: {
                    Authorization: `Bearer ${Authuser.token}`,
                }});
        let response=await res.json(res);  
      
        response=response.data;
         response.forEach(contact => {
         
            content+=`
                    <div class="card">
                        <div class="card-header">
                            <div class="profile">
                                <div class="name">${contact.name}</div>
                                <div class="email">${contact.email}</div>
                            </div>
                        </div>
                        <div class="card-body">
                            <p>${contact.message}</p>
                        </div>
                        <div class="card-footer">
                            <div class="delete" style='cursor:pointer' onclick="deleteComment('${contact._id}')">
                                Delete
                            </div>
            
                            <div>
                                <small>${contact.createdAt}</small>
                            </div>
                        </div>
                    </div>
                    `
                });
     
        
    } catch (error) {
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

commentContainer.innerHTML=content;
}


LoadComments()



const deleteComment = async (id) =>{
    let uri = `https://mybrandbackend.up.railway.app/api/comments/${id}`
    axios({
        url:uri, 
        method:'DELETE',
        headers: {
            Authorization: `Bearer ${Authuser.token}`,
        }}
        ).then(function (response) { 
                console.log(response);
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
                        window.location.replace="../blog.html"
                })
                .catch(function (error) { 
                    // console.log(error);
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