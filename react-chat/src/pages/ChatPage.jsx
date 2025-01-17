import React from 'react';
import { Chat } from '../components/Chat/Chat';
import { ChatForm } from '../components/ChatForm/ChatForm';
import { useStore } from '../hooks/useStore';
import { useParams } from 'react-router';
import { getUserInfo } from '../lib/getUserInfo';

export const ChatPage = () => {
  const { id } = useParams();
  const { 
    isChatPage, 
    setChatPage,
    setChatId,
    isReloadMessages,
    reloadMessages,
  } = useStore();
  const [chat, setChat] = React.useState(null);

  React.useEffect(() => {
    if (!isChatPage) {
      setChatPage();
      setChatId(id);
    }
  }, [id, isChatPage, setChatId, setChatPage]);

  React.useEffect(() => {
    if ((id && !chat) || isReloadMessages) {
      const chatInfo = getUserInfo(id);

      if (chatInfo) {
        setChat(chatInfo);
        reloadMessages(false);
      }
    }
  }, [chat, id, isReloadMessages, reloadMessages]);

  if (!chat) {
    return null;
  }

  return (
    <>
      <Chat chat={chat} />
      <ChatForm chatId={chat.id} />
    </>
  )
}
