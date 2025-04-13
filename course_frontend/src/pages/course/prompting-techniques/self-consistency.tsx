import React from 'react';
import Layout from '@/components/Layout';
import SourceReference from '@/components/SourceReference';
import CourseNavigation from '@/components/CourseNavigation';
import PromptTester from '@/components/PromptTester';
import LessonProgress from '@/components/LessonProgress';

export default function SelfConsistency() {
  return (
    <Layout title="Self-Consistency Techniques">
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-title mb-6">Lesson 4: Self-Consistency Techniques</h1>
        
        <CourseNavigation />
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Overview</h2>
          <p className="mb-4">
            Self-consistency techniques involve prompting the AI to verify its own responses and ensure
            consistency across different aspects of the output. This approach helps improve the accuracy
            and reliability of AI-generated educational content.
          </p>
          
          <div className="bg-light p-4 rounded-md mb-6">
            <h3 className="font-semibold mb-2">Learning Objectives</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Understand the concept and benefits of self-consistency techniques</li>
              <li>Learn how to structure prompts for self-verification</li>
              <li>Practice creating self-consistency prompts for educational tasks</li>
              <li>Develop strategies for ensuring content accuracy and reliability</li>
            </ul>
          </div>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Key Concepts</h2>
          <p className="mb-4">
            When using self-consistency techniques:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Ask the AI to verify its own responses</li>
            <li>Check for consistency across different parts of the output</li>
            <li>Include cross-referencing steps</li>
            <li>Encourage the AI to identify and correct inconsistencies</li>
            <li>Use multiple verification methods</li>
          </ul>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Examples</h2>
          
          <div className="border-l-4 border-teal pl-4 mb-6">
            <p className="font-medium mb-2">Example 1: Lesson Plan Verification</p>
            <p className="italic mb-2">"Create a lesson plan about photosynthesis and then verify its consistency:

1. First, create a lesson plan with:
   - Learning objectives
   - Key concepts
   - Activities
   - Assessment methods

2. Then, verify the consistency by checking:
   - Do the activities align with the learning objectives?
   - Are all key concepts covered in the activities?
   - Do the assessment methods measure the stated objectives?
   - Is the difficulty level consistent throughout?

3. Make any necessary adjustments to ensure consistency.

Now create and verify a lesson plan about the water cycle following this approach."</p>
            <p className="text-sm">This prompt demonstrates how to verify consistency across different parts of a lesson plan.</p>
          </div>
          
          <div className="border-l-4 border-teal pl-4 mb-6">
            <p className="font-medium mb-2">Example 2: Assessment Question Validation</p>
            <p className="italic mb-2">"Create and validate a set of assessment questions:

1. First, create 5 multiple choice questions about fractions.

2. Then, verify each question by checking:
   - Is the question clear and unambiguous?
   - Do all answer choices make sense?
   - Is there only one correct answer?
   - Is the difficulty level appropriate?
   - Does it align with the learning objectives?

3. Revise any questions that don't meet these criteria.

Now create and validate a set of questions about the solar system following this approach."</p>
            <p className="text-sm">This prompt shows how to verify the consistency and quality of assessment questions.</p>
          </div>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Practice Activity</h2>
          <p className="mb-4">
            Create a self-consistency prompt for an educational task.
            Make sure your prompt includes:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Initial content creation instructions</li>
            <li>Specific verification steps</li>
            <li>Criteria for consistency checking</li>
            <li>Instructions for making adjustments</li>
          </ul>
          
          <PromptTester 
            lessonContext="Self-Consistency Techniques"
            initialPrompt="Create and verify a study guide about the American Revolution:

1. First, create a study guide with:
   - Key events and dates
   - Important figures
   - Main concepts
   - Review questions

2. Then, verify the consistency by checking:
   - Are all key events properly dated?
   - Do the important figures match the events they're associated with?
   - Are the main concepts clearly explained?
   - Do the review questions cover all the important content?
   - Is the level of detail consistent throughout?

3. Make any necessary adjustments to ensure consistency.

Create and verify a study guide about the Civil War following this approach."
            placeholder="Try creating your own self-consistency prompt..."
          />
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Reflection Questions</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>How does self-consistency verification improve the quality of AI-generated content?</li>
            <li>What types of educational materials benefit most from self-consistency techniques?</li>
            <li>How can you ensure the verification process is thorough and effective?</li>
          </ul>
        </div>
        
        <div className="flex justify-between mt-8">
          <a href="/course/prompting-techniques/chain-of-thought" className="btn-primary bg-slate">
            Previous: Chain-of-Thought Prompting
          </a>
          <a href="/course/prompting-techniques/iterative-refinement" className="btn-primary">
            Next: Iterative Refinement
          </a>
        </div>
      </div>
      
      <SourceReference fileName="Unit4_PromptingTechniques_Lesson4.md" path="Test Course/TEST Prompting for Educators" />
    </Layout>
  );
} 