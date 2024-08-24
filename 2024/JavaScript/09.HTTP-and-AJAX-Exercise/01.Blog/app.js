function attachEvents() {
    POSTS_URL =  'http://localhost:3030/jsonstore/blog/posts'
    COMMENTS_URL = 'http://localhost:3030/jsonstore/blog/comments'


    const loadPostsButton = document.getElementById('btnLoadPosts');
    const viewPostButton = document.getElementById('btnViewPost');
    const postsSelectionElement = document.getElementById('posts');
    const postBodyElement = document.getElementById('post-body');
    const postCommentsElement = document.getElementById('post-comments');
    const postTitleElement = document.getElementById('post-title');
    postTitleElement.textContent = 'Unit Testing And Modules'
    postBodyElement.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis maiores eligendi quos quidem ex numquam hic. Eos quos similique voluptates accusamus quae voluptas magni ad a ipsum, quia enim debitis cumque quibusdam exercitationem architecto sint nostrum dolorum dolor repudiandae nulla deserunt, dolorem itaque!'


    loadPostsButton.addEventListener(
        'click',
        () => {
            // clear content
            postsSelectionElement.innerHTML = '';
            // postBodyElement.innerHTML = '';
            postCommentsElement.innerHTML = '';

            fetch(POSTS_URL)
            .then((res) => res.json())
            .then((jsonData) => {
                const postsData = jsonData;
                Object.values(postsData).forEach(
                    (entry) => {
                        const newOption = document.createElement('option');
                        newOption.textContent = entry.title;
                        newOption.value = entry.id;
                        postsSelectionElement.appendChild(newOption);
                    }
                );

                viewPostButton.addEventListener(
                    'click',
                    () => {
                        const selectedPostId = postsSelectionElement.querySelector('option:checked').value;
                        postBodyElement.textContent = postsData[selectedPostId].body
                        postTitleElement.textContent = postsData[selectedPostId].title


                        // fetch(`${POSTS_URL}/${selectedPostId}/body`).then(resolve => resolve.json()).then(
                        //     data => {
                        //         postBodyElement.textContent = data
                        //     }
                        // );
                        fetch(COMMENTS_URL).then(resolve => resolve.json()).then(
                            data => {
                                postCommentsElement.innerHTML = '' // clear content
                                const postCommentsData = Object.values(data).filter(obj => obj.postId === selectedPostId);
                                postCommentsData.forEach(
                                    (comment) => {
                                        const newCommentLiElement = document.createElement('li')
                                        newCommentLiElement.textContent = comment.text
                                        postCommentsElement.appendChild(newCommentLiElement)
                                    }
                                )
                            }
                        )
                    }
                )
            });
        }
    )
}

attachEvents();