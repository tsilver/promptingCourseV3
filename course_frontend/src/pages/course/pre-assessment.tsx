import React from 'react';
import Layout from '@/components/Layout';
import SourceReference from '@/components/SourceReference';
import CourseNavigation from '@/components/CourseNavigation';
import Link from 'next/link';

export default function PreAssessment() {
  return (
    <Layout title="Pre-Assessment">
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-title mb-6">Pre-Assessment: Your Current Prompting Skills</h1>
        
        <CourseNavigation />

        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Before We Begin</h2>
          <p className="mb-4">
            Before diving into the course content, let's take a moment to assess your current understanding 
            and skills related to AI prompting. This pre-assessment will help you gauge your starting point 
            and better track your progress throughout the course.
          </p>
          <p>
            There are no right or wrong answers here—this is purely to help you reflect on your current knowledge
            and identify areas where this course will be most beneficial to your professional development as an educator.
          </p>
        </div>
        
        <div className="card mb-8">
          <h2 className="text-subtitle mb-4">Self-Assessment Questions</h2>
          <p className="mb-6">Rate your confidence level for each of the following statements on a scale of 1-5, where:</p>
          <ul className="list-none space-y-1 mb-6">
            <li>1 = Not confident at all</li>
            <li>2 = Slightly confident</li>
            <li>3 = Moderately confident</li>
            <li>4 = Very confident</li>
            <li>5 = Extremely confident</li>
          </ul>
          
          <form className="space-y-8">
            <div className="space-y-6">
              <div>
                <p className="font-medium mb-2">1. I can explain what "prompt engineering" means to a colleague.</p>
                <div className="flex space-x-4">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <label key={rating} className="flex items-center">
                      <input type="radio" name="question1" value={rating} className="mr-1" />
                      <span>{rating}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <p className="font-medium mb-2">2. I understand how to structure an effective prompt for AI tools.</p>
                <div className="flex space-x-4">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <label key={rating} className="flex items-center">
                      <input type="radio" name="question2" value={rating} className="mr-1" />
                      <span>{rating}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <p className="font-medium mb-2">3. I can use AI tools to create educational materials for my classroom.</p>
                <div className="flex space-x-4">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <label key={rating} className="flex items-center">
                      <input type="radio" name="question3" value={rating} className="mr-1" />
                      <span>{rating}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <p className="font-medium mb-2">4. I can troubleshoot when an AI tool doesn't give me the response I want.</p>
                <div className="flex space-x-4">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <label key={rating} className="flex items-center">
                      <input type="radio" name="question4" value={rating} className="mr-1" />
                      <span>{rating}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <p className="font-medium mb-2">5. I can teach my students how to use AI tools responsibly.</p>
                <div className="flex space-x-4">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <label key={rating} className="flex items-center">
                      <input type="radio" name="question5" value={rating} className="mr-1" />
                      <span>{rating}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <label className="block mb-2 font-medium">What specific aspects of using AI in education are you most interested in learning about?</label>
              <textarea 
                className="w-full p-3 border border-light rounded-md"
                rows={4}
                placeholder="Your answer here..."
              ></textarea>
            </div>
            
            <div className="text-center">
              <Link href="/course/introduction" className="btn-primary px-8 py-3 text-lg font-semibold bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-200">
                Begin Your AI Teaching Journey →
              </Link>
            </div>
          </form>
        </div>
      </div>
      
      <SourceReference fileName="Unit1_PreAssessment.md" path="Test Course/TEST Prompting for Educators" />
    </Layout>
  );
} 