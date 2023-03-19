
let user =  sessionStorage.getItem("loggedUser");
let Authuser =JSON.parse(user);  
const baseUrl= 'https://mybrandbackend.up.railway.app/api';

const post = async ()=>{


let uri=`${baseUrl}/posts/all`; 

axios({
                url:uri, 
                method:'get',
                data:post,
                headers: {
                    Authorization: `Bearer ${Authuser.token}`,
                }}
                ).then(function (response) {  
                    document.getElementById('blogs').innerHTML=response.data.data.length
                }).catch(function (error) { 
                    Toastify({
                        text:`${error.data.message}`,
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
post()


const likes = async ()=>{


let uri=`${baseUrl}/likes/all`; 

axios({
                url:uri, 
                method:'get',
                data:post,
                headers: {
                    Authorization: `Bearer ${Authuser.token}`,
                }}
                ).then(function (response) {  
                    document.getElementById('likes').innerHTML=response.data.data.length
                }).catch(function (error) { 
                    Toastify({
                        text:`${error.data.message}`,
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
likes()



const users = async ()=>{


let uri=`${baseUrl}/users/all`; 

axios({
                url:uri, 
                method:'get',
                data:post,
                headers: {
                    Authorization: `Bearer ${Authuser.token}`,
                }}
                ).then(function (response) {  
                    document.getElementById('users').innerHTML=response.data.data.length
                }).catch(function (error) { 
                    Toastify({
                        text:`${error.data.message}`,
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
users()




const comments = async ()=>{


let uri=`${baseUrl}/comments/all`; 

axios({
                url:uri, 
                method:'get',
                data:post,
                headers: {
                    Authorization: `Bearer ${Authuser.token}`,
                }}
                ).then(function (response) {  
                    document.getElementById('comments').innerHTML=response.data.data.length
                }).catch(function (error) { 
                    Toastify({
                        text:`${error.data.message}`,
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
comments()