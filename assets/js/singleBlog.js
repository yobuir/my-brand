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
 const postId= new URLSearchParams(window.location.search).get("id"); 
const baseUr= 'https://mybrandbackend.up.railway.app/api';
 console.log(loggUser.data);
const renderingSinglePost = async () => {
try {
     
    let uri=`${baseUr}/posts/${postId}`;
    const res=await fetch(uri);
    const postResponse=await res.json();
    const post=postResponse.data;

    let urlLikes= `${baseUr}/likes/${postId}`;
    const postLike=await fetch(urlLikes);
    let likes=await  postLike.json();
     likes= likes.data;
    

    let uriComment=`${baseUr}/comments/post/${postId}`;
    let resComment=await fetch(uriComment);
    let comments=await resComment.json();
      comments=comments.data; 

    
 
    if (res.status == 404){
         content=`<div><h1>Not Found</h1></div>`;
    }else{  
         if (loggUser != null) { 
             likedByLogged=likes.filter(like => like.user_id ===loggUser.data._id);
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
        let likes=await  postLike.json();
        likes = likes.data 
        console.log(likes);

    if (loggUser != null) { 
       const checkLikes= likes.filter(like => like.user_id === loggUser.data._id && like.post_id === postId );
       console.log(checkLikes);
       if(checkLikes.length ==0){
         
            let like = {
                    liked:1,
                    post_id:postId,
                    user_id:loggUser.data._id
                
                }   
            axios({
                url:`${baseUr}/likes/create`,
                data:like,
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
                });
                

        
            }else{ 

                  let like = {
                    liked:0,
                    post_id:postId,
                    user_id:loggUser.data._id
                
                }
            axios({
                url:`${baseUr}/likes/update/${checkLikes[0].id}`,
                data:like,
                method:'PUT',
                headers: {
                    Authorization: `Bearer ${Authuser.token}`,
                }}
              )
            .then(function (response) { 
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
                })
                .catch(function (error) { 
                     console.log(error);
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
        } else {
                errorMessage="You need to be logged in";
            } 
    
    } catch (error) {
      errorMessage=error;  
      console.log(error);
    }

    // if (errorMessage){
    //     window.location.replace('login.html');
    // }
    
 
}

// likePost();