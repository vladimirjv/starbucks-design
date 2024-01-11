---
to: src/components/<%= atomicType %>/<%= name %>/<%= name %>.stories.tsx
unless_exists: true
---
import <%= Name %> from './<%= name %>';

export default {
  component: <%= Name %>,
  title: '<%= h.inflection.singularize(atomicType) %>/<%= name %>',
};

export const <%= name %> = () => {
  return <<%= Name %> todo="" />;
};
