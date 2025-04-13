import React from 'react';
import Layout from '@/components/Layout';
import SourceReference from '@/components/SourceReference';
import CourseNavigation from '@/components/CourseNavigation';
import PromptTester from '@/components/PromptTester';
import LessonProgress from '@/components/LessonProgress';

export default function ZeroShotPrompting() {
  return (
    <Layout title="Zero-Shot Prompting">
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-title mb-6">Lesson 1: Zero-Shot Prompting</h1>
        
        <CourseNavigation />
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Overview</h2>
          <p className="mb-4">
            Zero-shot prompting is a technique where you ask the AI to perform a task without providing any examples.
            It's useful for straightforward tasks where the AI can understand the requirements based on the prompt alone.
          </p>
          
          <div className="bg-light p-4 rounded-md mb-6">
            <h3 className="font-semibold mb-2">Learning Objectives</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Understand what zero-shot prompting is and when to use it</li>
              <li>Learn how to craft effective zero-shot prompts</li>
              <li>Practice creating zero-shot prompts for educational tasks</li>
            </ul>
          </div>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Key Concepts</h2>
          <p className="mb-4">
            Zero-shot prompting works best when:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>The task is clearly defined and straightforward</li>
            <li>The AI has sufficient knowledge about the topic</li>
            <li>The desired output format is simple and common</li>
            <li>You don't need to demonstrate specific style or tone</li>
          </ul>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Examples</h2>
          
          <div className="border-l-4 border-teal pl-4 mb-6">
            <p className="font-medium mb-2">Example 1:</p>
            <p className="italic mb-2">"Create a lesson plan for teaching fractions to 4th graders."</p>
            <p className="text-sm">This is a good zero-shot prompt because it's clear, specific, and the AI understands the context of lesson planning.</p>
          </div>
          
          <div className="border-l-4 border-teal pl-4 mb-6">
            <p className="font-medium mb-2">Example 2:</p>
            <p className="italic mb-2">"Generate a list of discussion questions about climate change for high school students."</p>
            <p className="text-sm">This works well as a zero-shot prompt because it specifies the topic, audience, and desired output format.</p>
          </div>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Practice Activity</h2>
          <p className="mb-4">
            Create a zero-shot prompt for generating a quiz about a topic of your choice.
            Make sure your prompt is clear and specific about:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>The topic and grade level</li>
            <li>The number and type of questions</li>
            <li>The format of the output</li>
          </ul>
          
          <PromptTester 
            lessonContext="Zero-Shot Prompting"
            initialPrompt="Create a 10-question multiple choice quiz about photosynthesis for 7th grade students."
            placeholder="Try creating your own zero-shot prompt for a quiz..."
          />
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Reflection Questions</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>What types of educational tasks are best suited for zero-shot prompting?</li>
            <li>How can you make your zero-shot prompts more effective?</li>
            <li>When might you need to use a different prompting technique instead of zero-shot?</li>
          </ul>
        </div>
        
        <div className="flex justify-between mt-8">
          <a href="/course/prompting-techniques" className="btn-primary bg-slate">
            Previous: Prompting Techniques
          </a>
          <a href="/course/prompting-techniques/few-shot" className="btn-primary">
            Next: Few-Shot Prompting
          </a>
        </div>
      </div>
      
      <SourceReference fileName="Unit4_PromptingTechniques_Lesson1.md" path="Test Course/TEST Prompting for Educators" />
    </Layout>
  );
} 