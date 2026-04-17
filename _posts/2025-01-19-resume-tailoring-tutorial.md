---
layout: post
title: "Complete Tutorial: Tailoring a LaTeX Resume for Job Applications Using AI and Overleaf"
date: 2025-01-19 15:00:00 -0500
categories: [tutorials, career]
tags: [resume, latex, overleaf, git, ai, job-search]
author: Avishek Bose
image: /assets/images/image_blogs.jpg
excerpt: "This tutorial walks through a complete workflow for maintaining a master LaTeX resume, tailoring it to specific job descriptions using an AI assistant (Claude), and keeping everything synchronized across your local machine, GitHub, and Overleaf."
---

# Complete Tutorial: Tailoring a LaTeX Resume for Job Applications Using AI and Overleaf

## Overview

This tutorial walks through a complete workflow for maintaining a master LaTeX resume, tailoring it to specific job descriptions using an AI assistant (Claude), and keeping everything synchronized across your local machine, GitHub, and Overleaf. Claude generates and pushes updated `.tex` content directly to the remote Git repository — Overleaf then syncs the changes and handles compilation and PDF export.

---

## Prerequisites

- A LaTeX resume written in a `.tex` file (e.g., `main.tex`)
- An [Overleaf](https://www.overleaf.com) account (paid plan required for Git sync)
- A [GitHub](https://github.com) account
- [Claude](https://claude.ai) desktop app with Cowork mode
- `git` installed on your local machine
- A local folder containing your `main.tex` file that is already a Git repository

---

## Part 1: Connect Overleaf Git Repository to GitHub

### Step 1: Check Current Git Remotes

```bash
git remote -v
```

### Step 2: Add GitHub Remote Repository

```bash
git remote add github https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
```

### Step 3: Stage and Commit Changes

```bash
git add .
git commit -m "Your commit message"
```

### Step 4: Push to GitHub

```bash
git push github master:main
```

### Step 5: Set Up Tracking (Optional)

```bash
git branch --set-upstream-to=github/main master
```

### Step 6: Alternative — Use SSH (Recommended)

```bash
git remote set-url github git@github.com:YOUR_USERNAME/YOUR_REPOSITORY.git
```

### Step 7: Import Overleaf Project from Git Repository

- Go to [Overleaf](https://www.overleaf.com)
- Click **New Project → Import from GitHub**
- Select your repository

### Step 8: Sync Overleaf with GitHub

- In your Overleaf project, go to **Menu → Sync**
- Click **Pull latest version from GitHub** to fetch the latest changes

### Step 9: Future Sync Commands

**From local machine to GitHub:**
```bash
git add .
git commit -m "Your commit message"
git push github master:main
```

**From Overleaf to GitHub:**
- In Overleaf: **Menu → Sync → Push to GitHub**

**From GitHub to Overleaf:**
- In Overleaf: **Menu → Sync → Pull latest version from GitHub**

> **Notes:**
> - `master` is your local branch; `main` is GitHub's default branch
> - Use `master:main` to push your local master to GitHub's main
> - Always commit changes before pushing
> - The Overleaf Sync feature keeps your project synchronized with GitHub

---

## Part 2: Set Up Claude (Cowork) to Access Your Resume

### Step 10: Grant Claude Access to Your Resume Folder

- Open the Claude desktop app and switch to **Cowork mode**
- Ask Claude to access your resume folder, e.g.:
  > *"Please access my resume folder at `/path/to/your/resume/folder`"*
- Approve the folder access request when prompted

Claude now has read and write access to your `main.tex` file.

### Step 11: Save a Backup of Your Master Resume

Ask Claude:
> *"Save a backup of main.tex as main_original.tex"*

Claude will run:
```bash
cp main.tex main_original.tex
```

This preserves your master resume. For every new job application, Claude will reset from `main_original.tex` before making changes — so tailored versions never accumulate on top of each other.

---

## Part 3: Tailor the Resume for a Job Description

### Step 12: Paste the Job Description

Paste the full job description into the chat and ask Claude to tailor the resume. For example:
> *"Here is a job description. Please tailor my resume for this role. Keep it on a single page and use factual numbers where they add value."*

Claude will:
1. Analyze the job description for key skills, tools, and priorities
2. Reset `main.tex` from `main_original.tex`
3. Rewrite the summary to match the role's framing
4. Adjust bullet points across all experience entries to surface relevant skills
5. Update the technical skills section to match required tools
6. Trim content if needed to stay on one page

### Step 13: Push the Updated `.tex` to the Remote Repository

Once Claude has modified `main.tex`, it commits and pushes directly to your remotes:

```bash
git add main.tex
git commit -m "Tailor resume for [Role] at [Company]"
git push github master:main
git push origin master
```

No local PDF compilation is needed — Overleaf handles that.

---

## Part 4: Review, Edit, and Finalize

### Step 14: Sync and Review in Overleaf

- In your Overleaf project, go to **Menu → Sync → Pull latest version from GitHub**
- Overleaf will compile the updated `main.tex` automatically
- Review the PDF preview to check that content is accurate and fits on one page

### Step 15: Make Manual Edits (if needed)

**Option A — Edit in Overleaf (recommended for visual editing):**
- Edit directly in the Overleaf editor with live preview
- When done, push back to GitHub from Overleaf: **Menu → Sync → Push to GitHub**

**Option B — Ask Claude to make specific changes:**
- Tell Claude exactly what to fix, e.g.:
  > *"Change the summary to mention X" or "Remove the third bullet in the second role"*
- Claude edits `main.tex` and pushes again — then sync in Overleaf

### Step 16: Download the Final PDF

- In Overleaf: **Menu → Download PDF**

---

## Summary of the Workflow

```
main_original.tex  (master — never modified)
       │
       ▼
Claude resets main.tex from original
       │
       ▼
Paste job description → Claude tailors main.tex
       │
       ▼
Claude pushes updated main.tex to GitHub + Overleaf remote
       │
       ▼
Overleaf syncs → compiles → PDF preview
       │
       ├── Looks good → Download PDF from Overleaf
       │
       └── Needs edits → Edit in Overleaf or ask Claude → push again → sync
```

---

## Key Principles

- **Always reset from the master.** Never build tailored versions on top of each other. Each job application starts from `main_original.tex`.
- **Stay on one page.** If content overflows, trim the least relevant experience or reduce bullet points rather than shrinking font size.
- **Use factual numbers.** Quantify impact where possible (e.g., "100K+ daily requests", "22 peer-reviewed papers"). Never fabricate metrics.
- **Match JD language.** Mirror the exact tools and terminology used in the job description — this helps with ATS (Applicant Tracking Systems) keyword matching.
- **Keep the master resume comprehensive.** Your `main_original.tex` should contain all experience and skills. Tailoring means selecting and emphasizing, not inventing.
