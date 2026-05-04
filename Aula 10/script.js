let users = []
let posts = []

async function fetchData() {
    const userData = await fetch('https://jsonplaceholder.typicode.com/users')
    const postsData = await fetch('https://jsonplaceholder.typicode.com/posts')
    users = await userData.json()
    posts = await postsData.json()
}

async function setData(){
    await fetchData();

    const teste = users.map((user)=> {
        let postList = []
        posts.map((post) => {
            if(user.id == post.userId){
            return postList.push({postId: post.id, postTitle: post.title, postBody: post.body})
            }
        })
        return { userId: user.id, name: user.name, userPosts: postList}
    })

    console.log(teste)
}

setData();
