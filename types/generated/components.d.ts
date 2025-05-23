import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsCardTopics extends Struct.ComponentSchema {
  collectionName: 'components_components_card_topics';
  info: {
    displayName: 'Card Topics';
  };
  attributes: {
    Subtitle: Schema.Attribute.Text;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
    Topics: Schema.Attribute.Component<'singles.topic', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 1;
        },
        number
      >;
  };
}

export interface ComponentsContact extends Struct.ComponentSchema {
  collectionName: 'components_components_contacts';
  info: {
    displayName: 'Contact';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Infographic: Schema.Attribute.Media<'images' | 'files'>;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsFaq extends Struct.ComponentSchema {
  collectionName: 'components_components_faqs';
  info: {
    displayName: 'FAQ';
  };
  attributes: {
    FAQs: Schema.Attribute.Component<'singles.faq', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    Subtitle: Schema.Attribute.Text;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsGroupTopics extends Struct.ComponentSchema {
  collectionName: 'components_components_group_topics';
  info: {
    displayName: 'Group Topics';
  };
  attributes: {
    Subtitle: Schema.Attribute.Text;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
    Topics: Schema.Attribute.Component<'singles.topic', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

export interface ComponentsListTopics extends Struct.ComponentSchema {
  collectionName: 'components_components_list_topics';
  info: {
    description: '';
    displayName: 'List Topics';
  };
  attributes: {
    Subtitle: Schema.Attribute.Text;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
    Topics: Schema.Attribute.Component<'singles.topic', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

export interface ComponentsPlans extends Struct.ComponentSchema {
  collectionName: 'components_components_plans';
  info: {
    displayName: 'Plans';
  };
  attributes: {
    Plans: Schema.Attribute.Component<'singles.single-plan', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    Sidenote: Schema.Attribute.Text;
    Subtitle: Schema.Attribute.Text;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsReviews extends Struct.ComponentSchema {
  collectionName: 'components_components_reviews';
  info: {
    displayName: 'Reviews';
  };
  attributes: {
    AverageRating: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      >;
    Reviews: Schema.Attribute.Component<'singles.client-review', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsStatistics extends Struct.ComponentSchema {
  collectionName: 'components_components_statistics';
  info: {
    description: '';
    displayName: 'Statistics';
  };
  attributes: {
    Statistics: Schema.Attribute.Component<'singles.statistic', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 6;
          min: 4;
        },
        number
      >;
    Subtitle: Schema.Attribute.Text;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsTabTopics extends Struct.ComponentSchema {
  collectionName: 'components_components_tab_topics';
  info: {
    description: '';
    displayName: 'Tab Topics';
  };
  attributes: {
    Subtitle: Schema.Attribute.Text;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
    Topics: Schema.Attribute.Component<'singles.topic', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

export interface ComponentsTeamCards extends Struct.ComponentSchema {
  collectionName: 'components_components_team_cards';
  info: {
    displayName: 'Team Cards';
  };
  attributes: {
    Members: Schema.Attribute.Component<'singles.team-member', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsTechStack extends Struct.ComponentSchema {
  collectionName: 'components_components_tech_stacks';
  info: {
    displayName: 'Tech Stack';
  };
  attributes: {
    Subtitle: Schema.Attribute.Text;
    Tech: Schema.Attribute.Media<'images' | 'files', true> &
      Schema.Attribute.Required;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsTimeline extends Struct.ComponentSchema {
  collectionName: 'components_components_timelines';
  info: {
    displayName: 'Timeline';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Timeline: Schema.Attribute.Component<'singles.timeline-item', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
          min: 2;
        },
        number
      >;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SinglesClientReview extends Struct.ComponentSchema {
  collectionName: 'components_singles_client_reviews';
  info: {
    description: '';
    displayName: 'Client Review';
  };
  attributes: {
    AuthorCompany: Schema.Attribute.String & Schema.Attribute.Required;
    AuthorImage: Schema.Attribute.Media<'images' | 'files'>;
    AuthorName: Schema.Attribute.String & Schema.Attribute.Required;
    AuthorRole: Schema.Attribute.String;
    Rating: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      >;
    Review: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SinglesFaq extends Struct.ComponentSchema {
  collectionName: 'components_singles_faqs';
  info: {
    displayName: 'FAQ';
  };
  attributes: {
    Answer: Schema.Attribute.Text & Schema.Attribute.Required;
    Question: Schema.Attribute.String & Schema.Attribute.Required;
    StartOpen: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface SinglesMemberSocial extends Struct.ComponentSchema {
  collectionName: 'components_singles_member_socials';
  info: {
    displayName: 'Member Social';
  };
  attributes: {
    Platform: Schema.Attribute.Enumeration<
      ['LinkedIn', 'Email', 'Instagram', 'Facebook', 'Website', 'Phone']
    > &
      Schema.Attribute.Required;
    URL: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SinglesPartner extends Struct.ComponentSchema {
  collectionName: 'components_singles_partners';
  info: {
    description: '';
    displayName: 'Partner';
  };
  attributes: {
    Logo: Schema.Attribute.Media<'images' | 'files'>;
    LogoSquare: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    Name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SinglesPlanFeature extends Struct.ComponentSchema {
  collectionName: 'components_singles_plan_features';
  info: {
    displayName: 'Plan Feature';
  };
  attributes: {
    Feature: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SinglesSinglePlan extends Struct.ComponentSchema {
  collectionName: 'components_singles_single_plans';
  info: {
    displayName: 'Single Plan';
  };
  attributes: {
    ButtonText: Schema.Attribute.String;
    Features: Schema.Attribute.Component<'singles.plan-feature', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    Title: Schema.Attribute.String;
  };
}

export interface SinglesStatistic extends Struct.ComponentSchema {
  collectionName: 'components_singles_statistics';
  info: {
    displayName: 'Statistic';
  };
  attributes: {
    Title: Schema.Attribute.String & Schema.Attribute.Required;
    Value: Schema.Attribute.Decimal & Schema.Attribute.Required;
    ValueType: Schema.Attribute.Enumeration<['Number', 'Percentage']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Number'>;
  };
}

export interface SinglesTeamMember extends Struct.ComponentSchema {
  collectionName: 'components_singles_team_members';
  info: {
    description: '';
    displayName: 'Team Member';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    Name: Schema.Attribute.String & Schema.Attribute.Required;
    Role: Schema.Attribute.String & Schema.Attribute.Required;
    SocialLinks: Schema.Attribute.Component<'singles.member-social', true>;
  };
}

export interface SinglesTimelineItem extends Struct.ComponentSchema {
  collectionName: 'components_singles_timeline_items';
  info: {
    displayName: 'Timeline Item';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Icon: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SinglesTopic extends Struct.ComponentSchema {
  collectionName: 'components_singles_topics';
  info: {
    displayName: 'Topic';
  };
  attributes: {
    Category: Schema.Attribute.String;
    Description: Schema.Attribute.Text;
    Icon: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.card-topics': ComponentsCardTopics;
      'components.contact': ComponentsContact;
      'components.faq': ComponentsFaq;
      'components.group-topics': ComponentsGroupTopics;
      'components.list-topics': ComponentsListTopics;
      'components.plans': ComponentsPlans;
      'components.reviews': ComponentsReviews;
      'components.statistics': ComponentsStatistics;
      'components.tab-topics': ComponentsTabTopics;
      'components.team-cards': ComponentsTeamCards;
      'components.tech-stack': ComponentsTechStack;
      'components.timeline': ComponentsTimeline;
      'shared.seo': SharedSeo;
      'singles.client-review': SinglesClientReview;
      'singles.faq': SinglesFaq;
      'singles.member-social': SinglesMemberSocial;
      'singles.partner': SinglesPartner;
      'singles.plan-feature': SinglesPlanFeature;
      'singles.single-plan': SinglesSinglePlan;
      'singles.statistic': SinglesStatistic;
      'singles.team-member': SinglesTeamMember;
      'singles.timeline-item': SinglesTimelineItem;
      'singles.topic': SinglesTopic;
    }
  }
}
