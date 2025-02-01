export interface MeditationExercise {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  duration: number;
  benefits: string[];
  instructions: string[];
  category: 'mindfulness' | 'breathing' | 'body-scan' | 'loving-kindness' | 'stress-relief';
}

export const meditationExercises: MeditationExercise[] = [
  {
    id: 'mindful-breathing',
    title: 'Mindful Breathing',
    description: 'Focus on your breath to anchor yourself in the present moment.',
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    duration: 300,
    benefits: [
      'Reduces anxiety and stress',
      'Improves focus and concentration',
      'Helps calm racing thoughts'
    ],
    instructions: [
      'Find a comfortable seated position',
      'Close your eyes or maintain a soft gaze',
      'Focus on your natural breath',
      'Notice the sensation of breathing without changing it',
      'When your mind wanders, gently return focus to your breath'
    ],
    category: 'mindfulness'
  },
  {
    id: 'body-scan-relaxation',
    title: 'Body Scan Relaxation',
    description: 'Systematically scan your body to release tension and promote relaxation.',
    imageUrl: 'https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    duration: 600,
    benefits: [
      'Releases physical tension',
      'Improves body awareness',
      'Promotes better sleep'
    ],
    instructions: [
      'Lie down in a comfortable position',
      'Start focusing on your toes',
      'Gradually move attention up through your body',
      'Notice any tension or discomfort',
      'Release tension with each exhale'
    ],
    category: 'body-scan'
  },
  {
    id: 'loving-kindness',
    title: 'Loving-Kindness Meditation',
    description: 'Cultivate compassion for yourself and others through guided visualization.',
    imageUrl: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    duration: 600,
    benefits: [
      'Increases empathy and compassion',
      'Reduces negative self-talk',
      'Improves relationships'
    ],
    instructions: [
      'Begin with self-compassion',
      'Extend loving thoughts to loved ones',
      'Include neutral people',
      'Embrace difficult relationships',
      'Extend to all beings'
    ],
    category: 'loving-kindness'
  },
  {
    id: '4-7-8-breathing',
    title: '4-7-8 Breathing Technique',
    description: 'A structured breathing exercise for stress relief and relaxation.',
    imageUrl: 'https://images.unsplash.com/photo-1515023115689-589c33041d3c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    duration: 300,
    benefits: [
      'Reduces anxiety quickly',
      'Helps with sleep',
      'Regulates nervous system'
    ],
    instructions: [
      'Inhale quietly through nose for 4 counts',
      'Hold breath for 7 counts',
      'Exhale forcefully through mouth for 8 counts',
      'Repeat cycle 4 times'
    ],
    category: 'breathing'
  },
  {
    id: 'stress-relief',
    title: 'Stress Relief Meditation',
    description: 'Quick relief from stress and anxiety through guided relaxation.',
    imageUrl: 'https://images.unsplash.com/photo-1474418397713-7ede21d49118?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    duration: 300,
    benefits: [
      'Immediate stress reduction',
      'Calms racing thoughts',
      'Promotes mental clarity'
    ],
    instructions: [
      'Find a quiet space',
      'Close your eyes',
      'Take deep, calming breaths',
      'Focus on releasing tension',
      'Visualize stress leaving your body'
    ],
    category: 'stress-relief'
  },
  {
    id: 'mindful-walking',
    title: 'Mindful Walking',
    description: 'Practice mindfulness while walking to combine physical activity with meditation.',
    imageUrl: 'https://images.unsplash.com/photo-1538991383142-36c4edeaffde?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    duration: 900,
    benefits: [
      'Combines exercise with meditation',
      'Improves balance and coordination',
      'Enhances mind-body connection'
    ],
    instructions: [
      'Walk at a natural pace',
      'Notice the sensation of walking',
      'Feel each step mindfully',
      'Maintain awareness of surroundings',
      'Return focus when mind wanders'
    ],
    category: 'mindfulness'
  },
  {
    id: 'gratitude-meditation',
    title: 'Gratitude Meditation',
    description: 'Focus on appreciation and thankfulness to cultivate positive emotions.',
    imageUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    duration: 600,
    benefits: [
      'Increases happiness',
      'Reduces negative thinking',
      'Improves overall wellbeing'
    ],
    instructions: [
      'Sit comfortably and close eyes',
      'Think of something you are grateful for',
      'Feel the gratitude in your body',
      'Expand to more things you appreciate',
      'End with general feeling of thankfulness'
    ],
    category: 'mindfulness'
  },
  {
    id: 'chakra-meditation',
    title: 'Chakra Balancing',
    description: 'Balance your energy centers through focused meditation.',
    imageUrl: 'https://images.unsplash.com/photo-1514716590153-1e15a68c8d03?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    duration: 1200,
    benefits: [
      'Balances energy centers',
      'Promotes emotional healing',
      'Enhances spiritual awareness'
    ],
    instructions: [
      'Start at the root chakra',
      'Move up through each energy center',
      'Visualize each chakra\'s color',
      'Feel the energy flowing',
      'Balance each center'
    ],
    category: 'mindfulness'
  },
  {
    id: 'sleep-meditation',
    title: 'Sleep Meditation',
    description: 'Gentle guidance into restful sleep through relaxation techniques.',
    imageUrl: 'https://images.unsplash.com/photo-1511295742362-92c96b5adb36?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    duration: 1200,
    benefits: [
      'Improves sleep quality',
      'Reduces insomnia',
      'Calms racing thoughts at night'
    ],
    instructions: [
      'Lie comfortably in bed',
      'Progressive muscle relaxation',
      'Focus on slowing breath',
      'Let go of thoughts gently',
      'Allow sleep to come naturally'
    ],
    category: 'body-scan'
  },
  {
    id: 'morning-meditation',
    title: 'Morning Energy Meditation',
    description: 'Start your day with energy and intention through morning meditation.',
    imageUrl: 'https://images.unsplash.com/photo-1506252374453-ef5237291d83?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    duration: 600,
    benefits: [
      'Energizes for the day',
      'Sets positive intentions',
      'Improves morning routine'
    ],
    instructions: [
      'Start with deep breaths',
      'Set intentions for the day',
      'Energizing breath work',
      'Positive visualizations',
      'Gratitude practice'
    ],
    category: 'breathing'
  },
  {
    id: 'forgiveness-meditation',
    title: 'Forgiveness Meditation',
    description: 'Practice forgiveness for emotional healing and peace.',
    imageUrl: 'https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    duration: 900,
    benefits: [
      'Releases emotional burdens',
      'Promotes inner peace',
      'Improves relationships'
    ],
    instructions: [
      'Begin with self-forgiveness',
      'Extend to others',
      'Release resentment',
      'Practice acceptance',
      'End with loving-kindness'
    ],
    category: 'loving-kindness'
  },
  {
    id: 'anxiety-relief',
    title: 'Anxiety Relief Meditation',
    description: 'Specific techniques to calm anxiety and panic.',
    imageUrl: 'https://images.unsplash.com/photo-1527345931282-806d3b11967f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    duration: 600,
    benefits: [
      'Reduces anxiety symptoms',
      'Calms nervous system',
      'Provides coping tools'
    ],
    instructions: [
      'Ground yourself physically',
      'Practice square breathing',
      'Body scan for tension',
      'Positive affirmations',
      'Visualize safe place'
    ],
    category: 'stress-relief'
  },
  {
    id: 'visualization',
    title: 'Creative Visualization',
    description: 'Use imagination to manifest goals and reduce stress.',
    imageUrl: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    duration: 900,
    benefits: [
      'Enhances creativity',
      'Helps achieve goals',
      'Reduces stress'
    ],
    instructions: [
      'Relax and close eyes',
      'Create detailed mental image',
      'Engage all senses',
      'Feel positive emotions',
      'Return gently to present'
    ],
    category: 'mindfulness'
  },
  {
    id: 'inner-child',
    title: 'Inner Child Meditation',
    description: 'Connect with and heal your inner child through guided meditation.',
    imageUrl: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    duration: 1200,
    benefits: [
      'Emotional healing',
      'Increased self-compassion',
      'Resolution of past issues'
    ],
    instructions: [
      'Create safe space',
      'Connect with younger self',
      'Listen with compassion',
      'Offer comfort and support',
      'Integration and closure'
    ],
    category: 'loving-kindness'
  },
  {
    id: 'sound-healing',
    title: 'Sound Healing Meditation',
    description: 'Use sound vibrations for deep relaxation and healing.',
    imageUrl: 'https://images.unsplash.com/photo-1519138649361-f097c3e127ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    duration: 1200,
    benefits: [
      'Deep relaxation',
      'Vibrational healing',
      'Enhanced meditation'
    ],
    instructions: [
      'Find comfortable position',
      'Focus on sound vibrations',
      'Let sound wash over you',
      'Notice physical sensations',
      'Stay present with sound'
    ],
    category: 'mindfulness'
  }
];