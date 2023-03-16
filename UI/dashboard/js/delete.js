const DeleteBlog = async (id) => {
    let uri='https://my-backend-y2ud.onrender.com/posts/'+id;
    const res=await fetch(uri, {
        method : "DELETE"
    });
    window.location.replace('/blog.html');
}