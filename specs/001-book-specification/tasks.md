# Tasks: AI-Native Textbook

**Input**: Design documents from `/specs/001-book-specification/`
**Prerequisites**: plan.md, spec.md

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel
- **[Story]**: Which user story this task belongs to (US1, US2, US3)

## Phase 1: Setup (Project Initialization)

**Purpose**: Initialize the Docusaurus project and repository.

- [ ] T001 Initialize Git repository and push to a public remote.
- [ ] T002 Initialize a new Docusaurus classic project in the repository root.
- [ ] T003 [P] Create the initial directory structure inside `docs/` as defined in `specs/001-book-specification/spec.md`.
- [ ] T004 [P] Configure basic project details in `docusaurus.config.js` (title, tagline, URL).

---

## Phase 2: Governance (Foundational Prerequisites)

**Purpose**: Confirm that all guiding documents are in place.

- [x] T005 Create and ratify the Constitution in `.specify/memory/constitution.md`.
- [x] T006 Create and validate the Specification in `specs/001-book-specification/spec.md`.
- [x] T007 Create and validate the Implementation Plan in `specs/001-book-specification/plan.md`.

**Checkpoint**: Foundation ready. Content authoring can begin.

---

## Phase 3: User Story 1 - Foundational Learning (Priority: P1) 🎯 MVP

**Goal**: A student new to robotics can learn the core concepts of Physical AI and ROS 2.
**Independent Test**: The user can read the first two chapters and successfully run a "hello world" ROS 2 node.

### Implementation for User Story 1

- [ ] T008 [P] [US1] Write content for `docs/00-Introduction/01-welcome.md`.
- [ ] T009 [P] [US1] Write content for `docs/00-Introduction/02-how-to-use-this-book.md`.
- [ ] T010 [P] [US1] Write content for `docs/01-Foundations/01-what-is-physical-ai.md`.
- [ ] T011 [P] [US1] Write content for the remaining sections of the `docs/01-Foundations/` chapter.
- [ ] T012 [P] [US1] Write content for the initial sections of the `docs/02-ROS2/` chapter, covering core concepts.
- [ ] T013 [US1] Write the hands-on exercise for creating a ROS 2 "hello world" node in the `docs/02-ROS2/` chapter.
- [ ] T014 [P] [US1] Create diagrams for foundational concepts and add to `docs/assets/images/`.

**Checkpoint**: User Story 1 (Foundational Learning) is complete and can be reviewed independently.

---

## Phase 4: User Story 2 - Simulation-Based Practice (Priority: P2)

**Goal**: A robotics beginner can apply their knowledge in a simulated environment.
**Independent Test**: The user can launch a Gazebo simulation with a robot and control it using ROS 2 commands.

### Implementation for User Story 2

- [ ] T015 [P] [US2] Write content for the `docs/03-Simulation/` chapter, explaining Gazebo and robot models.
- [ ] T016 [US2] Write the hands-on exercise for launching and controlling a robot in Gazebo in the `docs/03-Simulation/` chapter.
- [ ] T017 [P] [US2] Write content for the `docs/04-NVIDIA-Isaac/` chapter, introducing Isaac Sim.
- [ ] T018 [US2] Write the hands-on exercise for setting up a basic scene in Isaac Sim in the `docs/04-NVIDIA-Isaac/` chapter.
- [ ] T019 [P] [US2] Create diagrams for simulation concepts and add to `docs/assets/images/`.

**Checkpoint**: User Story 2 (Simulation Practice) is complete.

---

## Phase 5: User Story 3 - Advanced AI Integration (Priority: P3)

**Goal**: An AI student can connect LLMs to robotic actions.
**Independent Test**: The user can run a VLA project where a natural language command is executed by a robot in Isaac Sim.

### Implementation for User Story 3

- [ ] T020 [P] [US3] Write content for the `docs/05-Vision-Language-Action/` chapter, explaining VLA models.
- [ ] T021 [US3] Write the hands-on exercise for integrating an LLM with a simulated robot in the `docs/05-Vision-Language-Action/` chapter.
- [ ] T022 [P] [US3] Write the design and goals for the final capstone project in `docs/06-Capstone-Project/`.
- [ ] T023 [US3] Write the step-by-step guide for the capstone project in `docs/06-Capstone-Project/`.
- [ ] T024 [P] [US3] Create diagrams for VLA and system architecture and add to `docs/assets/images/`.

**Checkpoint**: User Story 3 (Advanced AI Integration) is complete.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Finalize the site structure, perform QA, and prepare for submission.

- [ ] T025 Configure the sidebar navigation in `sidebars.js` to match the chapter order.
- [ ] T026 [P] Review all written content for consistency, clarity, and grammatical errors.
- [ ] T027 [P] Add AI-Native readiness metadata (e.g., `tags`, `difficulty`) to the frontmatter of all pages.
- [ ] T028 Configure and trigger the Docusaurus production build using `npm run build`.
- [ ] T029 Configure a GitHub Action to automatically deploy the `build` directory to GitHub Pages or Vercel.
- [ ] T030 Create a script and record a 90-second demo video of the final website.
- [ ] T031 Prepare and submit the final project for the hackathon.

---

## Dependencies & Execution Order

- **Setup (Phase 1)** must be completed before any other phase.
- **Governance (Phase 2)** is already complete and blocks all content creation.
- **User Story Phases (3, 4, 5)** can begin after Phase 2. They are best completed sequentially (US1 → US2 → US3) as the content is progressive, but different authors could work on them in parallel.
- **Polish (Phase 6)** depends on all User Story phases being complete.

## Implementation Strategy

The project will follow an incremental delivery model based on the user stories.

1.  **MVP (User Story 1)**: Complete Phases 1, 2, and 3. This will result in a testable, valuable product for beginners.
2.  **Increment 2 (User Story 2)**: Complete Phase 4. This adds the crucial simulation component.
3.  **Increment 3 (User Story 3)**: Complete Phase 5. This delivers the advanced AI integration content.
4.  **Finalization**: Complete Phase 6 to publish the final product.
