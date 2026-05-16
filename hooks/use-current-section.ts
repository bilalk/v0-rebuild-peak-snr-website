'use client';

import { useEffect, useState } from 'react';

type Section = 'home' | 'services' | 'vision' | 'story' | 'contact';

export function useCurrentSection(): Section {
  const [currentSection, setCurrentSection] = useState<Section>('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections: Section[] = ['home', 'services', 'vision', 'story', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in viewport (top 30% of screen)
          if (rect.top <= window.innerHeight * 0.3 && rect.bottom >= 0) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    // Check on mount
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return currentSection;
}
