import { ISocialLinks } from './social-links';

/**
 * Model definition for Footer
 */
export interface IFooter {
  id: string;
  socialLinks?: ISocialLinks;
  implementedProjectsCount?: number;
  peopleCompletedCoursesNumber?: number;
  peopleInvolvedInProjectsNumber?: number;
  address?: string;
}