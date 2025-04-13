import React from 'react';
import Layout from '@/components/Layout';
import SourceReference from '@/components/SourceReference';
import CourseNavigation from '@/components/CourseNavigation';
import PromptTester from '@/components/PromptTester';
import LessonProgress from '@/components/LessonProgress';

export default function InstructionalDelivery() {
  return (
    <Layout title="Instructional Delivery">
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-title mb-6">Lesson 2: Instructional Delivery</h1>
        
        <CourseNavigation />
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Overview</h2>
          <p className="mb-4">
            Instructional delivery involves effectively presenting content and facilitating learning
            experiences. AI can assist in creating engaging presentations, generating discussion
            questions, and providing real-time support during instruction.
          </p>
          
          <div className="bg-light p-4 rounded-md mb-6">
            <h3 className="font-semibold mb-2">Learning Objectives</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Understand how AI can enhance instructional delivery</li>
              <li>Learn to create prompts for engaging presentations</li>
              <li>Practice developing discussion questions and activities</li>
              <li>Explore AI tools for real-time classroom support</li>
            </ul>
          </div>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Key Concepts</h2>
          <p className="mb-4">
            When using AI for instructional delivery:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Focus on student engagement and interaction</li>
            <li>Incorporate multiple modes of presentation</li>
            <li>Prepare for different learning styles</li>
            <li>Include opportunities for student participation</li>
            <li>Plan for flexibility and adaptation</li>
          </ul>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Examples</h2>
          
          <div className="border-l-4 border-teal pl-4 mb-6">
            <p className="font-medium mb-2">Example 1: Presentation Development</p>
            <p className="italic mb-2">"Create a presentation about the water cycle for 5th graders that:
- Uses clear, age-appropriate language
- Includes engaging visuals and animations
- Incorporates interactive elements
- Provides opportunities for student questions
- Includes real-world examples
- Has a clear structure with introduction, main points, and summary

Also include:
- Discussion questions for each section
- Suggested activities to reinforce concepts
- Key vocabulary with definitions
- Assessment questions"</p>
            <p className="text-sm">This prompt demonstrates how to create an engaging presentation.</p>
          </div>
          
          <div className="border-l-4 border-teal pl-4 mb-6">
            <p className="font-medium mb-2">Example 2: Discussion Facilitation</p>
            <p className="italic mb-2">"Generate a set of discussion questions about climate change that:
- Progress from basic to complex understanding
- Encourage critical thinking
- Include multiple perspectives
- Connect to students' lives
- Promote respectful debate

For each question, also provide:
- Suggested follow-up questions
- Potential student responses
- Ways to address misconceptions
- Extension activities"</p>
            <p className="text-sm">This prompt shows how to facilitate meaningful discussions.</p>
          </div>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Practice Activity</h2>
          <p className="mb-4">
            Create a prompt for developing instructional delivery materials.
            Make sure your prompt includes:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Clear specifications for the delivery format</li>
            <li>Requirements for engagement and interaction</li>
            <li>Guidelines for student participation</li>
            <li>Considerations for diverse learners</li>
          </ul>
          
          <PromptTester 
            lessonContext="Instructional Delivery"
            initialPrompt="Create a lesson delivery plan for teaching fractions to 4th graders that includes:

1. Presentation Materials:
   - Visual aids and examples
   - Step-by-step explanations
   - Real-world applications
   - Interactive elements

2. Discussion Questions:
   - Opening questions to activate prior knowledge
   - Questions to check understanding
   - Questions to promote deeper thinking
   - Questions to connect to real life

3. Activities:
   - One whole-class activity
   - One small-group activity
   - One individual practice activity
   - One hands-on demonstration

4. Assessment:
   - Questions to check understanding
   - Exit ticket ideas
   - Homework suggestions
   - Review activities

5. Differentiation:
   - Modifications for different learning styles
   - Support for struggling learners
   - Challenges for advanced learners
   - Accommodations for diverse needs

Create a complete delivery plan following these specifications."
            placeholder="Try creating your own instructional delivery prompt..."
          />
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Reflection Questions</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>How can AI enhance the delivery of instruction?</li>
            <li>What types of instructional materials are most effectively created with AI?</li>
            <li>How can you ensure AI-generated materials maintain student engagement?</li>
          </ul>
        </div>
        
        <div className="flex justify-between mt-8">
          <a href="/course/applications/instructional-design" className="btn-primary bg-slate">
            Previous: Instructional Design
          </a>
          <a href="/course/applications/assessment" className="btn-primary">
            Next: Assessment and Feedback
          </a>
        </div>
      </div>
      
      <SourceReference fileName="Unit5_Applications_Lesson2.md" path="Test Course/TEST Prompting for Educators" />
    </Layout>
  );
} 