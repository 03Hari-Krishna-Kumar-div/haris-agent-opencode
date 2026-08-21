export const meta = {
  name: "rental-website-redesign",
  description: "Analyze and redesign the IT Equipment Rental website for premium enterprise B2B standards",
  phases: [
    { title: 'Analysis', detail: 'Analyze current website structure, design, and SRS requirements' },
    { title: 'Design', detail: 'Create premium enterprise UI/UX design specifications' },
    { title: 'Implementation', detail: 'Implement redesigned HTML, CSS, and JavaScript' },
    { title: 'Review', detail: 'Review and validate all improvements against requirements' }
  ]
};

// Phase 1: Analysis
phase('Analysis');
const analysis = await agent('Analyze the current website structure, SRS requirements, and identify areas for improvement', {
  schema: {
    type: 'object',
    properties: {
      currentState: {
        type: 'object',
        properties: {
          htmlStructure: { type: 'string' },
          cssIssues: { type: 'array', items: { type: 'string' } },
          jsFunctionality: { type: 'string' },
          responsiveness: { type: 'string' },
          accessibility: { type: 'string' },
          performance: { type: 'string' }
        }
      },
      srsRequirements: {
        type: 'array',
        items: { type: 'string' }
      },
      improvementAreas: {
        type: 'array',
        items: { type: 'string' }
      }
    }
  }
});

// Phase 2: Design
phase('Design');
const design = await agent('Create premium enterprise UI/UX design specifications based on analysis and SRS requirements', {
  schema: {
    type: 'object',
    properties: {
      designSystem: {
        type: 'object',
        properties: {
          colorPalette: { type: 'string' },
          typography: { type: 'string' },
          spacing: { type: 'string' },
          borderRadius: { type: 'string' },
          shadows: { type: 'string' },
          transitions: { type: 'string' }
        }
      },
      componentSpecifications: {
        type: 'array',
        items: { type: 'string' }
      },
      responsiveBreakpoints: { type: 'string' },
      accessibilityFeatures: { type: 'string' },
      animationSpecs: { type: 'string' }
    }
  }
});

// Phase 3: Implementation
phase('Implementation');
const implementation = await agent('Implement the redesigned website with premium enterprise features', {
  schema: {
    type: 'object',
    properties: {
      htmlChanges: { type: 'string' },
      cssChanges: { type: 'string' },
      jsChanges: { type: 'string' },
      newComponents: { type: 'array', items: { type: 'string' } },
      performanceOptimizations: { type: 'string' }
    }
  }
});

// Phase 4: Review
phase('Review');
const review = await agent('Review and validate all improvements against SRS requirements and enterprise standards', {
  schema: {
    type: 'object',
    properties: {
      validationResults: { type: 'string' },
      complianceCheck: { type: 'string' },
      recommendations: { type: 'array', items: { type: 'string' } }
    }
  }
});

// Final synthesis
const result = await agent('Synthesize all phases into a comprehensive redesign report and provide the updated files', {
  schema: {
    type: 'object',
    properties: {
      summary: { type: 'string' },
      changesMade: { type: 'array', items: { type: 'string' } },
      filesModified: { type: 'array', items: { type: 'string' } },
      verification: { type: 'string' }
    }
  }
});

return result;