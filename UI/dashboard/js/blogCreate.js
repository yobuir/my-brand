
const blogForm=document.getElementById("blogForm");
const error=document.getElementById("error");
let errMessage="";  

const createPost = async (e) => {
    e.preventDefault();

    const blog_title= blogForm.blog_title.value;
    const blog_date= blogForm. blog_date.value;
    const blog_image= blogForm. blog_image.value; 
    const blog_body= blogForm. blog_body.value;

    const post= { 
        "title": blog_title,
        "body":blog_body,      
        "image": blog_image,
        "date": blog_date
    }

    await fetch('https://my-backend-y2ud.onrender.com/posts', {
        method: 'POST',
        body: JSON.stringify(post),
        headers: { 'Content-Type': 'application/json' }
    });
    window.location.replace('/blog.html');
}

blogForm.addEventListener('submit', createPost);