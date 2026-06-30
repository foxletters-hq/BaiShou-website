import type { FC } from 'react';
import type { LucideIcon } from 'lucide-react';

export interface FeatureCardProps {
  i18nId: string;
  icon: LucideIcon;
  showBadge?: boolean;
}

const FeatureCard: FC<FeatureCardProps> = ({ i18nId, icon: Icon, showBadge }) => {
  return (
    <article className="card feature-card reveal">
      <div className="feature-card-head">
        <div className="feature-icon" aria-hidden="true">
          <Icon size={22} strokeWidth={1.8} />
        </div>
        {showBadge && (
          <span className="feature-badge" data-i18n-badge={`features.items.${i18nId}.badge`}>
            开发中
          </span>
        )}
      </div>
      <h3 className="feature-card-title" data-i18n={`features.items.${i18nId}.title`}>
        {i18nId}
      </h3>
      <p className="feature-card-desc" data-i18n={`features.items.${i18nId}.desc`}>
        {i18nId}
      </p>
    </article>
  );
};

export default FeatureCard;
