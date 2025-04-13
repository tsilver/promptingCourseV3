import React from 'react';
import Layout from '@/components/Layout';
import SourceReference from '@/components/SourceReference';

export default function PromptLibrary() {
  return (
    <Layout title="Prompt Library">
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-title mb-6">Prompt Library</h1>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Instructional Design Prompts</h2>
          <div className="bg-light p-4 rounded-md mb-6">
            <h3 className="font-semibold mb-2">Lesson Planning</h3>
            <div className="italic mb-2">
              "Create a detailed lesson plan for teaching fractions to 3rd graders, including hands-on activities and visual aids."
            </div>
            <p className="text-sm text-gray-600">Use this prompt to generate comprehensive lesson plans with activities and materials.</p>
          </div>
          
          <div className="bg-light p-4 rounded-md mb-6">
            <h3 className="font-semibold mb-2">Curriculum Development</h3>
            <div className="italic mb-2">
              "Design a unit plan for a high school biology class on cellular biology, including learning objectives, activities, and assessments."
            </div>
            <p className="text-sm text-gray-600">Use this prompt to create structured unit plans with clear learning outcomes.</p>
          </div>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Instruction Delivery Prompts</h2>
          <div className="bg-light p-4 rounded-md mb-6">
            <h3 className="font-semibold mb-2">Differentiated Instruction</h3>
            <div className="italic mb-2">
              "Modify a writing assignment on persuasive essays to accommodate a student with dyslexia, focusing on visual aids and structured outlines."
            </div>
            <p className="text-sm text-gray-600">Use this prompt to adapt assignments for diverse learning needs.</p>
          </div>
          
          <div className="bg-light p-4 rounded-md mb-6">
            <h3 className="font-semibold mb-2">Interactive Learning</h3>
            <div className="italic mb-2">
              "Create an interactive simulation for a history lesson on the American Revolution, allowing students to role-play key historical figures."
            </div>
            <p className="text-sm text-gray-600">Use this prompt to design engaging interactive learning experiences.</p>
          </div>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Assessment and Feedback Prompts</h2>
          <div className="bg-light p-4 rounded-md mb-6">
            <h3 className="font-semibold mb-2">Rubric Creation</h3>
            <div className="italic mb-2">
              "Create a rubric for a high school history essay on the causes of World War I, including criteria for content, analysis, and writing quality."
            </div>
            <p className="text-sm text-gray-600">Use this prompt to generate detailed assessment rubrics.</p>
          </div>
          
          <div className="bg-light p-4 rounded-md mb-6">
            <h3 className="font-semibold mb-2">Feedback Generation</h3>
            <div className="italic mb-2">
              "Generate constructive feedback for a student's science lab report, focusing on strengths in experimental design and suggestions for improving data analysis."
            </div>
            <p className="text-sm text-gray-600">Use this prompt to create personalized, constructive feedback.</p>
          </div>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Communication and Classroom Management Prompts</h2>
          <div className="bg-light p-4 rounded-md mb-6">
            <h3 className="font-semibold mb-2">Parent Communication</h3>
            <div className="italic mb-2">
              "Draft an email to parents about an upcoming field trip to the science museum, including details about the date, time, and required permission slips."
            </div>
            <p className="text-sm text-gray-600">Use this prompt to create clear and professional parent communications.</p>
          </div>
          
          <div className="bg-light p-4 rounded-md mb-6">
            <h3 className="font-semibold mb-2">Classroom Management</h3>
            <div className="italic mb-2">
              "Create a behavior management plan for a middle school classroom, including positive reinforcement strategies and clear consequences."
            </div>
            <p className="text-sm text-gray-600">Use this prompt to develop effective classroom management strategies.</p>
          </div>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Professional Development Prompts</h2>
          <div className="bg-light p-4 rounded-md mb-6">
            <h3 className="font-semibold mb-2">Career Planning</h3>
            <div className="italic mb-2">
              "Identify key skills and qualifications needed for a leadership role in education, such as a department head or curriculum coordinator."
            </div>
            <p className="text-sm text-gray-600">Use this prompt to explore career advancement opportunities.</p>
          </div>
          
          <div className="bg-light p-4 rounded-md mb-6">
            <h3 className="font-semibold mb-2">Professional Growth</h3>
            <div className="italic mb-2">
              "Create a plan for developing self-directed learning goals related to educational technology, including specific resources and milestones."
            </div>
            <p className="text-sm text-gray-600">Use this prompt to design personalized professional development plans.</p>
          </div>
        </div>
        
        <div className="flex justify-center mt-8">
          <a href="/course/conclusion" className="btn-primary">
            Return to Conclusion
          </a>
        </div>
      </div>
      
      <SourceReference fileName="PromptLibrary.md" path="Test Course/TEST Prompting for Educators" />
    </Layout>
  );
} 