export default function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Pollab Das',
    jobTitle: 'Software Engineer',
    url: 'https://pollab.dev',
    sameAs: [
      'https://linkedin.com/in/pollabd',
      'https://github.com/pollabd',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dhaka',
      addressCountry: 'BD',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Techno India University',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Data Affinity Ltd.',
    },
    knowsAbout: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
      'AWS',
      'Software Engineering',
      'Web Development',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
