/**
 * SEO Helper Utility for managing page metadata
 * Helps with dynamic meta tags, structured data, and canonical URLs
 */

export interface SEOMetadata {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  keywords?: string;
  structuredData?: Record<string, any>;
}

/**
 * Update document head with SEO metadata
 */
export function updatePageMeta(metadata: SEOMetadata) {
  // Update title
  document.title = metadata.title;
  
  // Update or create meta description
  let descriptionMeta = document.querySelector('meta[name="description"]');
  if (!descriptionMeta) {
    descriptionMeta = document.createElement('meta');
    descriptionMeta.setAttribute('name', 'description');
    document.head.appendChild(descriptionMeta);
  }
  descriptionMeta.setAttribute('content', metadata.description);
  
  // Update keywords if provided
  if (metadata.keywords) {
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', metadata.keywords);
  }
  
  // Update canonical URL
  const canonical = metadata.canonical || window.location.href;
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', canonical);
  
  // Update OG image
  if (metadata.ogImage) {
    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      ogImage = document.createElement('meta');
      ogImage.setAttribute('property', 'og:image');
      document.head.appendChild(ogImage);
    }
    ogImage.setAttribute('content', metadata.ogImage);
  }
  
  // Update structured data (JSON-LD)
  if (metadata.structuredData) {
    let ldJsonScript = document.querySelector('script[type="application/ld+json"]');
    if (!ldJsonScript) {
      ldJsonScript = document.createElement('script');
      ldJsonScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(ldJsonScript);
    }
    ldJsonScript.textContent = JSON.stringify(metadata.structuredData);
  }
  
  // Update OG title and description
  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (!ogTitle) {
    ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    document.head.appendChild(ogTitle);
  }
  ogTitle.setAttribute('content', metadata.title);
  
  let ogDesc = document.querySelector('meta[property="og:description"]');
  if (!ogDesc) {
    ogDesc = document.createElement('meta');
    ogDesc.setAttribute('property', 'og:description');
    document.head.appendChild(ogDesc);
  }
  ogDesc.setAttribute('content', metadata.description);
}

/**
 * Generate structured data for a course/subject
 */
export function generateCourseSchema(data: {
  name: string;
  description: string;
  level: string;
  code: string;
  provider?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": data.name,
    "description": data.description,
    "educationLevel": data.level,
    "url": `https://www.xpmtutors.com/subjects/${data.code.toLowerCase()}`,
    "provider": {
      "@type": "Organization",
      "name": data.provider || "XPM Tutors",
      "url": "https://www.xpmtutors.com",
      "logo": "https://www.xpmtutors.com/logo.png"
    }
  };
}

/**
 * Generate structured data for a person/teacher
 */
export function generatePersonSchema(data: {
  name: string;
  profession: string;
  url?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": data.name,
    "jobTitle": data.profession,
    "url": data.url || "https://www.xpmtutors.com",
    "image": data.image,
    "sameAs": [
      "https://www.xpmtutors.com"
    ]
  };
}

/**
 * Generate FAQ structured data
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

/**
 * Page-specific SEO configurations
 */
export const pageConfigs: Record<string, SEOMetadata> = {
  home: {
    title: "Online O & A Level Expert Subject Tutoring for All Subjects | XPM Tutors",
    description: "XPM Tutors offers elite online O Level, A Level, IGCSE, SAT, and NET preparation. Expert tutors for Physics, Maths, and Chemistry across 20+ countries. Book a trial session today!",
    keywords: "tutors, O Level, A Level, IGCSE, SAT, Physics tutor, Maths tutor, Chemistry tutor",
    canonical: "https://www.xpmtutors.com/"
  },
  subjects: {
    title: "O & A Level Subjects - Expert Online Tutoring | XPM Tutors",
    description: "Browse all subjects for O Levels and A Levels including Mathematics, Physics, Chemistry, Biology, and Computer Science with expert online tutors.",
    keywords: "O Level subjects, A Level subjects, online tutoring, Physics, Chemistry, Mathematics",
    canonical: "https://www.xpmtutors.com/subjects"
  },
  pastPapers: {
    title: "Past Papers & Practice Questions | O & A Level Exams | XPM Tutors",
    description: "Access comprehensive past papers and practice questions for O Level and A Level exams to prepare effectively with solutions.",
    keywords: "past papers, practice questions, exam preparation, O Level past papers, A Level past papers",
    canonical: "https://www.xpmtutors.com/past-papers"
  },
  questions: {
    title: "Discussion Forum & Questions | XPM Tutors",
    description: "Ask questions and discuss exam topics with our expert tutors and community. Get quick answers to your doubts.",
    keywords: "questions, forum, exam discussion, ask tutor",
    canonical: "https://www.xpmtutors.com/questions"
  },
  teachers: {
    title: "Find Expert Online Tutors | Teacher Directory | XPM Tutors",
    description: "Find qualified and experienced online tutors for O Level, A Level, IGCSE, and other exams. Browse our comprehensive teacher directory.",
    keywords: "tutors, online tutors, teacher directory, hire tutor, Physics tutor, Maths tutor",
    canonical: "https://www.xpmtutors.com/teacher-directory"
  },
  reviews: {
    title: "Student Reviews & Testimonials | XPM Tutors",
    description: "Read real reviews from students who have improved their grades with XPM Tutors. See success stories and testimonials.",
    keywords: "reviews, testimonials, student feedback, ratings",
    canonical: "https://www.xpmtutors.com/reviews"
  },
  syllabus: {
    title: "Syllabus & Curriculum | O & A Level | XPM Tutors",
    description: "Complete syllabus and curriculum coverage for O Levels and A Levels. Organized by topics and exam boards.",
    keywords: "syllabus, curriculum, O Level syllabus, A Level syllabus, exam board",
    canonical: "https://www.xpmtutors.com/syllabus"
  },
  studyGroups: {
    title: "Study Groups & Collaborative Learning | XPM Tutors",
    description: "Join study groups and learn collaboratively with peers. Group discussions, shared notes, and peer support.",
    keywords: "study groups, collaborative learning, peer study, group projects",
    canonical: "https://www.xpmtutors.com/study-groups"
  },
  examLanding: {
    title: "Exam Preparation Guides | O & A Level, IGCSE, SAT | XPM Tutors",
    description: "Complete exam preparation guides for O Levels, A Levels, IGCSE, SAT, and other international exams.",
    keywords: "exam preparation, exam guides, how to prepare for exams, exam tips",
    canonical: "https://www.xpmtutors.com/exam-landing"
  },
  blog: {
    title: "Educational Blog & Resources | XPM Tutors",
    description: "Read our blog for exam tips, study techniques, subject insights, and educational resources.",
    keywords: "blog, education blog, exam tips, study techniques, educational resources",
    canonical: "https://www.xpmtutors.com/blog"
  }
};
