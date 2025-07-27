
import React from 'react';

export interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export interface SectionProps {
  id: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  className?: string;
}
