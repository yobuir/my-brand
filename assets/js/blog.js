const blogcontainer=document.getElementById("blogcontainer");
const loggedUser=document.getElementById('loggedUser');

let user =  sessionStorage.getItem("loggedUser");
let loggUser =JSON.parse(user);
 
if (loggUser != null) {
  loggedUser.innerHTML=loggUser[0].name;  
}


// console.log();
// view list of posts

const renderPosts= async () => {
    let content= '';
    try {
         let url='https://mybrandbackend.up.railway.app/api/posts/all';
        
        const res=await fetch(url);
        const result=await res.json();
        const posts=result.data;  
        

        if(posts.lenght <1){
            posts.forEach(post => { 
            content+=` 
            <div class="card" style="word-wrap: break-word;">
                <div class="white-background"> 
                    <div class="card-body" style="word-wrap: break-word;"> 
                        <a href="viewmore.html?id=${post.id}">
                            <h4> ${post.title}</h4>
                            <p>${post.body.slice(0,130)}</p>
                            <div class="card-footer">
                                <div>
                                    <small>${post.date}</small>
                                </div>
                                <div class="icon-footer">
                                    <div>
                                <!-- <i class="bi bi-heart"></i> -->
                                    <!-- <i class="bi bi-heart-fill"></i> -->
                                    </div>
                                    <!-- <div><i class="bi bi-chat-square-text"></i> 2423</div> -->
                                </div>
                            </div>
                        </a>
                    </div> 
                    <div class="card-header"
                        style="background-image:url('${post.image}');background-size:cover;background-repeat: no-repeat;">
                    </div>
                    
                </div> 
            </div>
            
            `       
        });
        }else{
            content+=` 
            <div class="card error" style="word-wrap: break-word;">
                <div class="white-background"> 
                    <div class="card-body" style="word-wrap: break-word;">
                    <h4>No blog post yet </h4>
                    </div> 
                <div>
            </div>
                    `;
        }
    } catch (error) {
        content+=` 
            <div class="card error" style="word-wrap: break-word;">
                <div class="white-background"> 
                    <div class="card-body" style="word-wrap: break-word;">
                    <h4>No blog posts yet </h4>
                    <small>${error}</small>
                    </div> 
                <div>
            </div>
        `;
    }
   
   

        blogcontainer.innerHTML=content;
}

renderPosts();