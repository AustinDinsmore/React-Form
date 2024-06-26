import { useState } from "react";


export default function SignUpForm({token, setToken}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    async function handleSubmit(event) {
        event.preventDefault();
        try{
            if (username === "") {
                setErr("Please provide a username");
                return;
              }
              if (password === "") {
                setErr("Please provide a password");
                return;
              }
            const response = await fetch ("https://fsa-jwt-practice.herokuapp.com/signup", 
                {method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({username})
                }
            )
            const result = await response.json()
            setToken(result.token)
        }
        catch (error){
            setError(error.message)
        }
      }
    return (
        <><h2>Sign Up!</h2><form onSubmit={handleSubmit}>
            {error && <p>{error}</p>}
            <label>
                Username: <input value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
                Password: <input value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button>Submit</button>
        </form></>
    )
  }