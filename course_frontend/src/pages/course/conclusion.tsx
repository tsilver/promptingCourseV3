import React from 'react';
import Layout from '@/components/Layout';
import SourceReference from '@/components/SourceReference';
import CourseNavigation from '@/components/CourseNavigation';

export default function Conclusion() {
  return (
    <Layout title="Conclusion">
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-title mb-6">Course Conclusion</h1>
        
        <CourseNavigation />
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Congratulations!</h2>
          <p className="mb-4">
            You've completed the "Prompting for Educators" course! Throughout this learning journey, you've
            gained valuable skills and knowledge that will help you leverage AI tools to enhance your
            teaching practice, reduce your workload, and improve student engagement.
          </p>
          <p>
            By now, you should feel comfortable using the TEACH framework to craft effective prompts
            and apply various prompting techniques in educational contexts.
          </p>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>
              <strong>The TEACH Framework</strong> provides a structured approach to crafting effective prompts:
              Tone and persona, Explicit task, Arrangement of output, Context and constraints, Higher level refinements.
            </li>
            <li>
              <strong>Prompting Techniques</strong> such as chain-of-thought, few-shot learning, and system prompts
              can significantly enhance the quality of AI-generated content for educational purposes.
            </li>
            <li>
              <strong>Practical Applications</strong> of AI in education include lesson planning, differentiated instruction,
              assessment creation, feedback generation, and administrative support.
            </li>
            <li>
              <strong>Continuous Improvement</strong> is key – the field of AI is rapidly evolving, and regular practice
              will help you refine your prompting skills over time.
            </li>
          </ul>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Next Steps</h2>
          <p className="mb-4">To continue developing your AI prompting skills:</p>
          <ol className="list-decimal list-inside space-y-2 mb-4">
            <li>
              <strong>Practice regularly</strong> with real-world educational tasks that you face in your daily teaching.
            </li>
            <li>
              <strong>Join our community</strong> of educators who are exploring AI applications in education.
            </li>
            <li>
              <strong>Start small</strong> by applying these techniques to one aspect of your teaching at a time.
            </li>
            <li>
              <strong>Share your experiences</strong> with colleagues and learn from their approaches as well.
            </li>
            <li>
              <strong>Stay current</strong> with developments in AI education tools through our newsletter and resources page.
            </li>
          </ol>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Prompt Library</h2>
          <p className="mb-4">
            We've compiled a comprehensive library of prompts from throughout the course that you can use as templates
            for your own teaching needs. This collection includes:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Instructional design prompts for lesson planning and curriculum development</li>
            <li>Instruction delivery prompts for personalized learning and differentiated instruction</li>
            <li>Assessment and feedback prompts for creating rubrics and providing constructive feedback</li>
            <li>Communication and classroom management prompts for emails, newsletters, and meetings</li>
            <li>Professional development prompts for career planning and growth</li>
          </ul>
          <div className="flex justify-center mt-6">
            <a href="/prompt-library" className="btn-primary">
              Access Prompt Library
            </a>
          </div>
        </div>
        
        <div className="card">
          <h2 className="text-subtitle mb-4">Final Assessment</h2>
          <p className="mb-4">
            To cement your learning and receive your course completion certificate, please complete the final assessment
            available on the resources page. This assessment will help you apply what you've learned and demonstrate
            your understanding of the core concepts covered in this course.
          </p>
          <div className="flex justify-center mt-6">
            <a href="/resources" className="btn-primary">
              Access Final Assessment
            </a>
          </div>
        </div>
        
        <div className="flex justify-between mt-8">
          <a href="/course/applications" className="btn-primary bg-slate">
            Previous: Applications of Prompting
          </a>
          <a href="/" className="btn-primary">
            Return to Home
          </a>
        </div>
      </div>
      
      <SourceReference fileName="Unit6_Conclusion.md" path="Test Course/TEST Prompting for Educators" />
    </Layout>
  );
} 