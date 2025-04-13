import React from 'react';
import Layout from '@/components/Layout';
import SourceReference from '@/components/SourceReference';
import CourseNavigation from '@/components/CourseNavigation';
import PromptTester from '@/components/PromptTester';
import LessonProgress from '@/components/LessonProgress';

export default function Context() {
  return (
    <Layout title="Context and Constraints">
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-title mb-6">Lesson 4: Context and Constraints</h1>
        
        <CourseNavigation />
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Overview</h2>
          <p className="mb-4">
            The 'C' in TEACH stands for Context and Constraints. This lesson focuses on how to provide
            relevant background information and set appropriate boundaries for the AI's response.
          </p>
          
          <div className="bg-light p-4 rounded-md mb-6">
            <h3 className="font-semibold mb-2">Learning Objectives</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Understand the importance of context in prompts</li>
              <li>Learn how to set appropriate constraints</li>
              <li>Practice providing relevant background information</li>
              <li>Develop strategies for managing AI responses</li>
            </ul>
          </div>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Key Concepts</h2>
          <p className="mb-4">
            When providing context and constraints:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Include relevant background information</li>
            <li>Specify any limitations or boundaries</li>
            <li>Consider the audience and their needs</li>
            <li>Set clear expectations for the response</li>
            <li>Address potential biases or limitations</li>
          </ul>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Examples</h2>
          
          <div className="border-l-4 border-teal pl-4 mb-6">
            <p className="font-medium mb-2">Example 1: Contextualized Lesson</p>
            <p className="italic mb-2">"Create a lesson plan for teaching fractions to 3rd graders who have already learned basic division. The class has 25 students with varying math abilities, and we have access to fraction manipulatives. Focus on hands-on activities that can be completed in 45 minutes."</p>
            <p className="text-sm">This prompt provides context about prior knowledge, class size, resources, and time constraints.</p>
          </div>
          
          <div className="border-l-4 border-teal pl-4 mb-6">
            <p className="font-medium mb-2">Example 2: Constrained Assessment</p>
            <p className="italic mb-2">"Design a 10-question quiz about the water cycle for 5th graders. Questions should be at a 5th-grade reading level, avoid complex scientific terminology, and include a mix of multiple choice and short answer questions. Each question should align with NGSS standard ESS2.C."</p>
            <p className="text-sm">This prompt sets clear constraints about difficulty level, format, and standards alignment.</p>
          </div>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Practice Activity</h2>
          <p className="mb-4">
            Create a prompt that includes both context and constraints for an educational task.
            Make sure your prompt includes:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Relevant background information</li>
            <li>Specific constraints or limitations</li>
            <li>Clear expectations for the output</li>
            <li>Consideration of the target audience</li>
          </ul>
          
          <PromptTester 
            lessonContext="Context and Constraints"
            initialPrompt="Create a reading comprehension activity for 4th graders about ecosystems. The class has 20 students with varying reading levels, and we have 30 minutes for this activity. Include: 1) A short passage at a 4th-grade reading level, 2) 5 comprehension questions (3 multiple choice, 2 short answer), 3) An extension activity for early finishers. The content should align with NGSS standard LS2.A."
            placeholder="Try creating your own contextualized prompt..."
          />
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Reflection Questions</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>How does providing context improve the relevance of AI-generated content?</li>
            <li>What types of constraints are most important for educational materials?</li>
            <li>How can you ensure the context and constraints match your specific teaching situation?</li>
          </ul>
        </div>
        
        <div className="flex justify-between mt-8">
          <a href="/course/teach-framework/arrangement" className="btn-primary bg-slate">
            Previous: Arrangement of Output
          </a>
          <a href="/course/teach-framework/higher-level" className="btn-primary">
            Next: Higher Level Refinements
          </a>
        </div>
      </div>
      
      <SourceReference fileName="Unit3_TEACHFramework_Lesson4.md" path="Test Course/TEST Prompting for Educators" />
    </Layout>
  );
} 