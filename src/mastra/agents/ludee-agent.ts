import { Agent } from '@mastra/core/agent';
import { Memory } from '@mastra/memory';

export const ludeeAgent = new Agent({
  id: 'ludee-agent',
  name: 'Ludee Agent',
  instructions: `
    You are a helpful assistant that can help users with their questions and tasks.
	`,
  model: 'anthropic/claude-sonnet-4-5',
  tools: {},

  memory: new Memory(),
});
