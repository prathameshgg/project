import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Heart, Zap, Star } from 'lucide-react';
import styles from '../styles/PricingPage.module.css';

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  features: string[];
  buttonText: string;
  icon: React.ReactNode;
  popular: boolean;
}

interface DetailedFeature {
  tier: string;
  price?: string;
  features: {
    title: string;
    details?: string[];
  }[];
}

const pricingPlans: PricingPlan[] = [
  {
    id: 'free',
    name: 'Free',
    price: 'Rs. 0/month',
    features: [
      'Streak Tracker',
      'Meditation Tools',
      'Daily Inspirational Quotes',
      'Login/Sign-Up System'
    ],
    buttonText: 'Get Started',
    icon: <Heart size={32} />,
    popular: false
  },
  {
    id: 'plus',
    name: 'Plus',
    price: 'Rs. 49/month',
    features: [
      'All Free Tier Features',
      'Download Feature',
      'Ad-Free Experience',
      'Community Access'
    ],
    buttonText: 'Subscribe Now',
    icon: <Zap size={32} />,
    popular: true
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 'Rs. 1999/6 months',
    features: [
      'All Free and Plus Features',
      'One-on-One Counseling',
      'Priority Meditation Tools',
      'Therapist Ratings'
    ],
    buttonText: 'Subscribe Now',
    icon: <Star size={32} />,
    popular: false
  }
];

const detailedFeatures: DetailedFeature[] = [
  {
    tier: 'Free Tier',
    features: [
      {
        title: 'Streak Tracker',
        details: ['Keeps users motivated by tracking consistency in activities like journaling or meditation']
      },
      {
        title: 'Meditation',
        details: [
          'AI voice-based ASMR and beat frequency customization (male/female/none)',
          'Pause/play button and customizable meditation duration',
          'Categories for various needs: anxiety, sleep deprivation, students, senior citizens'
        ]
      },
      {
        title: 'Quote Section',
        details: ['Inspirational quotes updated daily or weekly']
      },
      {
        title: 'Images',
        details: ['Mood-enhancing visuals throughout the website']
      },
      {
        title: 'Login/Sign-Up System',
        details: ['Separate login pages for therapists and patients']
      },
      {
        title: 'Donation Section',
        details: ['Option for users to support the platform']
      },
      {
        title: 'Insights and Analytics',
        details: ['Access to basic analytics, including mood and habit trends']
      }
    ]
  },
  {
    tier: 'Plus Tier',
    price: 'Rs. 49/month',
    features: [
      {
        title: 'All Free Tier features'
      },
      {
        title: 'Download Feature',
        details: ['Users can download meditation audio or resources for offline use']
      },
      {
        title: 'Ad-Free Experience',
        details: ['Completely ad-free browsing']
      },
      {
        title: 'Verified Mark',
        details: ['Badge (similar to X/Twitter) indicating premium membership']
      },
      {
        title: 'Community Access',
        details: ['Participation in exclusive community forums for discussions and peer support']
      }
    ]
  },
  {
    tier: 'Premium Tier',
    price: 'Rs. 1999/6 months',
    features: [
      {
        title: 'All Free and Plus Tier features'
      },
      {
        title: 'One-on-One Monthly Counseling',
        details: ['Online counseling sessions with licensed therapists via Zoom']
      },
      {
        title: 'Priority Meditation Tools',
        details: ['Access to advanced meditation categories and personalized recommendations']
      },
      {
        title: 'Therapist Ratings',
        details: ['View therapist ratings to make informed decisions']
      }
    ]
  }
];

const PricingPage = () => {
  const navigate = useNavigate();

  const handleSubscribe = (planId: string) => {
    navigate(`/signup?plan=${planId}`);
  };

  return (
    <div className={styles.pricingPage}>
      <h1 className={styles.header}>Choose Your Plan</h1>
      <div className={styles.plansContainer}>
        {pricingPlans.map((plan) => (
          <div 
            key={plan.id} 
            className={`${styles.planCard} ${plan.popular ? styles.popular : ''}`}
          >
            {plan.popular && <div className={styles.badge}>Most Popular</div>}
            <div className={styles.planHeader}>
              <div className={styles.icon}>{plan.icon}</div>
              <h2>{plan.name}</h2>
              <div className={styles.price}>
                <span className={styles.rupeeSymbol}>₹</span>
                {plan.price}
                <span>/month</span>
              </div>
            </div>
            <ul className={styles.features}>
              {plan.features.map((feature, index) => (
                <li key={index}>
                  <Check size={18} className={styles.checkIcon} />
                  {feature}
                </li>
              ))}
            </ul>
            <button 
              className={styles.ctaButton}
              onClick={() => handleSubscribe(plan.id)}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>

      <section className={styles.featuresSection}>
        <h2 className={styles.featuresTitle}>Features Breakdown</h2>
        {detailedFeatures.map((tier, index) => (
          <div key={index} className={styles.tierDetails}>
            <h3>{tier.tier} {tier.price && <span>({tier.price})</span>}</h3>
            <ul>
              {tier.features.map((feature, featureIndex) => (
                <li key={featureIndex}>
                  <strong>{feature.title}</strong>
                  {feature.details && (
                    <ul className={styles.subFeatures}>
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className={styles.ctaSection}>
        <h2>Ready to Start Your Journey?</h2>
        <p>Join thousands of users who have found peace and support through our platform.</p>
        <button 
          className={styles.ctaButton}
          onClick={() => handleSubscribe('free')}
        >
          Start Free Trial
        </button>
      </section>
    </div>
  );
};

export default PricingPage;