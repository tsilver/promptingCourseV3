import React from 'react';
import Layout from '@/components/Layout';
import SourceReference from '@/components/SourceReference';
import CourseNavigation from '@/components/CourseNavigation';
import Link from 'next/link';

export default function TeachFramework() {
  return (
    <Layout title="The TEACH Framework">
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-title mb-6">The TEACH Framework</h1>
        
        <CourseNavigation />
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Introduction to the TEACH Framework</h2>
          <p className="mb-4">
            The TEACH framework is a structured approach to prompt engineering specifically designed for educators.
            It provides a comprehensive method for creating effective prompts that yield the best results from AI systems.
          </p>
          <p className="mb-4">
            Each letter in TEACH represents a critical component of an effective prompt:
          </p>
          <div className="bg-light p-6 rounded-lg mb-4">
            <ul className="space-y-2">
              <li className="flex">
                <span className="font-bold text-lg text-navy mr-2">T</span>
                <span><strong>Tone and persona</strong> - Setting the voice and character of the AI response</span>
              </li>
              <li className="flex">
                <span className="font-bold text-lg text-navy mr-2">E</span>
                <span><strong>Explicit task</strong> - Clearly defining what you want the AI to do</span>
              </li>
              <li className="flex">
                <span className="font-bold text-lg text-navy mr-2">A</span>
                <span><strong>Arrangement of output</strong> - Specifying how you want the response formatted</span>
              </li>
              <li className="flex">
                <span className="font-bold text-lg text-navy mr-2">C</span>
                <span><strong>Context and constraints</strong> - Providing background information and limitations</span>
              </li>
              <li className="flex">
                <span className="font-bold text-lg text-navy mr-2">H</span>
                <span><strong>Higher level refinements</strong> - Fine-tuning to improve the quality of responses</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Unit Lessons</h2>
          <div className="space-y-4">
            <Link href="/course/teach-framework/tone-persona" 
                  className="block p-4 bg-light rounded-lg hover:bg-slate-100 transition-colors">
              <h3 className="font-semibold text-lg">Lesson 1: Tone and Persona</h3>
              <p className="text-gray-600">Learn how to set the right voice and character for AI responses</p>
            </Link>
            
            <Link href="/course/teach-framework/explicit-task" 
                  className="block p-4 bg-light rounded-lg hover:bg-slate-100 transition-colors">
              <h3 className="font-semibold text-lg">Lesson 2: Explicit Task</h3>
              <p className="text-gray-600">Master the art of clearly defining what you want the AI to do</p>
            </Link>
            
            <Link href="/course/teach-framework/arrangement" 
                  className="block p-4 bg-light rounded-lg hover:bg-slate-100 transition-colors">
              <h3 className="font-semibold text-lg">Lesson 3: Arrangement of Output</h3>
              <p className="text-gray-600">Learn how to specify and control the format of AI responses</p>
            </Link>
            
            <Link href="/course/teach-framework/context-constraints" 
                  className="block p-4 bg-light rounded-lg hover:bg-slate-100 transition-colors">
              <h3 className="font-semibold text-lg">Lesson 4: Context and Constraints</h3>
              <p className="text-gray-600">Understand how to provide effective background information and limitations</p>
            </Link>
            
            <Link href="/course/teach-framework/refinements" 
                  className="block p-4 bg-light rounded-lg hover:bg-slate-100 transition-colors">
              <h3 className="font-semibold text-lg">Lesson 5: Higher Level Refinements</h3>
              <p className="text-gray-600">Master advanced techniques for improving prompt quality</p>
            </Link>
          </div>
        </div>
        
        <div className="flex justify-between mt-8">
          <a href="/course/introduction" className="btn-primary bg-slate">
            Previous: Course Introduction
          </a>
          <Link href="/course/teach-framework/tone-persona" className="btn-primary">
            Start First Lesson
          </Link>
        </div>
      </div>
      
      <SourceReference fileName="Unit3_TEACHFramework.md" path="Test Course/TEST Prompting for Educators" />
    </Layout>
  );
} 