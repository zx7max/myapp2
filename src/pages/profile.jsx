function ProfilePage() {
    console.log(localStorage.getItem('Access'));
    let access = Boolean(+localStorage.getItem('Access'));
    console.log(access);
    if (access===true)
        {
        console.log(access + ' ' + "allow");     
        return ( 
            <div>
                <h1>Профайл</h1>
                <p>Только для избранных</p> 
                <p>Поздравляю !!!</p>    
            </div> );
        } else {
        console.log(access + ' '+ "deny");
        return ( 
            <div><h1>Доступ запрещен</h1></div>
            );
        }

}

export {ProfilePage};