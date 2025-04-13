import React from 'react';
import Link from 'next/link';

interface LessonProgressProps {
  currentLesson: number;
  totalLessons: number;
  unitPath: string;
  nextUnit?: string;
  nextUnitTitle?: string;
  lessonTitle: string;
}

export default function LessonProgress({
  currentLesson,
  totalLessons,
  unitPath,
  nextUnit,
  nextUnitTitle,
  lessonTitle
}: LessonProgressProps) {
  const isLastLesson = currentLesson === totalLessons;
  const nextLessonPath = isLastLesson && nextUnit 
    ? `/course/${nextUnit}` 
    : `${unitPath}/lesson-${currentLesson + 1}`;
  const nextText = isLastLesson && nextUnitTitle 
    ? `Next Unit: ${nextUnitTitle}` 
    : 'Next Lesson';

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-subtitle">Lesson {currentLesson} of {totalLessons}</h2>
        <div className="text-sm text-gray-600">
          {Math.round((currentLesson / totalLessons) * 100)}% Complete
        </div>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div 
          className="bg-teal h-2 rounded-full" 
          style={{ width: `${(currentLesson / totalLessons) * 100}%` }}
        />
      </div>
      
      <div className="flex justify-between">
        <Link 
          href={currentLesson === 1 ? unitPath : `${unitPath}/lesson-${currentLesson - 1}`}
          className="btn-primary bg-slate"
        >
          {currentLesson === 1 ? 'Back to Unit Overview' : 'Previous Lesson'}
        </Link>
        
        <Link 
          href={nextLessonPath}
          className="btn-primary"
        >
          {nextText}
        </Link>
      </div>
    </div>
  );
} 