// @ts-check

/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Part 1: Foundations',
      items: [
        'introduction/physical-ai-overview',
        'foundations/embodied-intelligence',
        'foundations/humanoid-robots',
      ],
    },
    {
      type: 'category',
      label: 'Part 2: The Robotic Nervous System',
      items: [
        'ros2/getting-started-with-ros2',
        'ros2/ros2-architecture',
        'ros2/nodes-topics-services',
      ],
    },
    {
      type: 'category',
      label: 'Part 3: Simulation and Digital Twins',
      items: [
        'digital-twins/the-role-of-simulation',
        'digital-twins/gazebo',
        'digital-twins/unity',
      ],
    },
    {
      type: 'category',
      label: 'Part 4: Perception and AI',
      items: [
        'nvidia-isaac/the-ai-brain-for-robots',
        'nvidia-isaac/perception',
        'nvidia-isaac/sim-to-real',
      ],
    },
    {
      type: 'category',
      label: 'Part 5: Advanced Intelligence',
      items: [
        'vla/introduction-to-vla',
        'vla/vision-language-action',
        'vla/llms-for-robotics',
      ],
    },
    {
      type: 'category',
      label: 'Part 6: Capstone Project',
      items: [
        'capstone/project-overview',
        'capstone/autonomous-humanoid',
      ],
    },
  ],
};

export default sidebars;
