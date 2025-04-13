import React from 'react';
import Layout from '@/components/Layout';
import SourceReference from '@/components/SourceReference';
import CourseNavigation from '@/components/CourseNavigation';
import PromptTester from '@/components/PromptTester';
import LessonProgress from '@/components/LessonProgress';

export default function ChainOfThought() {
  return (
    <Layout title="Chain-of-Thought Prompting">
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-title mb-6">Lesson 3: Chain-of-Thought Prompting</h1>
        
        <CourseNavigation />
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Overview</h2>
          <p className="mb-4">
            Chain-of-thought prompting encourages the AI to break down complex problems into smaller,
            manageable steps and explain its reasoning process. This technique is particularly useful
            for educational content that requires logical thinking and problem-solving.
          </p>
          
          <div className="bg-light p-4 rounded-md mb-6">
            <h3 className="font-semibold mb-2">Learning Objectives</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Understand the concept and benefits of chain-of-thought prompting</li>
              <li>Learn how to structure prompts to encourage step-by-step reasoning</li>
              <li>Practice creating chain-of-thought prompts for educational tasks</li>
              <li>Develop strategies for guiding AI through complex problems</li>
            </ul>
          </div>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Key Concepts</h2>
          <p className="mb-4">
            When using chain-of-thought prompting:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Break down complex problems into smaller steps</li>
            <li>Encourage the AI to explain its reasoning</li>
            <li>Use guiding questions to direct the thought process</li>
            <li>Include checkpoints for verification</li>
            <li>Allow for alternative approaches and solutions</li>
          </ul>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Examples</h2>
          
          <div className="border-l-4 border-teal pl-4 mb-6">
            <p className="font-medium mb-2">Example 1: Math Problem Solving</p>
            <p className="italic mb-2">"Solve this math problem step by step, explaining your reasoning at each step:

Problem: A store offers a 20% discount on a $50 item. What is the final price after the discount?

Let's solve this step by step:

1. First, let's understand what we need to find:
   - We need to calculate the final price after a 20% discount
   - The original price is $50

2. Calculate the discount amount:
   - 20% of $50 = 0.20 × $50
   - 0.20 × $50 = $10

3. Subtract the discount from the original price:
   - $50 - $10 = $40

4. Final answer: The final price after the 20% discount is $40.

Now solve this problem step by step: A store offers a 15% discount on a $75 item. What is the final price after the discount?"</p>
            <p className="text-sm">This prompt demonstrates how to break down a problem and explain each step.</p>
          </div>
          
          <div className="border-l-4 border-teal pl-4 mb-6">
            <p className="font-medium mb-2">Example 2: Science Experiment Analysis</p>
            <p className="italic mb-2">"Analyze this science experiment step by step:

Experiment: Testing the effect of temperature on plant growth

Let's analyze this step by step:

1. Identify the variables:
   - Independent variable: Temperature
   - Dependent variable: Plant growth
   - Control variables: Light, water, soil type

2. Consider the hypothesis:
   - What do we expect to happen?
   - Why do we expect this outcome?

3. Evaluate the experimental design:
   - Are the control variables properly managed?
   - Is the sample size appropriate?
   - How will we measure plant growth?

4. Discuss potential results:
   - What would different outcomes mean?
   - How would we interpret the data?

Now analyze this experiment step by step: Testing the effect of different types of music on plant growth."</p>
            <p className="text-sm">This prompt shows how to guide the AI through a systematic analysis.</p>
          </div>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Practice Activity</h2>
          <p className="mb-4">
            Create a chain-of-thought prompt for an educational task.
            Make sure your prompt includes:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Clear step-by-step instructions</li>
            <li>Guiding questions for each step</li>
            <li>Explanation of the reasoning process</li>
            <li>Checkpoints for verification</li>
          </ul>
          
          <PromptTester 
            lessonContext="Chain-of-Thought Prompting"
            initialPrompt="Create a lesson plan for teaching the water cycle to 4th graders. Break this down step by step:

1. First, identify the key concepts:
   - What are the main stages of the water cycle?
   - What vocabulary do students need to learn?
   - What misconceptions might students have?

2. Plan the introduction:
   - How will you engage students' prior knowledge?
   - What real-world examples can you use?
   - How will you make the concept relatable?

3. Design the main activities:
   - What hands-on activities will help students understand?
   - How will you differentiate for different learning styles?
   - What materials will you need?

4. Plan the assessment:
   - How will you check for understanding?
   - What formative assessments will you use?
   - How will you address misconceptions?

Create a complete lesson plan following this step-by-step approach."
            placeholder="Try creating your own chain-of-thought prompt..."
          />
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Reflection Questions</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>How does breaking down problems into steps improve the quality of AI-generated content?</li>
            <li>What types of educational tasks benefit most from chain-of-thought prompting?</li>
            <li>How can you ensure the AI follows the intended reasoning process?</li>
          </ul>
        </div>
        
        <div className="flex justify-between mt-8">
          <a href="/course/prompting-techniques/few-shot" className="btn-primary bg-slate">
            Previous: Few-Shot Prompting
          </a>
          <a href="/course/prompting-techniques/self-consistency" className="btn-primary">
            Next: Self-Consistency Techniques
          </a>
        </div>
      </div>
      
      <SourceReference fileName="Unit4_PromptingTechniques_Lesson3.md" path="Test Course/TEST Prompting for Educators" />
    </Layout>
  );
} 