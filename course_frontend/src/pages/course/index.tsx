import React from 'react';
import Layout from '@/components/Layout';
import SourceReference from '@/components/SourceReference';
import CourseNavigation from '@/components/CourseNavigation';

export default function Course() {
  return (
    <Layout title="Course">
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-title mb-6">Welcome to the Course</h1>
        
        <CourseNavigation />
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Course Overview</h2>
          <p className="mb-4">
            This course is designed to help educators harness the power of AI to enhance their teaching practice.
            Through a combination of theoretical understanding and practical application, you'll learn how to
            effectively use AI tools to create engaging learning experiences, streamline administrative tasks,
            and support student success.
          </p>
          <p className="mb-4">
            The course is divided into three main units:
          </p>
          <div className="bg-light p-6 rounded-lg mb-4">
            <ul className="space-y-2">
              <li className="flex">
                <span className="font-bold text-lg text-navy mr-2">1</span>
                <span><strong>The TEACH Framework</strong> - A structured approach to effective AI prompting</span>
              </li>
              <li className="flex">
                <span className="font-bold text-lg text-navy mr-2">2</span>
                <span><strong>Prompting Techniques</strong> - Advanced methods for getting the most out of AI</span>
              </li>
              <li className="flex">
                <span className="font-bold text-lg text-navy mr-2">3</span>
                <span><strong>Applications for Teachers</strong> - Practical ways to integrate AI into your teaching</span>
              </li>
            </ul>
          </div>
          <p className="mb-4">
            Each unit builds upon the previous one, providing you with a comprehensive understanding of how to
            effectively use AI in educational settings. You'll learn through a combination of:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Interactive examples and demonstrations</li>
            <li>Hands-on practice activities</li>
            <li>Real-world application scenarios</li>
            <li>Reflection questions to deepen your understanding</li>
          </ul>
          <p>
            Ready to begin? Click "Next" to start with the Pre-Assessment.
          </p>
        </div>
        
        <div className="flex justify-between mt-8">
          <a href="/" className="btn-primary bg-slate">
            Previous: Home
          </a>
          <a href="/course/pre-assessment" className="btn-primary">
            Next: Pre-Assessment
          </a>
        </div>
      </div>
      
      <SourceReference fileName="CourseOverview.md" path="Test Course/TEST Prompting for Educators" />
    </Layout>
  );
} 