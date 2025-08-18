import React, { useEffect, useState } from "react";

export default function GitHub(){
    const [followers, setFollowers] = useState([]);
    useEffect(() => {
        fetch('https://api.github.com/users/doer431').then(
            response => response.json()
        ).then(data => {
            console.log(data);
            setFollowers(data);
        })
    },[])

    return (
        <div>
            <img src={followers.avatar_url} alt="" />
            GitHub Followers: {followers.followers}
            <br />
            Pulic Repo : {
                followers.public_repos
            }
        </div>
    )
}