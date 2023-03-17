// view single post 
const blogOpen=document.getElementById("blogOpen");
var identifier;
let content= ''; 
let user =  sessionStorage.getItem("loggedUser");
let loggUser =JSON.parse(user);
let errorMessage;
let likedByLogged='';
let errorBox=document.getElementById('errorBox');
let logginError= 0;
let logginContainer = document.getElementById('logginContainer');
 
const renderingSinglePost = async () => {
try {
    
    const postId= new URLSearchParams(window.location.search).get("id"); 
    let uri='https://mybrandbackend.up.railway.app/api/posts/'+postId;
    const res=await fetch(uri);
    const postResponse=await res.json();
    const post=postResponse.data;

    let urlLikes= "https://mybrandbackend.up.railway.app/api/likes/"+postId;
    const postLike=await fetch(urlLikes);
    let likes=await  postLike.json();
     likes= likes.data;
    

    let uriComment='https://mybrandbackend.up.railway.app/api/comments/post/'+postId;
    let resComment=await fetch(uriComment);
    let comments=await resComment.json();
      comments=comments.data; 

    
 
    if (res.status == 404){
         content=`<div><h1>Not Found</h1></div>`;
    }else{  
         if (loggUser != null) { 
             likedByLogged=likes.filter(like => like.user_id === loggUser[0].id);
            //  console.log(likedByLogged);
         } else{
            // console.log("User")
         }
         content+=`
            <div class="header">
                <div class="img-cover" style="background-image:url('${post.image}')">
            
                </div> 
                <p>${post.createdAt}</p>
                <h1>${post.title}</h1>
            </div>
            <div class="contact-container">
                        <p>
                        ${post.body}
                        </p>
                        <div class="contact-footer"> 
                            <div class="icon-footer">
                                <form onclick='likePost(${post.id})' method="post">
                                ${likedByLogged.length != 0? '<i class="bi bi-heart-fill"></i>':'<i class="bi bi-heart"></i>'}
                                     ${likes.length} 
                                </form>
                                <div class="" id="comment_button" onclick="openModel(${post.id})"><i class="bi bi-chat-square-text"></i> ${comments.length}</div>
                            </div>
                        </div>
                    </div> 
    `;  
    }
    
    } catch (error) {
         
        content=error;
    }

    blogOpen.innerHTML=content;
}

renderingSinglePost();

 

let likePost= async (identifier) => {
    try {
        let urlLikes= "https://mybrandbackend.up.railway.app/api/likes/all";
        const postLike=await fetch(urlLikes);
        const likes=await  postLike.json();

    if (loggUser != null) { 
       const checkLikes= likes.filter(like => like.user_id === loggUser[0].id && like.post_id === identifier );
       if(checkLikes.length ==0){
         
            let like = {
                    liked:1,
                    post_id:identifier,
                    user_id:loggUser[0].id,
                    date:Date()
                
                }
            
                    const url="https://mybrandbackend.up.railway.app/api/likes/create";
                    await fetch(url, {
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify(like),
                        method: 'POST'

                    });

        
            }else{  
                const url="https://mybrandbackend.up.railway.app/api/likes/update/"+checkLikes[0].id;
                    await fetch(url, { 
                        method: 'PUT'

                    });
            } 
        } else {
                errorMessage="You need to be logged in";
            } 
    
    } catch (error) {
      errorMessage=error;  
    }

    if (errorMessage){
        window.location.replace('login.html');
    }
    
 
}

// likePost();