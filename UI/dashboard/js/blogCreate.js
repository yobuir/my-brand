
const blogForm=document.getElementById("blogForm");
const error=document.getElementById("error");
let errMessage="";  
let user =  sessionStorage.getItem("loggedUser");
let Authuser =JSON.parse(user);  
const createPost = async (e) => {
    e.preventDefault();

    const blog_title= blogForm.blog_title.value; 
     const   snippet=blogForm.blog_snippet.value
    const blog_image= blogForm. blog_image.value; 
    const blog_body= blogForm. blog_body.value;

    const post= { 
        "title": blog_title,
        "body":blog_body,      
        "image": blog_image,
        "snippet": snippet
    }
 
    axios({
                url:`https://mybrandbackend.up.railway.app/api/posts/create`, 
                method:'post',
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
                        //    console.log(response); 
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
    // window.location.replace('/blog.html');
}

blogForm.addEventListener('submit', createPost);