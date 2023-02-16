

// view single post 


const blogOpen=document.getElementById("blogOpen");

const renderingSinglePost = async () => {

    const id= new URLSearchParams(window.location.search).get("id");

    let uri='http://localhost:3000/posts/'+id;
    const res=await fetch(uri);
    const post=await res.json();
    // console.log(post);

    let content= '';
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
                        <div>
                            <i class="bi bi-heart"></i> 789
                            <!-- <i class="bi bi-heart-fill"></i> -->
                        </div>
                        <div class="" id="comment_button" onclick="openModel()"><i class="bi bi-chat-square-text"></i> 2423</div>
                    </div>
                </div>
            </div> 
    `;
    blogOpen.innerHTML=content;
}

renderingSinglePost();