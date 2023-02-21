const DeleteBlog = async (id) => {
    let uri='https://fair-lime-beetle-toga.cyclic.app/posts/'+id;
    const res=await fetch(uri, {
        method : "DELETE"
    });
    window.location.replace('/blog.html');
}