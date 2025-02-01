import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Star, MapPin, Phone, Mail, Shield, UserCheck } from 'lucide-react';
import styles from '../styles/DirectoryPage.module.css';

interface Therapist {
  id: string;
  name: string;
  imageUrl: string;
  specialty: string;
  location: string;
  experience: number;
  rating: number;
  verified: boolean;
  acceptingPatients: boolean;
  description: string;
  specialties: string[];
  phone: string;
  email: string;
}

const therapists: Therapist[] = [
  {
    id: '1',
    name: 'Dr. Emily Carter',
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    specialty: 'Anxiety & Depression',
    location: 'New York, NY',
    experience: 10,
    rating: 4,
    verified: true,
    acceptingPatients: true,
    description: 'Specializing in anxiety and depression treatment with 10+ years of experience.',
    specialties: ['Anxiety', 'Depression'],
    phone: '+1 (212) 555-0123',
    email: 'dr.emily.carter@example.com'
  },
  {
    id: '2',
    name: 'Dr. Rahul Mehta',
    imageUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    specialty: 'Stress Management & Mindfulness',
    location: 'Mumbai, India',
    experience: 10,
    rating: 5,
    verified: true,
    acceptingPatients: true,
    description: 'Expert in stress management and mindfulness techniques for modern life challenges.',
    specialties: ['Stress Management', 'Mindfulness'],
    phone: '+91 98765 43210',
    email: 'dr.rahul.mehta@example.com'
  },
  {
    id: '3',
    name: 'Dr. Sophia Lopez',
    imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    specialty: 'Couples Therapy',
    location: 'Los Angeles, CA',
    experience: 10,
    rating: 3,
    verified: false,
    acceptingPatients: true,
    description: 'Dedicated to helping couples improve communication and strengthen relationships.',
    specialties: ['Couples Therapy'],
    phone: '+1 (310) 555-1234',
    email: 'dr.sophia.lopez@example.com'
  }
];

const DirectoryPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const filteredTherapists = useMemo(() => {
    const query = searchQuery.toLowerCase();
    return therapists.filter(therapist => 
      therapist.name.toLowerCase().includes(query) ||
      therapist.specialty.toLowerCase().includes(query) ||
      therapist.location.toLowerCase().includes(query) ||
      therapist.description.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div className={styles.directoryPage}>
      <section className={styles.introSection}>
        <div className={styles.container}>
          <h1 className={styles.introTitle}>Therapists Directory</h1>
          <p className={styles.introText}>
            Welcome to the Therapists Directory! This section is designed to connect you with licensed therapists 
            and mental health professionals near you. Browse through profiles to find the right support tailored 
            to your needs.
          </p>
        </div>
      </section>

      <section className={styles.searchSection}>
        <div className={styles.searchContainer}>
          <Search className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search therapists..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
        </div>
      </section>

      <section className={styles.directorySection}>
        <div className={styles.container}>
          {filteredTherapists.length === 0 ? (
            <p className={styles.noResults}>No therapists found matching your search criteria.</p>
          ) : (
            filteredTherapists.map(therapist => (
              <div key={therapist.id} className={styles.therapistCard}>
                <div className={styles.cardHeader}>
                  <img 
                    src={therapist.imageUrl} 
                    alt={therapist.name}
                    className={styles.profileImage}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/placeholder-profile.jpg';
                    }}
                  />
                  <div className={styles.headerContent}>
                    <h3>{therapist.name}</h3>
                    <div className={styles.rating}>
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          className={styles.starIcon} 
                          fill={i < therapist.rating ? "#ffd700" : "#ddd"}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className={styles.specialties}>
                  {therapist.specialties.map(specialty => (
                    <span key={specialty} className={styles.specialtyBadge}>
                      {specialty}
                    </span>
                  ))}
                </div>
                <div className={styles.contactInfo}>
                  <div className={styles.infoItem}>
                    <MapPin className={styles.infoIcon} />
                    <span>{therapist.location}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <Phone className={styles.infoIcon} />
                    <span>{therapist.phone}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <Mail className={styles.infoIcon} />
                    <span>{therapist.email}</span>
                  </div>
                </div>
                <div className={styles.verification}>
                  {therapist.verified && (
                    <div className={styles.verifiedBadge}>
                      <Shield className={styles.verifiedIcon} />
                      Verified Practitioner
                    </div>
                  )}
                  {therapist.acceptingPatients && (
                    <div className={styles.acceptingPatients}>
                      <UserCheck className={styles.acceptingIcon} />
                      Accepting New Patients
                    </div>
                  )}
                </div>
                <button 
                  className={styles.contactButton}
                  onClick={() => navigate(`/directory/${therapist.id}`)}
                >
                  View Profile
                </button>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default DirectoryPage;