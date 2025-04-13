import React from 'react';
import Layout from '@/components/Layout';
import SourceReference from '@/components/SourceReference';
import CourseNavigation from '@/components/CourseNavigation';
import Link from 'next/link';

export default function Applications() {
  return (
    <Layout title="Common Applications">
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-title mb-6">Common Applications</h1>
        
        <CourseNavigation />
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Introduction to Common Applications</h2>
          <p className="mb-4">
            In this unit, you'll explore practical applications of prompting techniques in various educational contexts.
            You'll learn how to apply the TEACH framework and prompting techniques to real-world teaching scenarios.
          </p>
          <p className="mb-4">
            You'll learn how to use prompting for:
          </p>
          <div className="bg-light p-6 rounded-lg mb-4">
            <ul className="space-y-2">
              <li>Instructional design and lesson planning</li>
              <li>Instructional delivery and student engagement</li>
              <li>Assessment creation and feedback generation</li>
              <li>Communication and classroom management</li>
              <li>Professional development and career growth</li>
            </ul>
          </div>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Unit Lessons</h2>
          <div className="space-y-4">
            <Link href="/course/applications/instructional-design" 
                  className="block p-4 bg-light rounded-lg hover:bg-slate-100 transition-colors">
              <h3 className="font-semibold text-lg">Lesson 1: Instructional Design</h3>
              <p className="text-gray-600">Learn how to use prompting for lesson planning and curriculum development</p>
            </Link>
            
            <Link href="/course/applications/instructional-delivery" 
                  className="block p-4 bg-light rounded-lg hover:bg-slate-100 transition-colors">
              <h3 className="font-semibold text-lg">Lesson 2: Instructional Delivery</h3>
              <p className="text-gray-600">Master techniques for engaging students and delivering content effectively</p>
            </Link>
            
            <Link href="/course/applications/assessment" 
                  className="block p-4 bg-light rounded-lg hover:bg-slate-100 transition-colors">
              <h3 className="font-semibold text-lg">Lesson 3: Assessment and Feedback</h3>
              <p className="text-gray-600">Learn how to create assessments and provide meaningful feedback</p>
            </Link>
            
            <Link href="/course/applications/communication" 
                  className="block p-4 bg-light rounded-lg hover:bg-slate-100 transition-colors">
              <h3 className="font-semibold text-lg">Lesson 4: Communication and Classroom Management</h3>
              <p className="text-gray-600">Understand how to streamline communication and manage your classroom</p>
            </Link>
            
            <Link href="/course/applications/professional-development" 
                  className="block p-4 bg-light rounded-lg hover:bg-slate-100 transition-colors">
              <h3 className="font-semibold text-lg">Lesson 5: Professional Development</h3>
              <p className="text-gray-600">Master techniques for career planning and professional growth</p>
            </Link>
          </div>
        </div>
        
        <div className="flex justify-between mt-8">
          <a href="/course/prompting-techniques" className="btn-primary bg-slate">
            Previous: Prompting Techniques
          </a>
          <Link href="/course/applications/instructional-design" className="btn-primary">
            Start First Lesson
          </Link>
        </div>
      </div>
      
      <SourceReference fileName="Unit5_Applications.md" path="Test Course/TEST Prompting for Educators" />
    </Layout>
  );
} 