document.getElementById('btn').addEventListener('click', ShowGitHubProfile)

function ShowGitHubProfile(){
    const user = document.getElementById('gusername').value
    const api = 'https://api.github.com/users/'+user
    fetch(api).then(res => res.json()).then(data => {
        if (data.message){
            alert("User ("+user+") Not Found On GitHub")
        }
        else{
            const username = data.login
            const name = data.name
            const avatar = data.avatar_url
            const bio = data.bio
            const followers = data.followers
            const post = data.public_repos
            const following = data.following
            const company = data.company
            const twitter = data.twitter_username
            const creat = data.created_at
            document.getElementById('username').innerHTML = username
            document.getElementById('avatar').src = avatar
            document.getElementById('des').innerHTML = name
            document.getElementById('bio').innerHTML = bio
            document.getElementById('followers-count').innerHTML = followers
            document.getElementById('post-count').innerHTML = post
            document.getElementById('following-count').innerHTML = following
            document.getElementById('company').innerHTML = company
            document.getElementById('twitter').innerHTML = twitter
            document.getElementById('creatAt').innerHTML = creat
        }
    }).catch(err => {
        console.log(err)
    })
}