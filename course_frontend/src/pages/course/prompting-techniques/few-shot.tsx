import React from 'react';
import Layout from '@/components/Layout';
import SourceReference from '@/components/SourceReference';
import CourseNavigation from '@/components/CourseNavigation';
import PromptTester from '@/components/PromptTester';
import LessonProgress from '@/components/LessonProgress';

export default function FewShot() {
  return (
    <Layout title="Few-Shot Prompting">
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-title mb-6">Lesson 2: Few-Shot Prompting</h1>
        
        <CourseNavigation />
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Overview</h2>
          <p className="mb-4">
            Few-shot prompting involves providing the AI with a small number of examples to demonstrate
            the desired output format, style, or approach. This technique helps the AI better understand
            your expectations and generate more consistent results.
          </p>
          
          <div className="bg-light p-4 rounded-md mb-6">
            <h3 className="font-semibold mb-2">Learning Objectives</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Understand the concept and benefits of few-shot prompting</li>
              <li>Learn how to select and present effective examples</li>
              <li>Practice creating few-shot prompts for educational tasks</li>
              <li>Develop strategies for choosing appropriate examples</li>
            </ul>
          </div>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Key Concepts</h2>
          <p className="mb-4">
            When using few-shot prompting:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Choose examples that clearly demonstrate the desired output</li>
            <li>Include a variety of examples to show different aspects</li>
            <li>Make sure examples are relevant to the task</li>
            <li>Keep the number of examples manageable (typically 2-5)</li>
            <li>Clearly separate examples from the actual task</li>
          </ul>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Examples</h2>
          
          <div className="border-l-4 border-teal pl-4 mb-6">
            <p className="font-medium mb-2">Example 1: Lesson Plan Format</p>
            <p className="italic mb-2">"Here are two examples of lesson plans I like. Please create a new lesson plan about fractions following the same format:
            
            Example 1:
            Title: Introduction to Addition
            Grade: 2nd
            Objectives:
            - Students will understand basic addition concepts
            - Students will practice adding single-digit numbers
            - Students will apply addition to real-world scenarios
            
            Materials:
            - Number cards
            - Counters
            - Whiteboard
            
            Procedure:
            1. Warm-up activity (5 min)
            2. Direct instruction (10 min)
            3. Guided practice (15 min)
            4. Independent practice (10 min)
            5. Wrap-up (5 min)
            
            Assessment:
            - Observation during activities
            - Worksheet completion
            - Exit ticket
            
            Example 2:
            Title: Exploring Shapes
            Grade: 1st
            Objectives:
            - Students will identify basic shapes
            - Students will describe shape attributes
            - Students will create shapes using different materials
            
            Materials:
            - Shape cutouts
            - Playdough
            - Construction paper
            
            Procedure:
            1. Shape hunt (10 min)
            2. Shape sorting (15 min)
            3. Shape creation (20 min)
            4. Share and discuss (5 min)
            
            Assessment:
            - Participation in activities
            - Shape identification quiz
            - Shape creation project
            
            Now create a lesson plan about fractions for 3rd grade following this format."</p>
            <p className="text-sm">This prompt provides clear examples of the desired format and structure.</p>
          </div>
          
          <div className="border-l-4 border-teal pl-4 mb-6">
            <p className="font-medium mb-2">Example 2: Assessment Questions</p>
            <p className="italic mb-2">"Here are some examples of good multiple choice questions. Create 5 similar questions about the water cycle:
            
            Example 1:
            What is the main source of energy for the water cycle?
            A) Wind
            B) Sun
            C) Moon
            D) Earth's core
            Correct answer: B) Sun
            Explanation: The sun provides the energy needed to evaporate water.
            
            Example 2:
            Which process turns water vapor into liquid water?
            A) Evaporation
            B) Condensation
            C) Precipitation
            D) Collection
            Correct answer: B) Condensation
            Explanation: Condensation occurs when water vapor cools and changes into liquid water.
            
            Now create 5 new questions about the water cycle following this format."</p>
            <p className="text-sm">This prompt shows the desired format for questions, answers, and explanations.</p>
          </div>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Practice Activity</h2>
          <p className="mb-4">
            Create a few-shot prompt for generating educational content.
            Make sure your prompt includes:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>2-3 clear examples of the desired output</li>
            <li>Examples that demonstrate different aspects of the task</li>
            <li>A clear instruction for the new task</li>
            <li>Proper formatting to separate examples from the task</li>
          </ul>
          
          <PromptTester 
            lessonContext="Few-Shot Prompting"
            initialPrompt="Here are two examples of good discussion questions. Create 5 new questions about climate change following this format:

Example 1:
How does deforestation contribute to climate change?
- This question encourages critical thinking about cause and effect
- It connects human activities to environmental impacts
- It allows for multiple valid perspectives

Example 2:
What are some ways individuals can reduce their carbon footprint?
- This question promotes practical application
- It encourages personal reflection
- It allows for creative solutions

Now create 5 new discussion questions about climate change following this format."
            placeholder="Try creating your own few-shot prompt..."
          />
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Reflection Questions</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>How does providing examples improve the quality of AI-generated content?</li>
            <li>What makes an effective example in a few-shot prompt?</li>
            <li>How can you ensure your examples are relevant and helpful?</li>
          </ul>
        </div>
        
        <div className="flex justify-between mt-8">
          <a href="/course/prompting-techniques/zero-shot" className="btn-primary bg-slate">
            Previous: Zero-Shot Prompting
          </a>
          <a href="/course/prompting-techniques/chain-of-thought" className="btn-primary">
            Next: Chain-of-Thought Prompting
          </a>
        </div>
      </div>
      
      <SourceReference fileName="Unit4_PromptingTechniques_Lesson2.md" path="Test Course/TEST Prompting for Educators" />
    </Layout>
  );
} 