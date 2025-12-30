# Data Model

**Date**: 2025-12-28
**Plan**: [plan.md](./plan.md)
**Source**: Derived from the "Key Entities" section of the [Specification](./spec.md).

This document defines the core data entities for the textbook content. As this is a static documentation site, the "data model" refers to the conceptual structure of the content, not a database schema.

## Entity Definitions

### 1. Book

- **Description**: The top-level entity representing the entire collection of content. It is the root of the hierarchy.
- **Attributes**:
  - `title`: The title of the book (e.g., "Physical AI & Humanoid Robotics").
  - `author`: The author(s) of the book.
  - `version`: The version of the book.
- **Relationships**:
  - Has many **Chapters**.

### 2. Chapter

- **Description**: A top-level learning module, corresponding to a directory in the `docs/` folder.
- **Attributes**:
  - `id`: A unique identifier (e.g., `01-Foundations`).
  - `title`: The full title of the chapter (e.g., "Foundations of Physical AI").
  - `sidebar_label`: The short name used in the navigation sidebar.
- **Relationships**:
  - Belongs to one **Book**.
  - Has many **Sections** (represented as Pages).

### 3. Page (Section)

- **Description**: An individual Markdown file representing a specific topic within a Chapter. This is the most granular piece of content.
- **Attributes**:
  - `id`: A unique identifier for the file.
  - `title`: The title of the page.
  - `sidebar_label`: The label for the navigation sidebar.
  - `tags`: An array of keywords for personalization and search (e.g., `['ros2', 'nodes', 'beginner']`).
- **Relationships**:
  - Belongs to one **Chapter**.
  - Has many **Assets**.

### 4. Asset

- **Description**: A non-text resource, such as an image, diagram, or video, that is embedded in a Page.
- **Attributes**:
  - `path`: The file path to the asset within the `/docs/assets/` directory.
  - `alt_text`: A description of the asset for accessibility.
- **Relationships**:
  - Belongs to one or more **Pages**.

## Relationships Diagram (Conceptual)

```
[Book]
  |
  +-- [Chapter] (1..*)
        |
        +-- [Page] (1..*)
              |
              +-- [Asset] (0..*)
```
