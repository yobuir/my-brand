let modelBox=document.getElementById("model-box");
var comment_button=document.getElementById("comment_button");
var close_button=document.getElementById("closeButton");
var model_title=document.getElementById("model-title");
var error_message=document.getElementById("error-message");
let blogForm=document.getElementById("blogForm"); 
let identifier; 
let user =  sessionStorage.getItem("loggedUser");
let Authuser =JSON.parse(user);  
modelBox.style.display="none";

    let blog_title= blogForm.blog_title.value; 
    let blog_image= blogForm.blog_image.value; 
    let blog_body= blogForm.blog_body.value;


let  openModel = async(id) =>{  
    modelBox.style.display="block";  
    try {
        let uri='https://mybrandbackend.up.railway.app/api/posts/'+id;
        let res=await fetch(uri);
        let post=await res.json(); 
        post=post.data;
        model_title.innerHTML=post.title; 
        blogForm.blog_title.value=post.title; 
        blogForm.blog_image.value=post.image;
        blogForm.blog_body.value=post.body;
        blogForm.blog_snippet.value=post.snippet;
        identifier=post._id; 
    
    } catch (error) { 
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
    }
 
       
}

let UpdatePost = async (e) => {
//  console.log(identifier);
    e.preventDefault();  
    let post= { 
        "title": blogForm.blog_title.value,
        "body":blogForm.blog_body.value,      
        "image":  blogForm.blog_image.value, 
        "snippet":blogForm.blog_snippet.value
    }
     try { 
          axios({
                url:`https://mybrandbackend.up.railway.app/api/posts/update/${identifier}`, 
                method:'PUT',
                data:post,
                headers: {
                    Authorization: `Bearer ${Authuser.token}`,
                }}
                ).then(function (response) { 
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
                }).catch(function (error) { 
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
  
        // window.location.replace("/blog.html");
      } catch (error) { 
        console.log(error);
    }
 

    
}

blogForm.addEventListener('submit', UpdatePost); 



function closeModel (){ 
    modelBox.style.display="none";    
        
}
 