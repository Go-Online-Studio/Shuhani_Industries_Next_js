import React from "react";

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  isLinkExternal?: boolean;
}

export default function ContactCard({
  icon,
  title,
  description,
  href,
  isLinkExternal = false,
}: ContactCardProps) {
  const content = (
    <div className="group flex gap-[18px] items-start bg-bg-card rounded-lg p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-350 ease-crafter border border-border/30 h-full w-full">
      {/* Icon Wrapper */}
      <div className="w-[52px] h-[52px] rounded-sm bg-primary/10 flex items-center justify-center text-primary text-xl flex-shrink-0 transition-colors duration-350 group-hover:bg-primary group-hover:text-white">
        {icon}
      </div>

      {/* Text Info */}
      <div className="flex-grow">
        <h4 className="font-body text-sm font-bold text-text-dark mb-1">
          {title}
        </h4>
        {href ? (
          <span className="text-[13px] text-text-muted hover:text-primary transition-colors duration-350 block leading-relaxed">
            {description}
          </span>
        ) : (
          <p className="text-[13px] text-text-muted leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={isLinkExternal ? "_blank" : undefined}
        rel={isLinkExternal ? "noopener noreferrer" : undefined}
        className="block w-full"
      >
        {content}
      </a>
    );
  }

  return content;
}
