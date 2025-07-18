export const DEFAULT_CHAT_MODEL: string = 'chat-model';

export interface ChatModel {
  id: string;
  name: string;
  description: string;
}

export const chatModels: Array<ChatModel> = [
  {
    id: 'chat-model',
    name: 'AI System',
    description: 'All-Purpose AI System',
  },
  {
    id: 'chat-model-reasoning',
    name: 'AI System R',
    description: 'Advanced Reasoning AI System',
  },
];
