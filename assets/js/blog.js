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
    let url='https://my-backend-y2ud.onrender.com/posts';
    
    const res=await fetch(url);
    const posts=await res.json();
    // console.log(posts);

    let content= '';
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

        blogcontainer.innerHTML=content;
}

renderPosts();