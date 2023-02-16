const DeleteBlog = async (id) => {
    let uri='http://localhost:3000/posts/'+id;
    const res=await fetch(uri, {
        method : "DELETE"
    });
    window.location.replace('/blog.html');
}