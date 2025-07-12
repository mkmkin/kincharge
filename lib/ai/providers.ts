import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from 'ai';
import { xai } from '@ai-sdk/xai';
import { mistral } from '@ai-sdk/mistral';
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
        'chat-model': mistral('mistral-small-2506'),
        'chat-model-reasoning': wrapLanguageModel({
          model: mistral('magistral-small-2506'),
          middleware: extractReasoningMiddleware({ tagName: 'think' }),
        }),
        'title-model': mistral('mistral-small-2506'),
        'artifact-model': mistral('mistral-small-2506'),     
      },
      imageModels: {
        'small-model': xai.image('grok-2-image-latest'),
      },
    });
