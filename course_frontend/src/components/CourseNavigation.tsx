import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Define the structure for lessons within units
interface Lesson {
  id: number;
  title: string;
  path: string;
}

interface CourseUnit {
  id: number;
  title: string;
  path: string;
  lessons?: Lesson[];
}

const courseUnits: CourseUnit[] = [
  { 
    id: 1, 
    title: 'Pre-Assessment', 
    path: '/course/pre-assessment'
  },
  { 
    id: 2, 
    title: 'Course Introduction', 
    path: '/course/introduction'
  },
  { 
    id: 3, 
    title: 'The TEACH Framework', 
    path: '/course/teach-framework',
    lessons: [
      { id: 1, title: 'Tone and Persona', path: '/course/teach-framework/tone-persona' },
      { id: 2, title: 'Explicit Task', path: '/course/teach-framework/explicit-task' },
      { id: 3, title: 'Arrangement', path: '/course/teach-framework/arrangement' },
      { id: 4, title: 'Context', path: '/course/teach-framework/context' },
      { id: 5, title: 'Higher Level', path: '/course/teach-framework/higher-level' }
    ]
  },
  { 
    id: 4, 
    title: 'Common Prompting Techniques', 
    path: '/course/prompting-techniques',
    lessons: [
      { id: 1, title: 'Zero-Shot Prompting', path: '/course/prompting-techniques/zero-shot' },
      { id: 2, title: 'Few-Shot Prompting', path: '/course/prompting-techniques/few-shot' },
      { id: 3, title: 'Chain-of-Thought', path: '/course/prompting-techniques/chain-of-thought' },
      { id: 4, title: 'Self-Consistency', path: '/course/prompting-techniques/self-consistency' },
      { id: 5, title: 'Iterative Refinement', path: '/course/prompting-techniques/iterative-refinement' }
    ]
  },
  { 
    id: 5, 
    title: 'Common Applications', 
    path: '/course/applications',
    lessons: [
      { id: 1, title: 'Instructional Design', path: '/course/applications/instructional-design' },
      { id: 2, title: 'Instructional Delivery', path: '/course/applications/instructional-delivery' },
      { id: 3, title: 'Assessment', path: '/course/applications/assessment' },
      { id: 4, title: 'Communication', path: '/course/applications/communication' },
      { id: 5, title: 'Professional Development', path: '/course/applications/professional-development' }
    ]
  },
  { 
    id: 6, 
    title: 'Conclusion', 
    path: '/course/conclusion'
  }
];

const CourseNavigation: React.FC = () => {
  const router = useRouter();
  const currentPath = router.pathname;
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedUnit, setExpandedUnit] = useState<number | null>(null);
  const [mouseLeaveTimeout, setMouseLeaveTimeout] = useState<NodeJS.Timeout | null>(null);

  // Find current unit and lesson
  const currentUnit = courseUnits.find(unit => 
    currentPath.startsWith(unit.path) || 
    unit.lessons?.some(lesson => lesson.path === currentPath)
  );

  const currentLesson = currentUnit?.lessons?.find(lesson => 
    lesson.path === currentPath
  );

  // Handle mouse enter/leave with delay
  const handleMouseEnter = () => {
    if (mouseLeaveTimeout) {
      clearTimeout(mouseLeaveTimeout);
      setMouseLeaveTimeout(null);
    }
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsExpanded(false);
      setExpandedUnit(null);
    }, 300);
    setMouseLeaveTimeout(timeout);
  };

  // Handle unit hover
  const handleUnitHover = (unitId: number) => {
    if (isExpanded) {
      setExpandedUnit(unitId);
    }
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (mouseLeaveTimeout) {
        clearTimeout(mouseLeaveTimeout);
      }
    };
  }, [mouseLeaveTimeout]);

  return (
    <div 
      className={`fixed left-0 top-20 transition-all duration-300 z-50 ${
        isExpanded ? 'w-64' : 'w-14'
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="bg-white shadow-lg rounded-r-lg overflow-hidden">
        {/* Navigation indicator */}
        <div className={`p-2 border-b border-gray-200 flex items-center justify-center ${
          isExpanded ? 'text-sm text-gray-600' : 'text-xs'
        }`}>
          {isExpanded ? (
            'Course Navigation'
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </div>

        <div className="p-2">
          {courseUnits.map((unit) => (
            <div key={unit.id} className="mb-1">
              <div 
                className={`flex items-center p-2 rounded-lg transition-colors ${
                  currentUnit?.id === unit.id 
                    ? 'bg-teal text-white' 
                    : 'hover:bg-gray-100'
                }`}
                onMouseEnter={() => handleUnitHover(unit.id)}
              >
                <Link 
                  href={unit.path}
                  className="flex items-center w-full"
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    !isExpanded ? 'border-2 border-gray-300' : ''
                  } ${
                    currentUnit?.id === unit.id 
                      ? isExpanded ? 'bg-white text-teal' : 'bg-teal text-white border-teal'
                      : 'bg-navy text-white'
                  }`}>
                    {unit.id}
                  </div>
                  <span className={`ml-2 truncate ${isExpanded ? 'block' : 'hidden'} ${
                    currentUnit?.id === unit.id ? 'text-white' : 'text-gray-700'
                  }`}>
                    {unit.title}
                  </span>
                </Link>
              </div>
              
              {/* Lessons dropdown */}
              {unit.lessons && expandedUnit === unit.id && isExpanded && (
                <div className="ml-8 mt-1">
                  {unit.lessons.map((lesson) => (
                    <Link
                      key={lesson.id}
                      href={lesson.path}
                      className={`block p-2 rounded-lg text-sm ${
                        currentPath === lesson.path
                          ? 'bg-teal bg-opacity-20 text-teal'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      {lesson.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseNavigation; 