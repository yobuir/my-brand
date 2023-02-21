let modelBox=document.getElementById("model-box");
var comment_button=document.getElementById("comment_button");
var close_button=document.getElementById("closeButton");
var model_title=document.getElementById("model-title");
var error_message=document.getElementById("error-message");
let blogForm=document.getElementById("blogForm"); 
let identifier;

modelBox.style.display="none";



    let blog_title= blogForm.blog_title.value;
    let blog_date= blogForm. blog_date.value;
    let blog_image= blogForm. blog_image.value; 
    let blog_body= blogForm. blog_body.value;


let  openModel = async(id) =>{  
    modelBox.style.display="block";   
    console.log(id);

    try {
        let uri='https://fair-lime-beetle-toga.cyclic.app/posts/'+id;
        let res=await fetch(uri);
        let post=await res.json(); 
        model_title.innerHTML=post.title; 
        blogForm.blog_title.value=post.title;
         blogForm.blog_date.value=post.date;
         blogForm.blog_image.value=post.image;
         blogForm.blog_body.value=post.body;
         identifier=post.id;
    
    } catch (error) { 
        console.log(error);
    }
 
       
}



let UpdatePost = async (e) => {

    e.preventDefault();  
    let post= { 
        "title": blogForm.blog_title.value,
        "body":blogForm.blog_body.value,      
        "image":  blogForm.blog_image.value,
        "date": blogForm.blog_date.value
    }
     try {
        await fetch('https://fair-lime-beetle-toga.cyclic.app/posts/'+identifier, {
            method: 'PUT',
            body: JSON.stringify(post),
            headers: { 'Content-Type': 'application/json' }
        }); 
        window.location.replace("/blog.html");
      } catch (error) { 
        console.log(error);
    }
 

    
}

blogForm.addEventListener('submit', UpdatePost); 



function closeModel (){ 
    modelBox.style.display="none";    
        
}
 