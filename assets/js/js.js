 function submitContact () {
        var form=document.getElementById("form_Form")
        .addEventListener("submit",(e)=>{
            e.preventDefault(); 
            name= document.getElementById("name").value;
            email = document.getElementById("email").value;
            message = document.getElementById("message").value;
            var contact_number=document.getElementById('contact_number');
        
            if (!name){

                document.getElementById("error").innerHTML="Name required";
            }
            else if (!email){
                document.getElementById("error").innerHTML="Email required";
            }
            else if (!message){
                document.getElementById("error").innerHTML="Message required";
            }else if (email){

                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                    console.log(name); 

                    document.getElementById("error").innerHTML="";
                        contact_number = Math.random() * 100000 | 0;
                    console.log(form);
                        emailjs.sendForm('service_a3rhdtr', 'template_ec68t4q', document.getElementById("form_Form"))
                            .then(function(response) {
                             document.getElementById("success").innerHTML=` Your response have been saved,  `+name;
                                document.getElementById("name").value=""; 
                                document.getElementById("email").value="";
                                document.getElementById("message").value="";
                            }, function(error) {
                              document.getElementById("error").innerHTML='FAILED...', error;
                            });

                }else{
                    document.getElementById("error").innerHTML="Email format is not correct";
                    
                }
        
            }

        });
 }


    var burger_button= document.getElementById("burger_button"); 
    var navbar= document.getElementById("NavItems_icons"); 
    var close= document.getElementById("close"); 

function showNavabar (){ 
    burger_button.addEventListener("click", function (){
        navbar.style.display="block";  
        burger_button.style.display="none"
        close.style.display="block";
    });

   
   
}


function closeNavbar (){ 
     close.style.display="none";

     if(close){ 
         close.addEventListener("click", function (){
                navbar.style.display="none"; 
                burger_button.style.display="block"
                  close.style.display="none";
             });
    }

}


showNavabar();
closeNavbar();

 

// get blog

// function getBlogs () { 
//     const blogsList=localStorage.getItem('blogs');
//     const blogs=JSON.parse(blogsList); 
//     const blog_container=document.getElementById("blogcontainer");

//     if(blogs){
//         blog_container.innerHTML +=
//         blogs.map((blog) =>` 
//         <div class="card">
//             <div class="car-header" style="background-image:url('${blog.image}');background-size:cover;background-repeat: no-repeat;">
//             </div>
//             <div class="card-body">
//                 <p><a href="">${blog.title}</a>${blog.date}</p>
//                 <h4> ${blog.body}</h4>
//                 <div style="display:flex">
//                 <a href="javascript:void(0);" style="color:red;flex-grow:1;" onclick="deleteBlog(${blog.id})">Delete</a>
//                  <a href="javascript:void(0);" style="color:#04A6E4;flex-grow:1;" onclick="editBlog(${blog.id})">Edit</a>
                
//                 </div> 
//             </div>
//         </div>

//         `);
//     }else{
//          blog_container.innerHTML=
//         `
//             <div class="noblog"> 
//                 <div class="">
//                     No blogs found
//                 </div>
//             </div>
//        ` 
//     }
    
// }

function EditBlog(id) {
    console.log(id);
    
}


function   deleteBlog(id){

        var blogs = JSON.parse(localStorage.getItem("blogs"));
        for (let i = 0; i < blogs.length; i++) {
            if (blogs[i].id == id) {
            blogs.splice(i, 1);
            }
        }
        localStorage.setItem("blogs", JSON.stringify(blogs));
    }












function addBlog () { 
    let blogForm = document.getElementById("blogForm");
    blogForm.addEventListener("submit",function(e){
        e.preventDefault();
        const blog_title=document.getElementById("blog_title").value;
        const blog_date=document.getElementById("blog_date").value;
        const blog_body=document.getElementById("blog_body").value;
        const blog_image=document.getElementById("blog_image").value;   
 

    if(!blog_title || !blog_date || !blog_body || !blog_image) {
        document.getElementById("error").innerHTML="Please fill all the fields";
        
    }else{
        const blog= {
                        id:1,
                        title:blog_title,
                        date:blog_date,
                        body:blog_body,
                        image:blog_image
                    }


        var blogs = [];

        if (localStorage.getItem('blogs') == null){
            blogs.push(blog); 
            let blogContent = JSON.stringify(blogs); 
            localStorage.setItem("blogs",blogContent);

        }else{
 
            let blogsList=localStorage.getItem('blogs');
            let newblogs=JSON.parse(blogsList); 
            console.log(newblogs);

            let Newblog= {
                ...blog,id:(newblogs.length +1)
            };

            newblogs.push(Newblog);

            localStorage.setItem("blogs",JSON.stringify(newblogs));
        }
        document.getElementById("success").innerHTML="success";

    }
      
       
    });
   
} 