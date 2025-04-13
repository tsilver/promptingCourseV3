import React from 'react';
import Layout from '@/components/Layout';
import SourceReference from '@/components/SourceReference';
import CourseNavigation from '@/components/CourseNavigation';

export default function CourseIntroduction() {
  return (
    <Layout title="Course Introduction">
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-title mb-6">Course Introduction</h1>

        <CourseNavigation />

        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Welcome to "Prompting for Educators"</h2>
          <p className="mb-4">
            Welcome to our course on "Prompting for Educators." This course is designed to equip
            you with the skills and knowledge needed to effectively use AI tools in your teaching practice.
          </p>
          <p className="mb-4">
            As educators, we face numerous challenges daily - from creating engaging lesson plans and
            assessment materials to providing personalized feedback to students. AI tools can help
            alleviate some of these burdens, allowing you to focus more on what matters most: your students.
          </p>
        </div>

        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Course Objectives</h2>
          <p className="mb-4">By the end of this course, you will be able to:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Understand what prompting is and why it matters for educators</li>
            <li>Apply the TEACH framework to craft effective prompts</li>
            <li>Use common prompting techniques in educational contexts</li>
            <li>Implement AI tools to enhance various aspects of teaching</li>
            <li>Develop strategies to continuously improve your prompting skills</li>
          </ul>
        </div>

        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Who This Course Is For</h2>
          <p className="mb-4">
            This course is designed for teachers with no prior background in prompting who are eager to
            integrate AI tools into their teaching practices. Whether you're:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>A K-12 teacher looking to save time on administrative tasks</li>
            <li>A higher education instructor seeking to create more engaging materials</li>
            <li>A special education teacher aiming to personalize learning experiences</li>
            <li>An educational administrator wanting to streamline processes</li>
          </ul>
          <p>
            This course will provide you with practical, immediately applicable strategies to enhance
            your teaching through AI tools.
          </p>
        </div>

        <div className="flex justify-between mt-8">
          <a href="/course/pre-assessment" className="btn-primary bg-slate">
            Previous: Pre-Assessment
          </a>
          <a href="/course/teach-framework" className="btn-primary">
            Next: The TEACH Framework
          </a>
        </div>
      </div>
      
      <SourceReference fileName="Unit2_CourseIntroduction.md" path="Test Course/TEST Prompting for Educators" />
    </Layout>
  );
} 