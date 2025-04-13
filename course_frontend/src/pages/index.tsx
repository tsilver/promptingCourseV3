import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import SourceReference from '@/components/SourceReference';

export default function Home() {
  const courseUnits = [
    { id: 1, title: 'Pre-Assessment', path: '/course/pre-assessment' },
    { id: 2, title: 'Course Introduction', path: '/course/introduction' },
    { id: 3, title: 'The TEACH Framework', path: '/course/teach-framework' },
    { id: 4, title: 'Common Prompting Techniques', path: '/course/prompting-techniques' },
    { id: 5, title: 'Common Applications of Prompting for Teachers', path: '/course/applications' },
    { id: 6, title: 'Conclusion', path: '/course/conclusion' },
  ];

  return (
    <Layout title="Home">
      <section className="py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-title mb-4">Prompting for Educators</h1>
          <p className="text-content mb-8">
            A comprehensive course designed to introduce educators to the nuances of prompt engineering.
            Learn how to leverage AI tools to reduce workload, improve learner engagement, and enhance your teaching practice.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="card">
              <h2 className="text-subtitle mb-3">Course Overview</h2>
              <p className="mb-4">
                This course is designed for teachers with no prior background in prompting who are eager to
                integrate AI tools into their teaching practices. The content is accessible, relevant to educational contexts,
                engaging, and practical.
              </p>
              <Link href="/course/pre-assessment" className="btn-primary inline-block">
                Start Learning
              </Link>
            </div>
            
            <div className="card">
              <h2 className="text-subtitle mb-3">TEACH Framework</h2>
              <p className="mb-4">
                Learn the TEACH prompting framework:
              </p>
              <ul className="list-disc list-inside mb-4">
                <li><strong>T</strong>: Tone and persona</li>
                <li><strong>E</strong>: Explicit task</li>
                <li><strong>A</strong>: Arrangement of output</li>
                <li><strong>C</strong>: Context and constraints</li>
                <li><strong>H</strong>: Higher level refinements</li>
              </ul>
            </div>
          </div>
          
          <h2 className="text-subtitle mb-4">Course Structure</h2>
          <div className="card">
            <ol className="space-y-4">
              {courseUnits.map((unit) => (
                <li key={unit.id} className="flex items-center">
                  <span className="bg-navy text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                    {unit.id}
                  </span>
                  <Link href={unit.path} className="hover:text-teal transition">
                    {unit.title}
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
      
      <SourceReference fileName="TEST GEM PT V2.md" path="Test Course/TEST Prompting for Educators" />
    </Layout>
  );
} 