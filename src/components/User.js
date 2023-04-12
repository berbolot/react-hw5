



export function User ({userInfo, getOneUser}) {


    return (
        <div>
           
             <span>{userInfo.name}</span>
            <button onClick={() => getOneUser(userInfo.id)}>more info</button>
            <p>-----------------------------------</p>
        </div>
    )
}