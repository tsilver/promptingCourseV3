import React from 'react';
import Layout from '@/components/Layout';
import SourceReference from '@/components/SourceReference';
import CourseNavigation from '@/components/CourseNavigation';
import Link from 'next/link';

export default function PromptingTechniques() {
  return (
    <Layout title="Prompting Techniques">
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-title mb-6">Prompting Techniques</h1>
        
        <CourseNavigation />
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Introduction to Prompting Techniques</h2>
          <p className="mb-4">
            In this unit, you'll learn various prompting techniques that can help you get better results from AI systems.
            These techniques will help you craft more effective prompts for different educational scenarios.
          </p>
          <p className="mb-4">
            You'll learn how to:
          </p>
          <div className="bg-light p-6 rounded-lg mb-4">
            <ul className="space-y-2">
              <li>Use zero-shot and few-shot prompting to guide AI responses</li>
              <li>Apply chain-of-thought prompting to break down complex tasks</li>
              <li>Implement self-consistency techniques for more reliable outputs</li>
              <li>Use iterative refinement to improve prompt quality</li>
              <li>Apply specialized techniques for different educational contexts</li>
            </ul>
          </div>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Unit Lessons</h2>
          <div className="space-y-4">
            <Link href="/course/prompting-techniques/zero-shot" 
                  className="block p-4 bg-light rounded-lg hover:bg-slate-100 transition-colors">
              <h3 className="font-semibold text-lg">Lesson 1: Zero-Shot Prompting</h3>
              <p className="text-gray-600">Learn how to create effective prompts without examples</p>
            </Link>
            
            <Link href="/course/prompting-techniques/few-shot" 
                  className="block p-4 bg-light rounded-lg hover:bg-slate-100 transition-colors">
              <h3 className="font-semibold text-lg">Lesson 2: Few-Shot Prompting</h3>
              <p className="text-gray-600">Master the art of providing examples in your prompts</p>
            </Link>
            
            <Link href="/course/prompting-techniques/chain-of-thought" 
                  className="block p-4 bg-light rounded-lg hover:bg-slate-100 transition-colors">
              <h3 className="font-semibold text-lg">Lesson 3: Chain-of-Thought Prompting</h3>
              <p className="text-gray-600">Learn how to break down complex tasks into steps</p>
            </Link>
            
            <Link href="/course/prompting-techniques/self-consistency" 
                  className="block p-4 bg-light rounded-lg hover:bg-slate-100 transition-colors">
              <h3 className="font-semibold text-lg">Lesson 4: Self-Consistency Techniques</h3>
              <p className="text-gray-600">Understand how to ensure reliable and consistent outputs</p>
            </Link>
            
            <Link href="/course/prompting-techniques/iterative-refinement" 
                  className="block p-4 bg-light rounded-lg hover:bg-slate-100 transition-colors">
              <h3 className="font-semibold text-lg">Lesson 5: Iterative Refinement</h3>
              <p className="text-gray-600">Master the process of improving prompts through iteration</p>
            </Link>
          </div>
        </div>
        
        <div className="flex justify-between mt-8">
          <a href="/course/teach-framework" className="btn-primary bg-slate">
            Previous: TEACH Framework
          </a>
          <Link href="/course/prompting-techniques/zero-shot" className="btn-primary">
            Start First Lesson
          </Link>
        </div>
      </div>
      
      <SourceReference fileName="Unit4_PromptingTechniques.md" path="Test Course/TEST Prompting for Educators" />
    </Layout>
  );
} 