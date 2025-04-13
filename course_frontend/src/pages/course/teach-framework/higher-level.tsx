import React from 'react';
import Layout from '@/components/Layout';
import SourceReference from '@/components/SourceReference';
import CourseNavigation from '@/components/CourseNavigation';
import PromptTester from '@/components/PromptTester';
import LessonProgress from '@/components/LessonProgress';

export default function HigherLevel() {
  return (
    <Layout title="Higher Level Refinements">
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-title mb-6">Lesson 5: Higher Level Refinements</h1>
        
        <CourseNavigation />
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Overview</h2>
          <p className="mb-4">
            The 'H' in TEACH stands for Higher Level Refinements. This lesson focuses on advanced techniques
            for improving and refining prompts to get better results from AI systems.
          </p>
          
          <div className="bg-light p-4 rounded-md mb-6">
            <h3 className="font-semibold mb-2">Learning Objectives</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Understand advanced prompting techniques</li>
              <li>Learn how to refine and improve prompts</li>
              <li>Practice using feedback loops</li>
              <li>Develop strategies for optimizing AI responses</li>
            </ul>
          </div>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Key Concepts</h2>
          <p className="mb-4">
            When making higher level refinements:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Use feedback loops to improve prompts</li>
            <li>Incorporate specific examples and analogies</li>
            <li>Add complexity gradually</li>
            <li>Consider multiple perspectives</li>
            <li>Balance specificity with flexibility</li>
          </ul>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Examples</h2>
          
          <div className="border-l-4 border-teal pl-4 mb-6">
            <p className="font-medium mb-2">Example 1: Iterative Refinement</p>
            <p className="italic mb-2">"Create a lesson plan about photosynthesis. After seeing the first draft, refine it to: 1) Include more hands-on activities, 2) Add differentiation strategies for diverse learners, 3) Incorporate real-world applications, and 4) Include formative assessment checkpoints."</p>
            <p className="text-sm">This prompt uses feedback to improve the initial output with specific refinements.</p>
          </div>
          
          <div className="border-l-4 border-teal pl-4 mb-6">
            <p className="font-medium mb-2">Example 2: Multi-Perspective Approach</p>
            <p className="italic mb-2">"Design a unit about climate change that considers: 1) Scientific perspectives (evidence and data), 2) Social impacts (communities affected), 3) Economic factors (costs and solutions), and 4) Ethical considerations (intergenerational equity). Create activities that explore each perspective."</p>
            <p className="text-sm">This prompt encourages a comprehensive approach by considering multiple viewpoints.</p>
          </div>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Practice Activity</h2>
          <p className="mb-4">
            Create a prompt that demonstrates higher level refinements.
            Make sure your prompt includes:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Iterative improvement strategies</li>
            <li>Multiple perspectives or approaches</li>
            <li>Specific refinement criteria</li>
            <li>Consideration of diverse needs</li>
          </ul>
          
          <PromptTester 
            lessonContext="Higher Level Refinements"
            initialPrompt="Create a project-based learning unit about renewable energy. After the initial draft, refine it to: 1) Include cross-curricular connections (science, math, social studies), 2) Add differentiation for various learning styles, 3) Incorporate community engagement opportunities, 4) Include assessment rubrics for different skill levels, and 5) Add extension activities for advanced learners."
            placeholder="Try creating your own refined prompt..."
          />
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Reflection Questions</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>How can iterative refinement improve the quality of AI-generated content?</li>
            <li>What strategies can you use to incorporate multiple perspectives in your prompts?</li>
            <li>How can you balance specificity and flexibility in your refined prompts?</li>
          </ul>
        </div>
        
        <div className="flex justify-between mt-8">
          <a href="/course/teach-framework/context" className="btn-primary bg-slate">
            Previous: Context and Constraints
          </a>
          <a href="/course/prompting-techniques" className="btn-primary">
            Next: Prompting Techniques
          </a>
        </div>
      </div>
      
      <SourceReference fileName="Unit3_TEACHFramework_Lesson5.md" path="Test Course/TEST Prompting for Educators" />
    </Layout>
  );
} 