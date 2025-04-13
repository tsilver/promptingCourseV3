import React from 'react';
import Layout from '@/components/Layout';
import SourceReference from '@/components/SourceReference';
import CourseNavigation from '@/components/CourseNavigation';
import PromptTester from '@/components/PromptTester';
import LessonProgress from '@/components/LessonProgress';

export default function Communication() {
  return (
    <Layout title="Communication and Classroom Management">
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-title mb-6">Lesson 4: Communication and Classroom Management</h1>
        
        <CourseNavigation />
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Overview</h2>
          <p className="mb-4">
            Effective communication and classroom management are essential for creating a positive
            learning environment. AI can assist in crafting clear communications, developing
            classroom management strategies, and maintaining consistent expectations.
          </p>
          
          <div className="bg-light p-4 rounded-md mb-6">
            <h3 className="font-semibold mb-2">Learning Objectives</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Understand how AI can support communication with stakeholders</li>
              <li>Learn to create effective classroom management strategies</li>
              <li>Practice developing clear and consistent communications</li>
              <li>Explore AI tools for behavior management and documentation</li>
            </ul>
          </div>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Key Concepts</h2>
          <p className="mb-4">
            When using AI for communication and classroom management:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Maintain professional and appropriate tone</li>
            <li>Be clear and specific in communications</li>
            <li>Consider cultural and linguistic diversity</li>
            <li>Document important interactions</li>
            <li>Ensure consistency in expectations</li>
          </ul>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Examples</h2>
          
          <div className="border-l-4 border-teal pl-4 mb-6">
            <p className="font-medium mb-2">Example 1: Parent Communication</p>
            <p className="italic mb-2">"Create a parent newsletter about an upcoming science project that:
- Explains the project goals and timeline
- Lists required materials and resources
- Describes how parents can support their child
- Includes important dates and deadlines
- Provides contact information for questions
- Maintains a positive and encouraging tone

Also include:
- A brief overview of the learning objectives
- Suggestions for home discussions
- Safety considerations
- Ways to extend learning at home"</p>
            <p className="text-sm">This prompt demonstrates how to create clear parent communications.</p>
          </div>
          
          <div className="border-l-4 border-teal pl-4 mb-6">
            <p className="font-medium mb-2">Example 2: Classroom Management</p>
            <p className="italic mb-2">"Develop a classroom management plan for a 4th grade class that includes:
- Clear expectations for behavior
- Positive reinforcement strategies
- Consequences for inappropriate behavior
- Procedures for common classroom activities
- Strategies for maintaining student engagement
- Methods for addressing conflicts

Also include:
- A daily routine schedule
- Transition procedures
- Group work guidelines
- Emergency procedures
- Documentation methods"</p>
            <p className="text-sm">This prompt shows how to create a comprehensive management plan.</p>
          </div>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Practice Activity</h2>
          <p className="mb-4">
            Create a prompt for developing communication or management materials.
            Make sure your prompt includes:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Clear specifications for the communication type</li>
            <li>Requirements for tone and content</li>
            <li>Guidelines for documentation</li>
            <li>Considerations for diverse stakeholders</li>
          </ul>
          
          <PromptTester 
            lessonContext="Communication and Classroom Management"
            initialPrompt="Create a comprehensive classroom management and communication package that includes:

1. Classroom Rules and Procedures:
   - Clear, positive behavior expectations
   - Daily routines and procedures
   - Group work guidelines
   - Technology use policies
   - Emergency procedures

2. Communication Templates:
   - Welcome letter to parents
   - Weekly progress updates
   - Behavior incident reports
   - Positive behavior notes
   - Conference preparation forms

3. Documentation System:
   - Behavior tracking forms
   - Parent communication log
   - Student progress notes
   - Intervention documentation
   - Meeting notes template

4. Support Materials:
   - Visual aids for procedures
   - Student self-monitoring tools
   - Parent resources and guides
   - Staff collaboration templates
   - Emergency contact forms

5. Cultural Considerations:
   - Multilingual resources
   - Culturally responsive strategies
   - Family engagement ideas
   - Community connection activities
   - Diversity celebration plans

Create a complete package following these specifications."
            placeholder="Try creating your own communication or management prompt..."
          />
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Reflection Questions</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>How can AI enhance communication with different stakeholders?</li>
            <li>What aspects of classroom management are most effectively supported by AI?</li>
            <li>How can you ensure AI-generated communications maintain appropriate tone and professionalism?</li>
          </ul>
        </div>
        
        <div className="flex justify-between mt-8">
          <a href="/course/applications/assessment" className="btn-primary bg-slate">
            Previous: Assessment and Feedback
          </a>
          <a href="/course/applications/professional-development" className="btn-primary">
            Next: Professional Development
          </a>
        </div>
      </div>
      
      <SourceReference fileName="Unit5_Applications_Lesson4.md" path="Test Course/TEST Prompting for Educators" />
    </Layout>
  );
} 