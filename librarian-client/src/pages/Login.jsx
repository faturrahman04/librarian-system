import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [login, setLogin] = useState({username: '', password: ''});

  function handleSubmit(e) {
    e.preventDefault();

    const data = axios.post('http://localhost:3000/auth/login', {
      username: login.username,
      password: login.password 
    }, 
    {
      headers: {
        "Content-Type" : 'application/json'
      }
    });

    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 items-center w-80">
      <div className="w-full">
        <Label htmlFor="username">Username</Label>
        <Input 
          id="username" 
          placeholder="Masukkan username"
          value={login.username} 
          onChange={(e) => setLogin({...login, username: e.target.value})}
        />
      </div>
      
      <div className="w-full">
        <Label htmlFor="password" >Password</Label>
        <Input 
          id="password" 
          placeholder="Masukkan password"
          value={login.password}
          onChange={(e) => setLogin({...login, password: e.target.value})}
        />
      </div>

      <Button className="w-fit">Button</Button>
    </form>
  )
}

export default Login