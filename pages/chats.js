import React, {useState, useEffect, useContext} from "react";

import {Context} from '../context';

import { useRouter } from "next/dist/client/router";
import dynamic from 'next/dynamic';

import {PROJECT_ID} from '../secrets';

// Dynamic importing in NextJS
const ChatEngine = dynamic( () => import('react-chat-engine').then(module => module.ChatEngine));
const MessageFormSocial = dynamic( () => import('react-chat-engine').then(module => module.MessageFormSocial));

export default function Chats() {
  const {username, secret} = useContext(Context);
  const router = useRouter();
  const [showChat, setShowChat] = useState(false);

  useEffect( () => {
    if (typeof document !== undefined) {
      setShowChat(true);
    }
  }, []);

  useEffect( () => {
    if (username === '' || secret === '') {
      router.push('/');
    }
  }, [username, secret]);

  if (!showChat) return <div>Failed to load, please try again...</div>

  return <div className="background">
    <div className="shadow">
      <ChatEngine 
        height='calc(100vh - 212px)'
        projectID={PROJECT_ID}
        userName={username}
        userSecret={secret}
        renderNewMessageForm={() => <MessageFormSocial />}
      />
    </div>
  </div>;
}
