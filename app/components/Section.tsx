import clsx from 'clsx';
import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
}

export default function Section({ children, className, id, fullWidth = false }: SectionProps) {
  return (
    <section 
      id={id} 
      className={clsx(
        "py-16 md:py-24 px-6 md:px-12 w-full",
        !fullWidth && "max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </section>
  );
}
