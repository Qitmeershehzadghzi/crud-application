// // const apiURL = 'https://66f91d902a683ce97310f352.mockapi.io/posts';

// // // Fetch and display posts
// // function fetchPosts() {
// //     fetch(apiURL)
// //         .then(response => response.json())
// //         .then(data => displayData(data))
// //         .catch(error => console.log('error', error));
// // }
// // fetchPosts();

// // function displayData(posts) {
// //     const postsParentDiv = document.getElementById('posts');
// //     postsParentDiv.innerHTML = '';
// //     posts.forEach(post => {
// //         const postDiv = document.createElement('div');
// //         postDiv.classList.add('post');

// //         postDiv.innerHTML = `
// //             <div class="post-header">
// //                 <img src="${post.avatar}" alt="Avatar">
// //                 <div>
// //                     <h3>${post.name}</h3>
// //                     <small>${post.createdAt}</small>
// //                 </div>
// //             </div>
// //             <h3>${post.title}</h3>
// //             <p>${post.body}</p>
// //             <div class="actions">
// //                 <button class="edit-btn" onclick="createpost(${post.id})">Edit</button>
// //                 <button class="delete-btn" onclick="deletePost(${post.id})">Delete</button>
// //             </div>
// //         `;
// //         postsParentDiv.appendChild(postDiv);
// //     });
// // }

// // // Create Post
// // document.getElementById('createPostForm').addEventListener('submit', function (e) {
// //     e.preventDefault();

// //     const name = document.getElementById('name').value;
// //     const title = document.getElementById('title').value;
// //     const avatar = document.getElementById('avatar').value;
// //     const body = document.getElementById('body').value;

// //     const newPost = {
// //         name: name,
// //         title: title,
// //         avatar: avatar,
// //         body: body,
// //         createdAt: new Date().toISOString()
// //     };

// //     fetch(apiURL, {
// //         method: 'POST',
// //         headers: {
// //             'Content-Type': 'application/json'
// //         },
// //         body: JSON.stringify(newPost)
// //     })
// //         .then(response => response.json())
// //         .then(data => {
// //             console.log(data);
// //             fetchPosts();
// //         })
// //         .catch(error => console.log(error));
// // });

// // // Delete Post
// // function deletePost(id) {
// //     fetch(`${apiURL}/${id}`, {
// //         method: 'DELETE',
// //     })
// //         .then(response => {
// //             if (response.ok) {
// //                 fetchPosts();
// //                 alert('Post deleted successfully');
// //             }
// //         })
// //         .catch(error => console.log('error', error));
// // }

// // // Open Edit Modal and pre-fill form with post data
// // function createpost(id, name, title, avatar, body) {
// //     document.getElementById('editPostId').value = id;
// //     document.getElementById('editName').value = name;
// //     document.getElementById('editTitle').value = title;
// //     document.getElementById('editAvatar').value = avatar;
// //     document.getElementById('editBody').value = body;

// //     document.getElementById('updatepost').style.display = 'block';
// // }

// // // Close Modal
// // function closeModal() {
// //     document.getElementById('editPostModal').style.display = 'none';
// // }

// // // Submit Edit Form and update post
// // document.getElementById('editPostForm').addEventListener('submit', function (e) {
// //     e.preventDefault();

// //     const id = document.getElementById('editPostId').value;
// //     const name = document.getElementById('editName').value;
// //     const title = document.getElementById('editTitle').value;
// //     const avatar = document.getElementById('editAvatar').value;
// //     const body = document.getElementById('editBody').value;

// //     const updatedPost = {
// //         name: name,
// //         title: title,
// //         avatar: avatar,
// //         body: body,
// //         createdAt: new Date().toISOString()
// //     };

// //     fetch(`${apiURL}/${id}`, {
// //         method: 'PUT',
// //         headers: {
// //             'Content-Type': 'application/json'
// //         },
// //         body: JSON.stringify(updatedPost)
// //     })
// //         .then(response => response.json())
// //         .then(data => {
// //             console.log(data);
// //             alert('Post updated successfully');
// //             closeModal();
// //             fetchPosts();
// //             window.location.reload();
// //         })
// //         .catch(error => console.log(error));
// // });


// //  function createpost(){

// // document.getElementById("createPostForm").addEventListener("submit", function(event) {
// //     event.preventDefault(); 
// //     const name = document.getElementById("name").value;
// //     const title = document.getElementById("title").value;
// //     const avatar = document.getElementById("avatar").value;
// //     const body = document.getElementById("body").value;

// //     if (name && title && avatar && body) {
// //         // Create a new post element
// //         const post = document.createElement("div");
// //         post.classList.add("post");
// //         post.innerHTML = `
// //             <h3>${title}</h3>
// //             <img src="${avatar}" alt="Avatar" width="50" height="50">
// //             <p><strong>Posted by:</strong> ${name}</p>
// //             <p>${body}</p>
// //             <hr>
// //         `;

// //         // Append the new post to the posts container
// //         document.getElementById("postsContainer").appendChild(post);

// //         // Clear the form fields
// //         document.getElementById("createPostForm").reset();
// //     } else {
// //         alert("Please fill in all fields before submitting!");
        
// //     }
    
// // })}



// const apiURL = 'https://66f91d902a683ce97310f352.mockapi.io/posts';

// // Fetch and display posts
// function fetchPosts() {
//     fetch(apiURL)
//         .then(response => response.json())
//         .then(data => displayData(data))
//         .catch(error => console.log('error', error));
// }
// fetchPosts();

// function displayData(posts) {
//     const postsParentDiv = document.getElementById('posts');
//     postsParentDiv.innerHTML = '';
//     posts.forEach(post => {
//         const postDiv = document.createElement('div');
//         postDiv.classList.add('post');

//         postDiv.innerHTML = `
//             <div class="post-header">
//                 <img src="${post.avatar}" alt="Avatar" width="50">
//                 <div>
//                     <h3>${post.name}</h3>
//                     <small>${post.createdAt}</small>
//                 </div>
//             </div>
//             <h3>${post.title}</h3>
//             <p>${post.body}</p>
//             <div class="actions">
//                 <button onclick="openEditModal(${post.id}, '${post.name}', '${post.title}', '${post.avatar}', '${post.body}')">Edit</button>
//                 <button onclick="deletePost(${post.id})">Delete</button>
//             </div>
//         `;
//         postsParentDiv.appendChild(postDiv);
//     });
// }

// // Create Post
// document.getElementById('createPostForm').addEventListener('submit', function (e) {
//     e.preventDefault();

//     const name = document.getElementById('name').value;
//     const title = document.getElementById('title').value;
//     const avatar = document.getElementById('avatar').value;
//     const body = document.getElementById('body').value;

//     const newPost = {
//         name: name,
//         title: title,
//         avatar: avatar,
//         body: body,
//         createdAt: new Date().toISOString()
//     };

//     fetch(apiURL, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(newPost)
//     })
//         .then(response => response.json())
//         .then(() => {
//             fetchPosts();
//             document.getElementById('createPostForm').reset();
//         })
//         .catch(error => console.log(error));
// });

// // Delete Post
// function deletePost(id) {
//     fetch(`${apiURL}/${id}`, {
//         method: 'DELETE',
//     })
//         .then(response => {
//             if (response.ok) {
//                 fetchPosts();
//                 alert('Post deleted successfully');
//             }
//         })
//         .catch(error => console.log('error', error));
// }

// // Open Edit Modal and pre-fill form with post data
// function openEditModal(id, name, title, avatar, body) {
//     document.getElementById('editPostId').value = id;
//     document.getElementById('editName').value = name;
//     document.getElementById('editTitle').value = title;
//     document.getElementById('editAvatar').value = avatar;
//     document.getElementById('editBody').value = body;

//     document.getElementById('editPostModal').classList.remove('hidden');
// }

// // Close Modal
// function closeModal() {
//     document.getElementById('editPostModal').classList.add('hidden');
// }

// // Submit Edit Form and update post
// document.getElementById('editPostForm').addEventListener('submit', function (e) {
//     e.preventDefault();

//     const id = document.getElementById('editPostId').value;
//     const name = document.getElementById('editName').value;
//     const title = document.getElementById('editTitle').value;
//     const avatar = document.getElementById('editAvatar').value;
//     const body = document.getElementById('editBody').value;

//     const updatedPost = {
//         name: name,
//         title: title,
//         avatar: avatar,
//         body: body,
//         createdAt: new Date().toISOString()
//     };

//     fetch(`${apiURL}/${id}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(updatedPost)
//     })
//         .then(response => response.json())
//         .then(() => {
//             closeModal();
//             fetchPosts();
//             alert('Post updated successfully');
//         })
//         .catch(error => console.log(error));
// });











const apiURL = 'https://66f91d902a683ce97310f352.mockapi.io/posts';

// Fetch and display posts
function fetchPosts() {
    fetch(apiURL)
        .then(response => response.json())
        .then(data => displayData(data))
        .catch(error => console.log('error', error));
}
fetchPosts();

function displayData(posts) {
    const postsParentDiv = document.getElementById('posts');
    postsParentDiv.innerHTML = '';
    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');

        postDiv.innerHTML = `
            <div class="post-header">
                <img src="${post.avatar}" alt="Avatar">
                <div>
                    <h3>${post.name}</h3>
                    <small>${new Date(post.createdAt).toLocaleString()}</small>
                </div>
            </div>
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <div class="actions">
                <button onclick="openEditModal(${post.id}, '${post.name}', '${post.title}', '${post.avatar}', '${post.body}')">Edit</button>
                <button onclick="deletePost(${post.id})">Delete</button>
            </div>
        `;
        postsParentDiv.appendChild(postDiv);
    });
}

// Create Post
document.getElementById('createPostForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const avatar = document.getElementById('avatar').value;
    const body = document.getElementById('body').value;

    const newPost = {
        name: name,
        title: title,
        avatar: avatar,
        body: body,
        createdAt: new Date().toISOString()
    };

    fetch(apiURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
    })
    .then(() => {
        fetchPosts();
        document.getElementById('createPostForm').reset();
    })
    .catch(error => console.log(error));
});

// Delete Post
function deletePost(id) {
    fetch(`${apiURL}/${id}`, { method: 'DELETE' })
        .then(() => fetchPosts())
        .catch(error => console.log('error', error));
}

// Open Edit Modal and pre-fill form with post data
function openEditModal(id, name, title, avatar, body) {
    document.getElementById('editPostId').value = id;
    document.getElementById('editName').value = name;
    document.getElementById('editTitle').value = title;
    document.getElementById('editAvatar').value = avatar;
    document.getElementById('editBody').value = body;
    document.getElementById('editPostModal').classList.remove('hidden');
}

// Close Modal
function closeModal() {
    document.getElementById('editPostModal').classList.add('hidden');
}

// Submit Edit Form and update post
document.getElementById('editPostForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const id = document.getElementById('editPostId').value;
    const updatedPost = {
        name: document.getElementById('editName').value,
        title: document.getElementById('editTitle').value,
        avatar: document.getElementById('editAvatar').value,
        body: document.getElementById('editBody').value,
        createdAt: new Date().toISOString()
    };

    fetch(`${apiURL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedPost)
    })
    .then(() => {
        fetchPosts();
        closeModal();
    })
    .catch(error => console.log('error', error));
});
