import React from 'react';
import Layout from '@/components/Layout';
import SourceReference from '@/components/SourceReference';
import CourseNavigation from '@/components/CourseNavigation';
import PromptTester from '@/components/PromptTester';
import LessonProgress from '@/components/LessonProgress';

export default function ProfessionalDevelopment() {
  return (
    <Layout title="Professional Development">
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-title mb-6">Lesson 5: Professional Development</h1>
        
        <CourseNavigation />
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Overview</h2>
          <p className="mb-4">
            Professional development is essential for educators to stay current with best practices,
            enhance their teaching skills, and advance their careers. AI can support various aspects
            of professional growth, from creating personalized learning plans to developing
            presentation materials and research summaries.
          </p>
          
          <div className="bg-light p-4 rounded-md mb-6">
            <h3 className="font-semibold mb-2">Learning Objectives</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Understand how AI can support professional development</li>
              <li>Learn to create personalized learning plans</li>
              <li>Practice developing professional materials</li>
              <li>Explore AI tools for research and reflection</li>
            </ul>
          </div>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Key Concepts</h2>
          <p className="mb-4">
            When using AI for professional development:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Set clear professional goals</li>
            <li>Identify areas for growth</li>
            <li>Create structured learning plans</li>
            <li>Document progress and reflections</li>
            <li>Share knowledge with colleagues</li>
          </ul>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Examples</h2>
          
          <div className="border-l-4 border-teal pl-4 mb-6">
            <p className="font-medium mb-2">Example 1: Professional Learning Plan</p>
            <p className="italic mb-2">"Create a professional development plan for a teacher interested in project-based learning that includes:
- Specific learning goals and objectives
- Timeline for achieving goals
- Required resources and materials
- Professional learning activities
- Assessment methods
- Reflection prompts

Also include:
- Relevant research articles
- Professional organizations to join
- Conference recommendations
- Online course suggestions
- Mentorship opportunities"</p>
            <p className="text-sm">This prompt demonstrates how to create a comprehensive learning plan.</p>
          </div>
          
          <div className="border-l-4 border-teal pl-4 mb-6">
            <p className="font-medium mb-2">Example 2: Conference Presentation</p>
            <p className="italic mb-2">"Develop a conference presentation about integrating technology in the classroom that includes:
- Clear learning objectives
- Engaging introduction
- Research-based content
- Practical examples
- Interactive activities
- Key takeaways

Also include:
- Presentation slides
- Speaker notes
- Handout materials
- Discussion questions
- Resource list"</p>
            <p className="text-sm">This prompt shows how to create professional presentation materials.</p>
          </div>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Practice Activity</h2>
          <p className="mb-4">
            Create a prompt for developing professional development materials.
            Make sure your prompt includes:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Clear specifications for the development focus</li>
            <li>Requirements for content and format</li>
            <li>Guidelines for reflection and assessment</li>
            <li>Considerations for sharing and collaboration</li>
          </ul>
          
          <PromptTester 
            lessonContext="Professional Development"
            initialPrompt="Create a comprehensive professional development package that includes:

1. Personal Growth Plan:
   - Professional goals and objectives
   - Skills development roadmap
   - Learning activities and timeline
   - Assessment methods
   - Reflection prompts
   - Progress tracking tools

2. Research and Resources:
   - Literature review on chosen topic
   - Best practices summary
   - Case studies and examples
   - Resource collection
   - Implementation strategies
   - Evaluation methods

3. Presentation Materials:
   - Conference presentation outline
   - Workshop materials
   - Training session plans
   - Visual aids and slides
   - Handout templates
   - Activity guides

4. Documentation Tools:
   - Professional portfolio template
   - Observation forms
   - Feedback collection tools
   - Progress tracking sheets
   - Reflection journals
   - Achievement logs

5. Collaboration Resources:
   - Peer coaching guides
   - Team meeting templates
   - Knowledge sharing tools
   - Community building activities
   - Professional network suggestions
   - Mentorship guidelines

Create a complete package following these specifications."
            placeholder="Try creating your own professional development prompt..."
          />
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Reflection Questions</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>How can AI support your professional growth as an educator?</li>
            <li>What types of professional development materials are most effectively created with AI?</li>
            <li>How can you ensure AI-generated professional materials maintain quality and relevance?</li>
          </ul>
        </div>
        
        <div className="flex justify-between mt-8">
          <a href="/course/applications/communication" className="btn-primary bg-slate">
            Previous: Communication and Classroom Management
          </a>
          <a href="/course/conclusion" className="btn-primary">
            Next: Course Conclusion
          </a>
        </div>
      </div>
      
      <SourceReference fileName="Unit5_Applications_Lesson5.md" path="Test Course/TEST Prompting for Educators" />
    </Layout>
  );
} 