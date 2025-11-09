export const DEFAULT_CHAT_MODEL: string = 'chat-model';

export interface ChatModel {
  id: string;
  name: string;
  description: string;
}

export const chatModels: Array<ChatModel> = [
  {
    id: 'chat-model',
    name: 'Tech Agency',
    description: 'All-Purpose Tech Agency AI Assistant',
  },
  {
    id: 'chat-model-reasoning',
    name: 'Tech Agency R',
    description: 'Advanced Reasoning Tech Agency AI Assistant',
  },
];
