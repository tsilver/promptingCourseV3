import React from 'react';
import Layout from '@/components/Layout';
import SourceReference from '@/components/SourceReference';
import CourseNavigation from '@/components/CourseNavigation';
import PromptTester from '@/components/PromptTester';
import LessonProgress from '@/components/LessonProgress';

export default function Assessment() {
  return (
    <Layout title="Assessment and Feedback">
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-title mb-6">Lesson 3: Assessment and Feedback</h1>
        
        <CourseNavigation />
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Overview</h2>
          <p className="mb-4">
            Assessment and feedback are crucial components of the learning process. AI can assist in
            creating various types of assessments, generating feedback, and analyzing student work
            to inform instruction.
          </p>
          
          <div className="bg-light p-4 rounded-md mb-6">
            <h3 className="font-semibold mb-2">Learning Objectives</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Understand how AI can support assessment creation</li>
              <li>Learn to generate effective feedback</li>
              <li>Practice creating different types of assessments</li>
              <li>Explore AI tools for analyzing student work</li>
            </ul>
          </div>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Key Concepts</h2>
          <p className="mb-4">
            When using AI for assessment and feedback:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Align assessments with learning objectives</li>
            <li>Include various assessment types</li>
            <li>Provide specific, actionable feedback</li>
            <li>Consider different learning styles</li>
            <li>Use assessment data to inform instruction</li>
          </ul>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Examples</h2>
          
          <div className="border-l-4 border-teal pl-4 mb-6">
            <p className="font-medium mb-2">Example 1: Assessment Creation</p>
            <p className="italic mb-2">"Create a comprehensive assessment about the water cycle that includes:
- 5 multiple choice questions with clear distractors
- 3 short answer questions requiring explanation
- 1 diagram labeling activity
- 1 real-world application question
- A scoring rubric for the short answer questions
- Answer key with explanations

For each question:
- Specify the learning objective it assesses
- Indicate the difficulty level
- Provide sample student responses
- Suggest common misconceptions"</p>
            <p className="text-sm">This prompt demonstrates how to create a balanced assessment.</p>
          </div>
          
          <div className="border-l-4 border-teal pl-4 mb-6">
            <p className="font-medium mb-2">Example 2: Feedback Generation</p>
            <p className="italic mb-2">"Generate feedback for a student's essay about climate change that:
- Identifies strengths in the writing
- Points out areas for improvement
- Provides specific suggestions for revision
- Includes examples of better phrasing
- Maintains a constructive tone
- Encourages further development

Also include:
- A summary of the main points
- Suggestions for additional research
- Questions to prompt deeper thinking
- Resources for improvement"</p>
            <p className="text-sm">This prompt shows how to generate detailed, constructive feedback.</p>
          </div>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Practice Activity</h2>
          <p className="mb-4">
            Create a prompt for developing assessment materials.
            Make sure your prompt includes:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Clear specifications for the assessment type</li>
            <li>Requirements for questions and tasks</li>
            <li>Guidelines for feedback and scoring</li>
            <li>Considerations for diverse learners</li>
          </ul>
          
          <PromptTester 
            lessonContext="Assessment and Feedback"
            initialPrompt="Create an assessment package for a unit on fractions that includes:

1. Formative Assessments:
   - Exit ticket questions
   - Quick check activities
   - Discussion prompts
   - Observation checklists

2. Summative Assessment:
   - Multiple choice questions
   - Short answer questions
   - Problem-solving tasks
   - Real-world application questions

3. Feedback Templates:
   - General feedback comments
   - Specific improvement suggestions
   - Encouragement statements
   - Questions for reflection

4. Scoring Materials:
   - Rubrics for each assessment type
   - Answer keys with explanations
   - Sample student responses
   - Grading guidelines

5. Differentiation:
   - Modified versions for struggling learners
   - Extended versions for advanced learners
   - Alternative assessment options
   - Accommodations for diverse needs

Create a complete assessment package following these specifications."
            placeholder="Try creating your own assessment prompt..."
          />
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Reflection Questions</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>How can AI enhance the assessment process?</li>
            <li>What types of assessments are most effectively created with AI?</li>
            <li>How can you ensure AI-generated feedback is meaningful and helpful?</li>
          </ul>
        </div>
        
        <div className="flex justify-between mt-8">
          <a href="/course/applications/instructional-delivery" className="btn-primary bg-slate">
            Previous: Instructional Delivery
          </a>
          <a href="/course/applications/communication" className="btn-primary">
            Next: Communication and Classroom Management
          </a>
        </div>
      </div>
      
      <SourceReference fileName="Unit5_Applications_Lesson3.md" path="Test Course/TEST Prompting for Educators" />
    </Layout>
  );
} 