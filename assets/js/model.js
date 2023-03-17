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
console.log(Authuser);
let postIdentifier= new URLSearchParams(window.location.search).get("id");;

    const LoadComment = async(id) => {
      try {
        let uri='https://mybrandbackend.up.railway.app/api/comments/post/'+id;
        let res=await fetch(uri);
        let comments=await res.json();  
        comments = comments.data;
        comments.forEach(comment => {
             contentCommentList+=` 
                  <div class="comment">
                        <div class="header">
                            <div class="profile">
                                <div class="image">
                                    <img src="/assets/images/_22_wallpaper-for-computer_256226981.jpg">
                                </div>
                                <div class="identity">
                                    <div class="name">
                                        <span>You ir</span>
                                    </div>
                                    <div class="date">
                                        <small>${comment.date}</small>
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
         const commented={
            comment:comment_form.comment.value,
            post_id:postIdentifier, 
            user_id:Authuser[0].id,
            date:Date()
        }
        await fetch('https://mybrandbackend.up.railway.app/api/comments/create',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(commented)

        });
        comment_form.comment.value="";
        successDiv.innerHTML="Comment added successfully";
        
      } catch (error) {  
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
 