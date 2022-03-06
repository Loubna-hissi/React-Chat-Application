import { useState } from "react";
import axios from "axios";
const Login = () => {
    const [username,setUsername]=useState('');
    const [password,setpassword]=useState('');
    const [error,setError]=useState('')
    const handleSubmit= async(e)=>{
        e.preventDefault();
        const authObject ={'Project-ID':"89d03ae5-22e0-4a9a-a993-43a70b943b31",'User-Name':username,'User-Secret':password};
        try {
            await axios.get('https://api.chatengine.io/chats',{headers:authObject})
            localStorage.setItem('username',username);
            localStorage.setItem('password',password);

            window.location.reload();
        } catch (error) {
            setError('Oops incorrect credentials');
        }

    }
    return ( 
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} className="input" placeholder="Username"/>
                    <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} className="input" placeholder="Password"/>
                    <div align="center">
                         <button type="submit" className="button">
                             <span>Start chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
     );
}
 
export default Login;