const modelBox=document.getElementById("model-box");
var comment_button=document.getElementById("comment_button");
var close_button=document.getElementById("closeButton");
const comment_content=document.getElementById('comment_content');
// console.log(comment_content);
let contentCommentList='';
let comment_form=document.getElementById('comment_form');
let errorDiv=document.getElementById('errorDiv');
let successDiv=document.getElementById('successDiv');
modelBox.style.display="none";
const userLg =  sessionStorage.getItem("loggedUser");
const Authuser =JSON.parse(userLg); 
const baseUrl= 'https://mybrandbackend.up.railway.app/api';

let postIdentifier= new URLSearchParams(window.location.search).get("id");;

    const LoadComment = async(id) => {
      try {
        let uri=`${baseUrl}/comments/post/${id}`;
        let res=await fetch(uri);
        let comments=await res.json();  
        comments = comments.data;


    

        comments.forEach(  (comment) => {
               //finding user 
             contentCommentList+=` 
                  <div class="comment">
                        <div class="header">
                            <div class="profile"> 
                                <div class="identity">
                                    <div class="name">
                                        <span> [User]</span>
                                    </div>
                                    <div class="date">
                                        <small>${comment.createdAt}</small>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="more">
                                <i class="bi bi-three-dots"></i>
                            </div>  -->
                        </div>
                        <div class="body">
                            <p>${comment.comment}</p>
                        </div>
                    </div>
             `;
        });

        comment_content.innerHTML=contentCommentList;
        } catch (error) {  
             comment_content.innerHTML=error;
        }  
    }

LoadComment(postIdentifier);   
const addComment= async() => {
      try { 
        const comment=comment_form.comment.value;
        const user_id = Authuser.data._id;
        const data= {
            user_id:user_id,post_id:postIdentifier,comment:comment
        }
        // console.log(data);
        axios({
            url:`${baseUrl}/comments/create`,
            data:data,
            method:'POST',
            headers: {
                Authorization: `Bearer ${Authuser.token}`,
              }}
              )
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
                    // console.log(error);
                });
        comment_form.comment.value=""; 
        
      } catch (error) {  
        //   console.log(error);
          Toastify({
                        text:`Comment not added`,
                        duration: 3000,  
                        close: true,
                        gravity: "top", // `top` or `bottom`
                        position: "right", // `left`, `center` or `right`
                        stopOnFocus: true, // Prevents dismissing of toast on hover
                        className:"dangerous", // 
                        onClick: function(){} // Callback after click
                        }).showToast(); 
            errorDiv.innerHTML="Comment not added ";
        }  
   
};

comment_form.addEventListener("submit",function (event) {
    event.preventDefault();
    addComment();  
});





let  openModel = (id) =>{  
    modelBox.style.display="block"; 
    if (Authuser === null) {
           comment_form.innerHTML="You need to be logged in first. <span><a href='login.html'>login</a> or <a href='signup.html'>Signup</a></span>";
    }else{
     
    }
}



function closeModel (){ 
    modelBox.style.display="none";    
        
}
 