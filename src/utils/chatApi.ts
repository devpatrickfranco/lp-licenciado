// simpleChatApi.ts
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const N8N_WEBHOOK_URL = 'https://n8n-n8n.i4khe5.easypanel.host/webhook/745dbf37-7120-4e56-aeb7-eadff6beacb3/chat';
const SESSION_KEY = 'damaface_chat_session_id';

function getOrCreateSessionId(): string {
  let sessionId = localStorage.getItem(SESSION_KEY);
  if (!sessionId) {
    sessionId = uuidv4();
    localStorage.setItem(SESSION_KEY, sessionId);
  }
  return sessionId;
}

export async function sendMessageToN8N(message: string): Promise<string> {
  const sessionId = getOrCreateSessionId();

  const body = {
    chatInput: message,
    sessionId: sessionId,
  };

  try {
    const response = await axios.post(N8N_WEBHOOK_URL, body);
    console.log('Resposta do servidor:', response.data);

    const output = response.data[0]['output']

    if (output) {
      return output;
    } else {
      console.warn('Formato de resposta inesperado:', response.data);
      return 'Desculpe, não consegui entender a resposta.';
    }

  } catch (error) {
    console.error('Erro ao enviar mensagem:', error);
    return 'Erro ao se comunicar com o servidor.';
  }
}
