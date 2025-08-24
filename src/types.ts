import type { JSX } from "react";

export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurCourses = "courses",
  AboutUs = "aboutus",
  Contact = "contact"
}

export interface BenefitType{
  icon: JSX.Element;
  title: string;
  description: string;
}

export type CourseType = {
  name: string;
  description?: string;
  image: string;
}