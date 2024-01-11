---
to: src/components/<%= atomicType %>/<%= name %>/<%= name %>.tsx
unless_exists: true
---
import { <%= Name %>Props } from './<%= name %>.types';

export default function <%= Name %>({ todo }: <%= Name %>Props) {
  return <div><%= Name %> - todo from props: {todo}</div>;
}
