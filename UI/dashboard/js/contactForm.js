
const commentContainer=document.getElementById('commentContainer');
let content= '';

const LoadComments=async () => {
    try {

        let data=await fetch ('https://fair-lime-beetle-toga.cyclic.app/contacts');
        response=await data.json(data);
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
                            <div class="delete" style='cursor:pointer' onclick="deleteComment(${contact.id})">
                                Delete
                            </div>
            
                            <div>
                                <small>${contact.date}</small>
                            </div>
                        </div>
                    </div>
                    `
                });
     
        
    } catch (error) {
        
    }

commentContainer.innerHTML=content;
}


LoadComments()



const deleteComment = async (id) =>{
 let data=await fetch (`https://fair-lime-beetle-toga.cyclic.app/contacts/${id}`,{
    method: 'DELETE',
 }); 
    window.location.replace('./comments.html');
}