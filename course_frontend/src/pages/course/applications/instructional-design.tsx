import React from 'react';
import Layout from '@/components/Layout';
import SourceReference from '@/components/SourceReference';
import CourseNavigation from '@/components/CourseNavigation';
import PromptTester from '@/components/PromptTester';
import LessonProgress from '@/components/LessonProgress';

export default function InstructionalDesign() {
  return (
    <Layout title="Instructional Design">
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-title mb-6">Lesson 1: Instructional Design</h1>
        
        <CourseNavigation />
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Overview</h2>
          <p className="mb-4">
            Instructional design involves creating effective learning experiences and materials.
            AI can assist in various aspects of instructional design, from developing learning
            objectives to creating engaging activities and assessments.
          </p>
          
          <div className="bg-light p-4 rounded-md mb-6">
            <h3 className="font-semibold mb-2">Learning Objectives</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Understand how AI can support instructional design</li>
              <li>Learn to create effective prompts for instructional materials</li>
              <li>Practice developing learning objectives and activities</li>
              <li>Explore AI-assisted assessment design</li>
            </ul>
          </div>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Key Concepts</h2>
          <p className="mb-4">
            When using AI for instructional design:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Start with clear learning objectives</li>
            <li>Consider different learning styles and needs</li>
            <li>Incorporate active learning strategies</li>
            <li>Ensure alignment between objectives, activities, and assessments</li>
            <li>Include opportunities for feedback and reflection</li>
          </ul>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Examples</h2>
          
          <div className="border-l-4 border-teal pl-4 mb-6">
            <p className="font-medium mb-2">Example 1: Learning Objectives</p>
            <p className="italic mb-2">"Create learning objectives for a unit on photosynthesis that:
- Are specific and measurable
- Cover different levels of Bloom's taxonomy
- Include both content and skill objectives
- Are appropriate for 7th grade students
- Align with state science standards

For each objective, also suggest:
- An appropriate assessment method
- A learning activity to achieve the objective
- Potential misconceptions to address"</p>
            <p className="text-sm">This prompt demonstrates how to create comprehensive learning objectives.</p>
          </div>
          
          <div className="border-l-4 border-teal pl-4 mb-6">
            <p className="font-medium mb-2">Example 2: Activity Design</p>
            <p className="italic mb-2">"Design a hands-on activity about the water cycle that:
- Engages multiple learning styles
- Incorporates real-world applications
- Includes clear instructions and materials list
- Provides opportunities for group work
- Allows for differentiation
- Includes assessment criteria

Also suggest:
- Pre-activity preparation
- Safety considerations
- Extension activities
- Accommodations for diverse learners"</p>
            <p className="text-sm">This prompt shows how to create detailed activity plans.</p>
          </div>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Practice Activity</h2>
          <p className="mb-4">
            Create a prompt for designing an instructional unit.
            Make sure your prompt includes:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Clear specifications for the unit</li>
            <li>Requirements for learning objectives</li>
            <li>Guidelines for activities and assessments</li>
            <li>Considerations for diverse learners</li>
          </ul>
          
          <PromptTester 
            lessonContext="Instructional Design"
            initialPrompt="Design a unit on fractions for 4th grade that includes:

1. Learning Objectives:
   - 3-5 specific, measurable objectives
   - Mix of content and skill objectives
   - Alignment with grade-level standards

2. Activities:
   - One hands-on activity using manipulatives
   - One group problem-solving activity
   - One individual practice activity
   - One real-world application activity

3. Assessments:
   - One formative assessment
   - One summative assessment
   - Rubrics or scoring guides

4. Differentiation:
   - Modifications for struggling learners
   - Extensions for advanced learners
   - Accommodations for diverse needs

5. Resources:
   - List of materials needed
   - Suggested technology tools
   - Additional resources for students

Create a complete unit plan following these specifications."
            placeholder="Try creating your own instructional design prompt..."
          />
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Reflection Questions</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>How can AI enhance the instructional design process?</li>
            <li>What aspects of instructional design are best suited for AI assistance?</li>
            <li>How can you ensure AI-generated materials meet educational standards?</li>
          </ul>
        </div>
        
        <div className="flex justify-between mt-8">
          <a href="/course/applications" className="btn-primary bg-slate">
            Previous: Applications
          </a>
          <a href="/course/applications/instructional-delivery" className="btn-primary">
            Next: Instructional Delivery
          </a>
        </div>
      </div>
      
      <SourceReference fileName="Unit5_Applications_Lesson1.md" path="Test Course/TEST Prompting for Educators" />
    </Layout>
  );
} 