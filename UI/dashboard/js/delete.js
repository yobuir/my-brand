const DeleteBlog = async (id) => {
    let user =  sessionStorage.getItem("loggedUser");
    let Authuser =JSON.parse(user); 
    let uri=`${baseUrl}/posts/${id}`;
    axios({
        url:uri, 
        method:'DELETE',
        headers: {
            Authorization: `Bearer ${Authuser.token}`,
        }}
        ) .then(function (response) { 
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
                        window.location.replace="../blog.html"
                })
                .catch(function (error) { 
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

            }