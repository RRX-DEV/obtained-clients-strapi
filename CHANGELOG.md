# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.20] - 2025-07-15

### Changed
- Updated the `Subtitle` field on multiple pages to `Long Text` to be able to contain more characters.
- Bumped project version to 0.1.20 in

## [0.1.19] - 2025-06-29

### Added
- Initial release of version 0.1.19 with updated dependencies and maintenance improvements.

### Changed
- Updated `@strapi/plugin-graphql` to ^5.13.0 for improved GraphQL support.
- Updated other project dependencies to their latest compatible versions.
- Bumped project version to 0.1.19 in

## [0.1.18] - 2025-06-28

### Added
- Added `TextAlignment` field to the `Media Block` component, allowing selection between "Left" and "Right" alignment with a default of "Right".

### Changed
- Set a default value of "Left" for the `ImagePosition` field in the `Media Block` component.
- Updated TypeScript type definitions to reflect the new and updated fields in the `Media Block` component.
- Bumped project version to 0.1.18 in `package.json`.

## [0.1.17] - 2025-06-27

### Added
- Added the `Text Block` component to the `PageLayout` dynamic zone options for all content types (Home, About, Service, Blog).
- Updated TypeScript type definitions to include `Text Block` in all relevant schemas.

### Changed
- Bumped project version to 0.1.16 in

## [0.1.16] - 2025-06-27

### Added
- Upgraded `@strapi/plugin-graphql` to version 5.13.0 for improved GraphQL support and new features.
- Created the `Text Bock` component

### Changed
- Bumped project version to 0.1.16

## [0.1.15] - 2025-06-26

### Added
- Added a `description` field to the `Media Block` component schema for improved documentation and clarity.

### Changed
- Changed the `Description` attribute type in the `Media Block` component from `string` to `text` for better content support.
- Updated TypeScript type definitions to reflect the changes in the `Media Block` component.
- Bumped project version to 0.1.15 in `package.json`.

## [0.1.14] - 2025-06-25

### Added
- Added `Feature Article` and `Article Grid` components to the `PageLayout` dynamic zone options for the Service content type.
- Updated TypeScript type definitions to include `Feature Article` and `Article Grid` in the Service schema.

### Changed
- Bumped project version to 0.1.14 in `package.json`.

## [0.1.13] - 2025-06-24

### Added
- Introduced new `Article Grid` component for displaying articles in a grid layout, with a required title field.
- Added `Article Grid` and `Feature Article` components to the `PageLayout` dynamic zone options for the Home, About, and Blog content types.
- Updated TypeScript type definitions to include the new `Article Grid` component and its integration in Home, About, and Blog schemas.

### Changed
- Bumped project version to

## [0.1.12] - 2025-06-23

### Added
- Introduced new `Article` collection type with fields for Title, Description, Image, and Body, supporting localization and draft/publish workflows.
- Implemented core files for the Article API:
  - Controller (`src/api/article/controllers/article.js`)
  - Service (`src/api/article/services/article.js`)
  - Router (`src/api/article/routes/article.js`)
- Added the `Feature Article` component, allowing a one-to-one relation to an Article.
- Updated TypeScript type definitions to include the new Article collection type and Feature Article component.

### Changed
- Bumped project version to

## [0.1.11] - 2025-06-22

### Added
- Introduced the new `Blog` single type with fields for Title, Subtitle, CTAButton, Partners, and a flexible `PageLayout` dynamic zone supporting multiple components.
- Implemented core files for the Blog API:
  - Controller (`src/api/blog/controllers/blog.js`)
  - Service (`src/api/blog/services/blog.js`)
  - Router (`src/api/blog/routes/blog.js`)
- Updated TypeScript type definitions to include the new Blog single type.
- Configured default email settings in `config/plugins.js` for outgoing emails.

### Changed
- Bumped project version to 0.1.11 in `package.json`.

## [0.1.10] - 2025-06-21

### Added
- Added the `Double Scroll` component to the `PageLayout` dynamic zone options for the About content type, enabling advanced content layouts.
- Updated TypeScript type definitions to include `Double Scroll` in the About schema.

## [0.1.9] - 2025-06-20

### Added
- Added a required `Color` field (enumeration: Purple, Green, Dark Purple, Blue, Red) to the Service content type for improved categorization and theming.
- Updated TypeScript type definitions to include the new `Color` field in the Service schema.

## [0.1.8] - 2025-06-19

### Added
- Introduced new `Double Scroll` component for advanced content layouts, supporting two rows of repeatable `Topic` components with titles and subtitles.
- Added `Double Scroll` to the `PageLayout` dynamic zone options for both the Home and Service content types.
- Updated TypeScript type definitions to include the new `Double Scroll` component in Home and Service schemas.

## [0.1.7] - 2025-06-18

### Added
- Added `Media Block` and `Large Map` components to the `PageLayout` dynamic zone for both the Home and Service content types.
- Updated TypeScript type definitions to include `Media Block` and `Large Map` in the Home and Service schemas.

## [0.1.6] - 2025-06-17

### Added
- Introduced new `Media Block` component for flexible media and content layouts, supporting images/files, position, and description.
- Added `Media Block` to the `About` page's dynamic zone options.
- Improved TypeScript component definitions to include the new `Media Block` and updated `Large Map` component with a description field.

### Changed
- Updated `Large Map` component: changed the `Description` attribute type from `string` to `text` for better content support.

## [0.1.5] - 2025-06-16

### Added
- Introduced new `Large Map` component for displaying map sections with title and description.
- Introduced new `Media Block` component for flexible media and content layouts, supporting images/files, position, and description.
- Added `Large Map` to the `About` page's dynamic zone options.
- Updated TypeScript component definitions to include `Large Map` and `Media Block`.

## [0.1.4] - 2025-06-11

### Added
- Added a required, non-repeatable `SEO` component (`shared.seo`) to the Service content type for enhanced metadata management.
- Added a `slug` field to the `SEO` component for improved URL and metadata control.

### Changed
- Updated Service content type schema to include the new SEO field.

## [0.1.3] - 2025-05-12

### Added
- Enhanced the List Topics component with repeatable Topic items:
  - Added required Topics field to the List Topics component
  - Configured minimum of 1 Topic item per List Topics component
  - Topics field uses the singles.topic component structure
- Updated TypeScript type definitions to reflect component changes

### Changed
- Improved component documentation with additional description fields
- Enhanced type safety with proper Schema.Attribute definitions
- Updated component structure for better content modeling

## [0.1.2] - 2025-05-12

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
