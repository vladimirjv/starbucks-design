---
to: src/components/<%= atomicType %>/<%= name %>/<%= name %>.types.ts
unless_exists: true
---
export type <%= Name %>Props = { todo: string };
