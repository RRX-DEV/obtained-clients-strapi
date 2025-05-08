# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.1] - 2023-07-19

### Added
- Initial implementation of the Strapi CMS
- Core content types: Home, About, Service, Global
- Component structure with reusable components for page building:
  - Timeline
  - Tech Stack
  - Team Cards
  - Tab Topics
  - Statistics
  - Reviews
  - Plans
  - List Topics
  - Group Topics
  - FAQ
  - Contact
  - Card Topics
- Single components for reuse:
  - Client Review
  - FAQ
  - Member Social
  - Partner
  - Plan Feature
  - Single Plan
  - Statistic
  - Team Member
  - Timeline Item
  - Topic
- Dynamic zones implementation for flexible page layouts
- Shared SEO component for consistent metadata management
- Data seeding functionality in bootstrap.js and seed.js
- Public permissions configuration for content types
- File upload handling with validation

### Changed
- Updated package.json to Strapi 5.11.0
- Configured SQLite as the default database

### Fixed
- File handling in bootstrap.js for proper media management