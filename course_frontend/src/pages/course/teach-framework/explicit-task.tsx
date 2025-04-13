import React from 'react';
import Layout from '@/components/Layout';
import SourceReference from '@/components/SourceReference';
import CourseNavigation from '@/components/CourseNavigation';
import PromptTester from '@/components/PromptTester';
import LessonProgress from '@/components/LessonProgress';

export default function ExplicitTask() {
  return (
    <Layout title="Explicit Task">
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-title mb-6">Lesson 2: Explicit Task</h1>
        
        <CourseNavigation />
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Overview</h2>
          <p className="mb-4">
            The 'E' in TEACH stands for Explicit Task. This lesson focuses on how to clearly define
            what you want the AI to do, including specific instructions, format requirements, and
            any constraints or limitations.
          </p>
          
          <div className="bg-light p-4 rounded-md mb-6">
            <h3 className="font-semibold mb-2">Learning Objectives</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Understand the importance of explicit task definition in prompts</li>
              <li>Learn how to specify clear instructions and requirements</li>
              <li>Practice defining tasks with appropriate constraints</li>
              <li>Develop strategies for ensuring task clarity</li>
            </ul>
          </div>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Key Concepts</h2>
          <p className="mb-4">
            When defining an explicit task:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Be specific about what you want the AI to do</li>
            <li>Include clear instructions and steps</li>
            <li>Specify the format and structure of the output</li>
            <li>Define any constraints or limitations</li>
            <li>Provide context about the task's purpose</li>
          </ul>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Examples</h2>
          
          <div className="border-l-4 border-teal pl-4 mb-6">
            <p className="font-medium mb-2">Example 1: Clear Instructions</p>
            <p className="italic mb-2">"Create a 5-question multiple choice quiz about the water cycle for 4th graders. Each question should have 4 options, with one correct answer. Include an explanation for each correct answer."</p>
            <p className="text-sm">This prompt clearly specifies the task, format, and requirements.</p>
          </div>
          
          <div className="border-l-4 border-teal pl-4 mb-6">
            <p className="font-medium mb-2">Example 2: Structured Output</p>
            <p className="italic mb-2">"Generate a lesson plan in the following format: Title, Learning Objectives (3 bullet points), Materials Needed (bulleted list), Procedure (numbered steps), Assessment (2-3 methods)."</p>
            <p className="text-sm">This prompt defines the exact structure and format of the output.</p>
          </div>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Practice Activity</h2>
          <p className="mb-4">
            Create a prompt that asks the AI to generate a classroom activity.
            Make sure your prompt includes:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Clear instructions for the activity</li>
            <li>Specific format requirements</li>
            <li>Any constraints or limitations</li>
            <li>Context about the learning objectives</li>
          </ul>
          
          <PromptTester 
            lessonContext="Explicit Task"
            initialPrompt="Create a 20-minute group activity for teaching fractions to 3rd graders. The activity should include: 1) A hands-on component using manipulatives, 2) A worksheet with 5 problems, 3) A reflection question. Format the output with clear sections for Materials, Instructions, and Assessment."
            placeholder="Try creating your own activity prompt..."
          />
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Reflection Questions</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>How does explicit task definition improve the quality of AI responses?</li>
            <li>What are some common pitfalls when defining tasks in prompts?</li>
            <li>How can you ensure your task instructions are clear and unambiguous?</li>
          </ul>
        </div>
        
        <div className="flex justify-between mt-8">
          <a href="/course/teach-framework/tone-persona" className="btn-primary bg-slate">
            Previous: Tone and Persona
          </a>
          <a href="/course/teach-framework/arrangement" className="btn-primary">
            Next: Arrangement of Output
          </a>
        </div>
      </div>
      
      <SourceReference fileName="Unit3_TEACHFramework_Lesson2.md" path="Test Course/TEST Prompting for Educators" />
    </Layout>
  );
} 