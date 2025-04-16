// src/utils/AiNavConfig.ts

// Define the data structure for each AI tool
export interface AiTool {
  name: string; // Tool name
  description: string; // Tool description
  url: string; // Tool official website link
  icon: string; // Tool icon path (place under public/assets/images/tools/)
  tags: string[]; // Tool tags, for search or filtering
}

// Define the data structure for each category
export interface AiCategory {
  name: string; // Category name
  description: string; // Category description
  tools: AiTool[]; // List of tools in this category (Top 5)
}

// Configuration data for the AI navigation site
export const AiNavConfig: AiCategory[] = [
  {
    name: 'Text Generation & Writing Assistants',
    description:
      'AI tools to help you write articles, emails, creative copy, etc.',
    tools: [
      {
        name: 'ChatGPT',
        description:
          'Powerful conversational AI for writing, coding, Q&A, and more.',
        url: 'https://chat.openai.com/',
        icon: '/assets/images/tools/ailogo.png',
        tags: ['Conversation', 'Writing', 'General'],
      },
      {
        name: 'Copy.ai',
        description: 'AI tool focused on generating marketing copy.',
        url: 'https://www.copy.ai/',
        icon: '/assets/images/tools/ailogo.png',
        tags: ['Marketing', 'Copywriting', 'Ads'],
      },
      {
        name: 'Jasper',
        description:
          'Comprehensive enterprise-level AI content creation platform.',
        url: 'https://www.jasper.ai/',
        icon: '/assets/images/tools/ailogo.png',
        tags: ['Writing', 'Enterprise', 'Content Creation'],
      },
      {
        name: 'Notion AI',
        description: 'AI writing assistant integrated into Notion notes.',
        url: 'https://www.notion.so/product/ai',
        icon: '/assets/images/tools/ailogo.png',
        tags: ['Notes', 'Writing', 'Productivity'],
      },
      {
        name: 'Writesonic',
        description:
          'AI writing and image generation tool with various templates.',
        url: 'https://writesonic.com/',
        icon: '/assets/images/tools/ailogo.png',
        tags: ['Writing', 'SEO', 'Marketing'],
      },
    ],
  },
  {
    name: 'Image Generation & Editing',
    description:
      'AI tools to generate images from text descriptions or edit existing ones.',
    tools: [
      {
        name: 'Freepik AI Image Generator',
        description: 'High-quality artistic style image generation.',
        url: 'https://www.freepik.com/ai/image-generator?utm_source=toolify',
        icon: '/assets/images/tools/ailogo.png',
        tags: ['Text to Image', 'AI Image Generator'],
      },
      {
        name: 'Stable Diffusion',
        description:
          'Powerful open-source image generation model, deployable locally.',
        url: 'https://stablediffusionweb.com/', // Web UI example
        icon: '/assets/images/tools/ailogo.png',
        tags: ['Open Source', 'Image Generation', 'Customizable'],
      },
      {
        name: 'DALL·E 3',
        description: 'Integrated into ChatGPT Plus and Bing Image Creator.',
        url: 'https://openai.com/dall-e-3',
        icon: '/assets/images/tools/ailogo.png',
        tags: ['Image Generation', 'OpenAI', 'Creative'],
      },
      {
        name: 'Canva AI',
        description:
          'AI image generation and editing features integrated into the Canva design platform.',
        url: 'https://www.canva.com/ai-image-generator/',
        icon: '/assets/images/tools/ailogo.png',
        tags: ['Design', 'Image Generation', 'Easy-to-use'],
      },
      {
        name: 'Adobe Firefly',
        description: "Adobe's family of creative generative AI models.",
        url: 'https://www.adobe.com/sensei/generative-ai/firefly.html',
        icon: '/assets/images/tools/ailogo.png',
        tags: ['Adobe', 'Image Generation', 'Copyright Safe'],
      },
    ],
  },
  // --- Add more categories and tools here ---
  // Example: Video Generation
  {
    name: 'Video Generation & Editing',
    description: 'Tools using AI to quickly create and edit video content.',
    tools: [
      {
        name: 'Runway',
        description: 'Offers various AI video editing and generation features.',
        url: 'https://runwayml.com/',
        icon: '/assets/images/tools/ailogo.png',
        tags: ['Video Editing', 'Video Generation', 'Gen-2'],
      },
      {
        name: 'Pika',
        description: 'AI tool focused on text-to-video generation.',
        url: 'https://pika.art/',
        icon: '/assets/images/tools/ailogo.png',
        tags: ['Text-to-Video', 'Creative Video'],
      },
      {
        name: 'Synthesia',
        description:
          'Create AI avatar videos, suitable for training and presentations.',
        url: 'https://www.synthesia.io/',
        icon: '/assets/images/tools/ailogo.png',
        tags: ['Avatars', 'Training Video', 'Presentation'],
      },
      {
        name: 'InVideo AI',
        description:
          'Quickly generate videos with voiceover and subtitles from text prompts.',
        url: 'https://invideo.io/ai/',
        icon: '/assets/images/tools/ailogo.png',
        tags: ['Text-to-Video', 'Fast Generation', 'Automation'],
      },
      {
        name: 'Kapwing AI Tools',
        description:
          'Online video editor integrated with multiple AI features.',
        url: 'https://www.kapwing.com/ai',
        icon: '/assets/images/tools/ailogo.png',
        tags: ['Video Editing', 'AI Toolset', 'Online'],
      },
    ],
  },
  // Example: Code Development
  {
    name: 'Code Development & Programming Assistants',
    description:
      'AI tools to assist programmers in writing, debugging, and optimizing code.',
    tools: [
      {
        name: 'GitHub Copilot',
        description:
          'AI code completion and generation tool integrated into IDEs.',
        url: 'https://github.com/features/copilot',
        icon: '/assets/images/tools/ailogo.png',
        tags: ['Code Completion', 'Programming Assistant', 'GitHub'],
      },
      {
        name: 'Codeium',
        description:
          'Free AI code acceleration tool, supporting multiple IDEs.',
        url: 'https://codeium.com/',
        icon: '/assets/images/tools/ailogo.png',
        tags: ['Free', 'Code Completion', 'Multi-language'],
      },
      {
        name: 'Replit AI',
        description:
          'AI programming features integrated into the Replit online IDE.',
        url: 'https://replit.com/ai',
        icon: '/assets/images/tools/ailogo.png',
        tags: ['Online IDE', 'Programming Assistant', 'Ghostwriter'],
      },
      {
        name: 'Tabnine',
        description:
          'AI assistant focused on code completion, supports team collaboration.',
        url: 'https://www.tabnine.com/',
        icon: '/assets/images/tools/ailogo.png',
        tags: ['Code Completion', 'Team', 'Security'],
      },
      {
        name: 'Amazon CodeWhisperer',
        description:
          'AI code generation assistant from AWS, free for individual use.',
        url: 'https://aws.amazon.com/codewhisperer/',
        icon: '/assets/images/tools/ailogo.png',
        tags: ['AWS', 'Code Generation', 'Free'],
      },
    ],
  },
];
