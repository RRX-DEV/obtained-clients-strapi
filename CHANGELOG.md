# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.2] - 2024-05-12

### Added
- Internationalization (i18n) support for all content types
- Dynamic zones for flexible page layouts across all page types
- Partner component for displaying partner logos on Home and About pages
- New Team Cards component with social media integration
- Statistics component with number and percentage display options
- Contact form component with infographic support

### Changed
- Improved bootstrap data seeding process
- Enhanced file upload handling with better error management
- Restructured component organization for better reusability
- Updated Tech Stack component to support multiple technology logos

### Fixed
- Media handling in dynamic zones
- File size calculation in upload process
- Component relationship validation
- Default SEO configuration

## [0.1.1] - 2025-05-08

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