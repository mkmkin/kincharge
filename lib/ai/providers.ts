import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from 'ai';
import { xai } from '@ai-sdk/xai';
import { isTestEnvironment } from '../constants';
import {
  artifactModel,
  chatModel,
  reasoningModel,
  titleModel,
} from './models.test';

export const myProvider = isTestEnvironment
  ? customProvider({
      languageModels: {
        'chat-model': chatModel,
        'chat-model-reasoning': reasoningModel,
        'title-model': titleModel,
        'artifact-model': artifactModel,
      },
    })
  : customProvider({
      languageModels: {
        'chat-model': xai('grok-3-latest'),
        'chat-model-reasoning': wrapLanguageModel({
          model: xai('grok-3-mini-latest'),
          middleware: extractReasoningMiddleware({ tagName: 'think' }),
        }),
        'title-model': xai('grok-3-latest'),
        'artifact-model': xai('grok-3-latest'),     
      },
      imageModels: {
        'small-model': xai.image('grok-2-image-latest'),
      },
      'search_parameters': {
            'mode': 'on',
            'return_citations': True
      },
    });
