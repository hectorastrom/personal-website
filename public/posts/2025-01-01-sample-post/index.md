---
title: Building a markdown-first blog
date_created: 2025-01-01
date_updated: 2025-01-02
tags: [deep learning, projects, retrospective]
---

# Building a markdown-first blog

Welcome to the new blog. This post exists to showcase how markdown renders across headings, lists, code, links, blockquotes, and images.

## Why markdown for posts?

Markdown keeps content portable and reviewable. It also lets us colocate media alongside text so migrations are simple.

### Highlights

- Lightweight authoring workflow
- Media lives with each post for easy portability
- Frontmatter keeps metadata tidy

1. Author in markdown.
2. Commit to the repo.
3. Let the site render it as React.

## Links

Inline links look like [example.com](https://example.com) or to internal pages such as [projects](/projects).

## Blockquote

> Great blogs keep content readable while staying close to the code.

## Code

Inline code like `npm run dev` plus a fenced example:

```js
function greet(name) {
  return `Hi, ${name}!`;
}
```

## Math

Inline math for KL divergence: $D_{KL}(p\parallel q) = \int p(x) \log \frac{p(x)}{q(x)} \\, dx$.

Display math:

$$
D_{KL}(p\parallel q) = \int_{-\infty}^{\infty} p(x) \log \frac{p(x)}{q(x)} \, dx
$$

## Image

![Me placeholder](/images/me.png)

That is the tour. Future posts can remove or trim sections as needed.

