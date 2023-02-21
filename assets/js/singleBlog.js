

// view single post 
const blogOpen=document.getElementById("blogOpen");
var identifier;
let content= ''; 
let user =  sessionStorage.getItem("loggedUser");
let loggUser =JSON.parse(user);
let errorMessage;
let likedByLogged='';
let errorBox=document.getElementById('errorBox');

const renderingSinglePost = async () => {

try {
    
    const postId= new URLSearchParams(window.location.search).get("id");

    let uri='https://fair-lime-beetle-toga.cyclic.app/posts/'+postId;
    const res=await fetch(uri);
    const post=await res.json();
 
    let urlLikes= "https://fair-lime-beetle-toga.cyclic.app/likes?post_id="+postId;
    const postLike=await fetch(urlLikes);
    const likes=await  postLike.json();

    let uriComment='https://fair-lime-beetle-toga.cyclic.app/comments?post_id='+postId;
    let resComment=await fetch(uriComment);
    let comments=await resComment.json();
 
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
                <img src="${post.image}"> 
                <p>${post.date}</p>
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

        let urlLikes= "https://fair-lime-beetle-toga.cyclic.app/likes/";
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
            
                    const url="https://fair-lime-beetle-toga.cyclic.app/likes";
                    await fetch(url, {
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify(like),
                        method: 'POST'

                    });

        
            }else{  
                const url="https://fair-lime-beetle-toga.cyclic.app/likes/"+checkLikes[0].id;
                    await fetch(url, { 
                        method: 'DELETE'

                    });
            } 
        } else {
                errorMessage="You need to be logged in";
            } 
    
    } catch (error) {
      errorMessage=error;  
    }

    if (errorMessage){
      window.alert(errorMessage);  
    }
    
 
}

// likePost();