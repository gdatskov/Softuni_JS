function attachEvents() {
    POSTS_URL =  'http://localhost:3030/jsonstore/blog/posts'
    COMMENTS_URL = 'http://localhost:3030/jsonstore/blog/comments'


    const loadPostsButton = document.getElementById('btnLoadPosts');
    const viewPostButton = document.getElementById('btnViewPost');
    const postsSelectionElement = document.getElementById('posts');
    const postBodyElement = document.getElementById('post-body');
    const postCommentsElement = document.getElementById('post-comments');


    loadPostsButton.addEventListener(
        'click',
        () => {
            // Some straightforward explanation what happens with chained promises
            // fetch(POSTS_URL)
            //     .then(
            //         (res) => {
            //             const response = res.json()
            //             console.log(response);
            //             console.log('requested json arrived,then parsed and returned as a promise');
            //             return response;
            //         }
            //     )
            //     .then(
            //         (jsonData) => {
            //             console.log(jsonData)
            //             console.log('json printed');

            //         }
            //     )

            // clear content
            postsSelectionElement.innerHTML = '';
            postBodyElement.innerHTML = '';
            postCommentsElement.innerHTML = '';


            fetch(POSTS_URL)
            .then((res) => res.json())
            .then((jsonData) => {
                const postsData = jsonData;
                // console.log(jsonData);
                Object.values(postsData).forEach(
                    (entry) => {
                        const newOption = document.createElement('option');
                        newOption.textContent = entry.title;
                        newOption.value = entry.id;
                        postsSelectionElement.appendChild(newOption);
                    }
                )
                viewPostButton.addEventListener(
                    'click',
                    () => {
                        const selectedPostId = postsSelectionElement.querySelector('option:checked').value;
                        fetch(`${POSTS_URL}/${selectedPostId}/body`).then(resolve => resolve.json()).then(
                            data => {
                                console.log(data);
                                postBodyElement.textContent = data
                            }
                        );
                        fetch(COMMENTS_URL).then(resolve => resolve.json()).then(
                            data => {
                                postCommentsElement.innerHTML = '' // clear content
                                const postCommentsData = Object.values(data).filter(obj => obj.postId === selectedPostId);
                                postCommentsData.forEach(
                                    (comment) => {
                                        const newCommentLiElement = document.createElement('li')
                                        newCommentLiElement.textContent = comment.text
                                        postCommentsElement.appendChild(newCommentLiElement)
                                        console.log(comment.text)
                                    }
                                )
                                // postComments.textContent = data
                            }
                        )

                    }
                )

                // Object.entries(postsData).forEach(([key, value]) => console.log(key, value))
                // postsSection.textContent = JSON.stringify(Object.values(jsonData)[0])
            });
            // fetch(POSTS_URL).then((res) => res.json()).then((jsonData) => {postsJson = jsonData});
            
        }
    )
}

attachEvents();