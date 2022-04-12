import React, {useContext} from "react";

import { Context } from "../context";
import axios from "axios";
import { useRouter } from "next/dist/client/router";
import {Private_Key} from '../secrets';

export default function Auth() {
  const {username, setUsername, secret, setSecret} = useContext(Context);
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();

    if (!username || username.length === 0 || !secret || secret.length === 0) {
      return;
    }

    axios.put('https://api.chatengine.io/users/',
    {username, secret}, {headers: {"Private-key": Private_Key}})
    .then( response => {
      router.push('/chats')
    })
    .catch( err => console.log(err));
  }

  return <div className="background">
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="auth-title">NextChat</div>
        <div className="input-container">
          <input type='text' placeholder="Username" className="text-input" onChange={e => setUsername(e.target.value)} />
        </div>
        <div className="input-container"> 
          <input type='password' placeholder="Password" className="text-input" onChange={e => setSecret(e.target.value)} />
        </div>
        <button type='submit' className="submit-button" >Login/Sign Up</button>
      </form>
    </div>
  </div>;
}
