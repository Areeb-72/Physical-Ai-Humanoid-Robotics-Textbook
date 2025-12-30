---
id: 003
title: Generate Project Tasks
stage: tasks
date: 2025-12-28
surface: agent
model: gemini-cli
feature: 001-book-specification
branch: 001-book-specification
user: User
command: /sp.tasks
labels: [tasks, planning, execution]
links:
  spec: "specs/001-book-specification/spec.md"
  ticket: null
  adr: null
  pr: null
files:
  - "specs/001-book-specification/tasks.md"
tests:
  - "none"
---

## Prompt

/sp.tasks You are an expert technical project manager and AI documentation workflow designer. You are working strictly within the Spec-Kit Plus methodology. The following artifacts already exist: • Constitution • Specification • Plan Your task is to generate the **TASKS** required to execute the project defined in the Plan. ━━━━━━━━━━━━━━━━━━━━━━ 📘 PROJECT CONTEXT ━━━━━━━━━━━━━━━━━━━━━━ Project: AI-Native Textbook — "Physical AI & Humanoid Robotics: From Digital Intelligence to Embodied Systems" Hackathon: Panaversity Hackathon I Primary Goal: Deliver a complete, well-structured, AI-native textbook using Docusaurus, aligned with the Physical AI & Humanoid Robotics course, ready for RAG integration and future personalization. ━━━━━━━━━━━━━━━━━━━━━━ 🎯 TASK OBJECTIVE ━━━━━━━━━━━━━━━━━━━━━━ Convert the high-level **Plan** into a **granular task list** that: • Is executable by a single person or small team • Can be completed incrementally • Produces clear artifacts • Supports hackathon scoring criteria Each task should represent **one clear unit of work**. ━━━━━━━━━━━━━━━━━━━━━━ 📋 TASK STRUCTURE REQUIREMENTS ━━━━━━━━━━━━━━━━━━━━━━ Organize tasks into the following categories: 1. **Repository & Tooling Tasks** 2. **Governance Tasks (Constitution, Specification, Plan)** 3. **Content Authoring Tasks** 4. **Diagram & Asset Tasks** 5. **Docusaurus Structure Tasks** 6. **AI-Native Readiness Tasks** 7. **Bonus Feature Preparation Tasks** 8. **Quality Assurance Tasks** 9. **Deployment & Submission Tasks** ━━━━━━━━━━━━━━━━━━━━━━ 📝 TASK FORMAT RULES ━━━━━━━━━━━━━━━━━━━━━━ For EACH task, include: • Task ID (e.g., T-01, T-02) • Task Name • Goal • Input (if any) • Output Artifact • Dependency (if any) Constraints: • Use Markdown • Do NOT include code • Do NOT include CLI commands • Do NOT repeat the Plan verbatim • Tasks must be small and actionable ━━━━━━━━━━━━━━━━━━━━━━ 📦 OUTPUT REQUIREMENT ━━━━━━━━━━━━━━━━━━━━━━ Produce a **Task Breakdown Document** suitable to be saved as: docs/03-tasks.md This document must clearly show execution clarity, sequencing, and ownership readiness.

## Response snapshot

Task generation complete. The following artifact has been created:
- Tasks: `specs/001-book-specification/tasks.md`

The `tasks.md` file contains a detailed, phase-by-phase breakdown of all tasks required to complete the project, organized by user story.

Total tasks: 31
MVP (User Story 1) tasks: 7 implementation tasks.
Parallel opportunities identified across all phases.

The project is now ready for implementation. You can begin executing the tasks listed in `tasks.md`, starting with Phase 1.

## Outcome

- ✅ Impact: Created a comprehensive and actionable task list from the project plan and specification.
- 🧪 Tests: No tests were run.
- 📁 Files: 1 file created.
- 🔁 Next prompts: /sp.implement
- 🧠 Reflection: The process of breaking down the plan into user-story-centric tasks was effective. The strict formatting ensures that each task is clear and ready for execution.

## Evaluation notes (flywheel)

- Failure modes observed: None.
- Graders run and results (PASS/FAIL): n/a
- Prompt variant (if applicable): n/a
- Next experiment (smallest change to try): n/a
