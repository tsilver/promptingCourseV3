import React from 'react';
import Layout from '@/components/Layout';
import SourceReference from '@/components/SourceReference';
import CourseNavigation from '@/components/CourseNavigation';
import PromptTester from '@/components/PromptTester';
import LessonProgress from '@/components/LessonProgress';

export default function IterativeRefinement() {
  return (
    <Layout title="Iterative Refinement">
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-title mb-6">Lesson 5: Iterative Refinement</h1>
        
        <CourseNavigation />
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Overview</h2>
          <p className="mb-4">
            Iterative refinement involves progressively improving prompts through multiple iterations,
            using feedback from previous responses to enhance the quality and effectiveness of the output.
            This technique is particularly valuable for developing complex educational materials.
          </p>
          
          <div className="bg-light p-4 rounded-md mb-6">
            <h3 className="font-semibold mb-2">Learning Objectives</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Understand the concept and benefits of iterative refinement</li>
              <li>Learn how to use feedback to improve prompts</li>
              <li>Practice creating iterative refinement prompts</li>
              <li>Develop strategies for effective prompt evolution</li>
            </ul>
          </div>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Key Concepts</h2>
          <p className="mb-4">
            When using iterative refinement:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Start with a basic prompt and refine it based on results</li>
            <li>Use feedback to identify areas for improvement</li>
            <li>Make specific, targeted changes in each iteration</li>
            <li>Track changes and their effects</li>
            <li>Know when to stop refining</li>
          </ul>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Examples</h2>
          
          <div className="border-l-4 border-teal pl-4 mb-6">
            <p className="font-medium mb-2">Example 1: Lesson Plan Development</p>
            <p className="italic mb-2">"Let's develop a lesson plan through iterative refinement:

Initial Prompt:
'Create a lesson plan about fractions for 3rd grade.'

First Refinement (after reviewing initial output):
'Create a lesson plan about fractions for 3rd grade that includes:
- Hands-on activities using manipulatives
- Visual representations
- Real-world applications
- Differentiation strategies'

Second Refinement (after reviewing refined output):
'Create a lesson plan about fractions for 3rd grade that includes:
- Hands-on activities using fraction circles and strips
- Visual representations with clear examples
- Real-world applications (cooking, sharing, measuring)
- Differentiation strategies for visual, auditory, and kinesthetic learners
- Formative assessment checkpoints
- Extension activities for advanced learners'

Now create a lesson plan about decimals for 4th grade using this iterative approach."</p>
            <p className="text-sm">This prompt demonstrates how to progressively refine a lesson plan.</p>
          </div>
          
          <div className="border-l-4 border-teal pl-4 mb-6">
            <p className="font-medium mb-2">Example 2: Assessment Development</p>
            <p className="italic mb-2">"Let's develop an assessment through iterative refinement:

Initial Prompt:
'Create a quiz about the water cycle.'

First Refinement (after reviewing initial output):
'Create a quiz about the water cycle that includes:
- Multiple choice questions
- Short answer questions
- A diagram labeling activity
- Questions at different difficulty levels'

Second Refinement (after reviewing refined output):
'Create a quiz about the water cycle that includes:
- 5 multiple choice questions with clear distractors
- 3 short answer questions requiring explanation
- A diagram labeling activity with 8 key components
- Questions at basic, intermediate, and advanced levels
- A scoring rubric for the short answer questions
- Answer key with explanations'

Now create a quiz about the rock cycle using this iterative approach."</p>
            <p className="text-sm">This prompt shows how to progressively refine an assessment.</p>
          </div>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Practice Activity</h2>
          <p className="mb-4">
            Create an iterative refinement prompt for an educational task.
            Make sure your prompt includes:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Initial basic prompt</li>
            <li>Specific refinement steps</li>
            <li>Clear criteria for each iteration</li>
            <li>Guidance for evaluating improvements</li>
          </ul>
          
          <PromptTester 
            lessonContext="Iterative Refinement"
            initialPrompt="Let's develop a study guide through iterative refinement:

Initial Prompt:
'Create a study guide about the solar system.'

First Refinement (after reviewing initial output):
'Create a study guide about the solar system that includes:
- Key facts about each planet
- Important vocabulary terms
- Visual representations
- Practice questions'

Second Refinement (after reviewing refined output):
'Create a study guide about the solar system that includes:
- Key facts about each planet (size, composition, unique features)
- Important vocabulary terms with definitions and examples
- Visual representations (diagrams, charts, images)
- Practice questions at different difficulty levels
- Mnemonic devices for remembering facts
- Connections to real-world applications
- Extension activities for further exploration'

Now create a study guide about the human body systems using this iterative approach."
            placeholder="Try creating your own iterative refinement prompt..."
          />
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Reflection Questions</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>How does iterative refinement improve the quality of AI-generated content?</li>
            <li>What strategies help identify the most effective refinements?</li>
            <li>How can you determine when a prompt has been sufficiently refined?</li>
          </ul>
        </div>
        
        <div className="flex justify-between mt-8">
          <a href="/course/prompting-techniques/self-consistency" className="btn-primary bg-slate">
            Previous: Self-Consistency Techniques
          </a>
          <a href="/course/applications" className="btn-primary">
            Next: Applications
          </a>
        </div>
      </div>
      
      <SourceReference fileName="Unit4_PromptingTechniques_Lesson5.md" path="Test Course/TEST Prompting for Educators" />
    </Layout>
  );
} 