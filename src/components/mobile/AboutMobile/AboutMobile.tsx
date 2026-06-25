import { profile, timeline } from '@/data/profile';
import { motion } from 'framer-motion';
import { FiCode, FiDownload, FiLayers, FiMail, FiMapPin } from 'react-icons/fi';
import styles from './AboutMobile.module.css';

export default function AboutMobile() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <p className={styles.sectionTag}>02. ABOUT</p>
          <h2 className={styles.sectionTitle}>
            <span className={styles.bracket}>{'/*'}</span> The Developer{' '}
            <span className={styles.bracket}>{'*/'}</span>
          </h2>
        </motion.div>

        {/* Bio */}
        <motion.div
          className={styles.bioCard}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className={styles.cardHeader}>
            <span className={styles.cardDot} />
            <span className={styles.cardLabel}>BIOGRAPHY</span>
          </div>
          <p className={styles.bioText}>{profile.description}</p>
          <p className={styles.bioText}>
            With a strong foundation in modern web technologies and a passion for clean
            architecture, I transform complex requirements into elegant, performant solutions.
          </p>
        </motion.div>

        {/* Info Grid */}
        <motion.div
          className={styles.infoGrid}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className={styles.infoCard}>
            <FiMapPin className={styles.infoIcon} />
            <div>
              <span className={styles.infoLabel}>LOCATION</span>
              <span className={styles.infoValue}>{profile.location}</span>
            </div>
          </div>
          <div className={styles.infoCard}>
            <FiMail className={styles.infoIcon} />
            <div>
              <span className={styles.infoLabel}>EMAIL</span>
              <a href={`mailto:${profile.email}`} className={styles.infoValueLink}>
                {profile.email}
              </a>
            </div>
          </div>
          <div className={styles.infoCard}>
            <FiCode className={styles.infoIcon} />
            <div>
              <span className={styles.infoLabel}>EXPERIENCE</span>
              <span className={styles.infoValue}>5+ Years</span>
            </div>
          </div>
          <div className={styles.infoCard}>
            <FiLayers className={styles.infoIcon} />
            <div>
              <span className={styles.infoLabel}>PROJECTS</span>
              <span className={styles.infoValue}>20+ Completed</span>
            </div>
          </div>
        </motion.div>

        {/* Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a href={profile.resumeUrl} className={styles.resumeBtn} download>
            <FiDownload />
            <span>DOWNLOAD RESUME</span>
            <span className={styles.btnArrow}>{'->'}</span>
          </a>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          className={styles.timelineCard}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <div className={styles.cardHeader}>
            <span className={styles.cardDot} />
            <span className={styles.cardLabel}>EXPERIENCE</span>
          </div>

          <div className={styles.timeline}>
            {timeline.map((item, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineRail}>
                  <div className={styles.timelineDot} />
                  {index < timeline.length - 1 && <div className={styles.timelineLine} />}
                </div>

                <div className={styles.timelineContent}>
                  <span className={styles.timelineYear}>{item.year}</span>
                  <h4 className={styles.timelineTitle}>{item.title}</h4>
                  <span className={styles.timelineCompany}>@ {item.company}</span>
                  <p className={styles.timelineDesc}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          className={styles.quoteCard}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className={styles.quoteIcon}>{'"'}</span>
          <p className={styles.quoteText}>
            Clean code always looks like it was written by someone who cares.
          </p>
          <div className={styles.quoteLine} />
        </motion.div>
      </div>

      {/* Divider */}
      <div className={styles.sectionDivider} />
    </section>
  );
}
