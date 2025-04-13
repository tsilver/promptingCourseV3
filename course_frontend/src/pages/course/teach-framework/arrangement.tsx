import React from 'react';
import Layout from '@/components/Layout';
import SourceReference from '@/components/SourceReference';
import CourseNavigation from '@/components/CourseNavigation';
import PromptTester from '@/components/PromptTester';
import LessonProgress from '@/components/LessonProgress';

export default function Arrangement() {
  return (
    <Layout title="Arrangement of Output">
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-title mb-6">Lesson 3: Arrangement of Output</h1>
        
        <CourseNavigation />
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Overview</h2>
          <p className="mb-4">
            The 'A' in TEACH stands for Arrangement of Output. This lesson focuses on how to structure
            and organize the AI's response to make it more useful and easier to understand.
          </p>
          
          <div className="bg-light p-4 rounded-md mb-6">
            <h3 className="font-semibold mb-2">Learning Objectives</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Understand different ways to structure AI outputs</li>
              <li>Learn how to specify output formats and organization</li>
              <li>Practice creating prompts that generate well-organized content</li>
              <li>Develop strategies for improving output readability</li>
            </ul>
          </div>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Key Concepts</h2>
          <p className="mb-4">
            When arranging output:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Use clear section headings and subheadings</li>
            <li>Organize content in a logical sequence</li>
            <li>Specify formatting (bullets, numbers, tables, etc.)</li>
            <li>Include visual hierarchy in the output</li>
            <li>Consider the end-user's needs and preferences</li>
          </ul>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Examples</h2>
          
          <div className="border-l-4 border-teal pl-4 mb-6">
            <p className="font-medium mb-2">Example 1: Structured Lesson Plan</p>
            <p className="italic mb-2">"Create a lesson plan with the following sections: 1) Title and Grade Level, 2) Learning Objectives (3 bullet points), 3) Materials (bulleted list), 4) Procedure (numbered steps), 5) Assessment (2-3 methods). Use clear headings and subheadings."</p>
            <p className="text-sm">This prompt specifies a clear structure with different formatting for each section.</p>
          </div>
          
          <div className="border-l-4 border-teal pl-4 mb-6">
            <p className="font-medium mb-2">Example 2: Organized Study Guide</p>
            <p className="italic mb-2">"Generate a study guide for the American Revolution. Organize it into: Key Events (timeline), Important People (table with name, role, significance), Key Concepts (bulleted list with brief explanations), and Review Questions (numbered list)."</p>
            <p className="text-sm">This prompt uses different formats (timeline, table, lists) to organize information effectively.</p>
          </div>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Practice Activity</h2>
          <p className="mb-4">
            Create a prompt that generates a well-organized educational resource.
            Make sure your prompt includes:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Clear section headings</li>
            <li>Specific formatting for each section</li>
            <li>Logical organization of content</li>
            <li>Consideration of readability</li>
          </ul>
          
          <PromptTester 
            lessonContext="Arrangement of Output"
            initialPrompt="Create a study guide for photosynthesis. Structure it as follows: 1) Overview (2-3 paragraphs), 2) Key Terms (table with term, definition, example), 3) Process Steps (numbered list with diagrams), 4) Common Misconceptions (bulleted list with explanations), 5) Practice Questions (5 multiple choice questions with answers and explanations)."
            placeholder="Try creating your own structured resource prompt..."
          />
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Reflection Questions</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>How does output arrangement affect the usability of AI-generated content?</li>
            <li>What are some effective ways to structure different types of educational materials?</li>
            <li>How can you ensure the output format matches your teaching style and students' needs?</li>
          </ul>
        </div>
        
        <div className="flex justify-between mt-8">
          <a href="/course/teach-framework/explicit-task" className="btn-primary bg-slate">
            Previous: Explicit Task
          </a>
          <a href="/course/teach-framework/context" className="btn-primary">
            Next: Context and Constraints
          </a>
        </div>
      </div>
      
      <SourceReference fileName="Unit3_TEACHFramework_Lesson3.md" path="Test Course/TEST Prompting for Educators" />
    </Layout>
  );
} 