import React from 'react';
import Layout from '@/components/Layout';
import SourceReference from '@/components/SourceReference';
import CourseNavigation from '@/components/CourseNavigation';
import PromptTester from '@/components/PromptTester';
import LessonProgress from '@/components/LessonProgress';

export default function TonePersona() {
  return (
    <Layout title="Tone and Persona">
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-title mb-6">Lesson 1: Tone and Persona</h1>
        
        <CourseNavigation />
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Overview</h2>
          <p className="mb-4">
            The 'T' in TEACH stands for Tone and Persona. This lesson focuses on how to establish
            the right tone and persona in your prompts to get the most effective responses from AI.
          </p>
          
          <div className="bg-light p-4 rounded-md mb-6">
            <h3 className="font-semibold mb-2">Learning Objectives</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Understand the importance of tone and persona in AI prompting</li>
              <li>Learn how to establish appropriate tone for different educational contexts</li>
              <li>Practice creating prompts with consistent tone and persona</li>
              <li>Develop strategies for maintaining appropriate tone throughout conversations</li>
            </ul>
          </div>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Key Concepts</h2>
          <p className="mb-4">
            When establishing tone and persona:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Consider your audience and purpose</li>
            <li>Maintain consistency throughout the conversation</li>
            <li>Use appropriate language for the educational context</li>
            <li>Be clear about your role and expectations</li>
            <li>Adapt tone based on the task and desired outcome</li>
          </ul>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Examples</h2>
          
          <div className="border-l-4 border-teal pl-4 mb-6">
            <p className="font-medium mb-2">Example 1: Professional Tone</p>
            <p className="italic mb-2">"As an experienced educator, please help me develop a lesson plan for teaching fractions to 4th graders. I need clear objectives, engaging activities, and appropriate assessment methods."</p>
            <p className="text-sm">This prompt establishes a professional tone and clearly defines the educator's role.</p>
          </div>
          
          <div className="border-l-4 border-teal pl-4 mb-6">
            <p className="font-medium mb-2">Example 2: Supportive Tone</p>
            <p className="italic mb-2">"I'm a new teacher looking for guidance on classroom management strategies. Could you help me develop a positive behavior support system for my 2nd-grade class?"</p>
            <p className="text-sm">This prompt uses a more supportive tone appropriate for seeking guidance.</p>
          </div>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Practice Activity</h2>
          <p className="mb-4">
            Create a prompt that establishes a specific tone and persona for an educational task.
            Consider:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>The context and purpose of your request</li>
            <li>Your role as an educator</li>
            <li>The desired tone for the interaction</li>
            <li>How to maintain consistency throughout</li>
          </ul>
          
          <PromptTester 
            lessonContext="Tone and Persona"
            initialPrompt="As a middle school science teacher with 5 years of experience, I need help creating an engaging lab activity about the water cycle. Please provide detailed instructions, safety considerations, and assessment methods."
            placeholder="Try creating your own prompt with a specific tone and persona..."
          />
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Reflection Questions</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>How does tone affect the quality of AI responses?</li>
            <li>What factors influence your choice of tone in different educational contexts?</li>
            <li>How can you maintain consistent tone throughout a conversation with AI?</li>
          </ul>
        </div>
        
        <div className="flex justify-between mt-8">
          <a href="/course/teach-framework" className="btn-primary bg-slate">
            Previous: TEACH Framework
          </a>
          <a href="/course/teach-framework/explicit-task" className="btn-primary">
            Next: Explicit Task
          </a>
        </div>
      </div>
      
      <SourceReference fileName="Unit3_TEACHFramework_Lesson1.md" path="Test Course/TEST Prompting for Educators" />
    </Layout>
  );
} 