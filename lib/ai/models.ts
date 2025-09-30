export const DEFAULT_CHAT_MODEL: string = 'chat-model';

export interface ChatModel {
  id: string;
  name: string;
  description: string;
}

export const chatModels: Array<ChatModel> = [
  {
    id: 'chat-model',
    name: 'AI Assistant',
    description: 'All-Purpose AI Assistant',
  },
  {
    id: 'chat-model-reasoning',
    name: 'AI Assistant R',
    description: 'Advanced Reasoning AI Assistant',
  },
];
