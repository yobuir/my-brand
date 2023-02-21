const modelBox=document.getElementById("model-box");
var comment_button=document.getElementById("comment_button");
var close_button=document.getElementById("closeButton");
const comment_content=document.getElementById('comment_content');
// console.log(comment_content);
let contentCommentList='';
let comment_form=document.getElementById('comment_form');


modelBox.style.display="none";
let user =  sessionStorage.getItem("loggedUser");
let loggUser =JSON.parse(user);
 
let postIdentifier= new URLSearchParams(window.location.search).get("id");;

// const addComment= () => {
//     const commented={
//         comment:comment_form.comment.value,
//         post_id:postIdentifier, 
//         user_id:loggUser[0].id,
//         date:Date()
//     }

// }
    const LoadComment = async(id) => {
      try {
        let uri='https://fair-lime-beetle-toga.cyclic.app/comments?post_id='+id;
        let res=await fetch(uri);
        let comments=await res.json();   
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

let  openModel = (id) =>{  
    modelBox.style.display="block"; 
}


function closeModel (){ 
    modelBox.style.display="none";    
        
}
 