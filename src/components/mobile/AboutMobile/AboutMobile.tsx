import { profile, timeline } from '@/data/profile';
import { motion } from 'framer-motion';
import { FiCode, FiDownload, FiLayers, FiMail, FiMapPin } from 'react-icons/fi';
import styles from './AboutMobile.module.css';
import { useLanguage } from '@/hooks/LanguageContext';

export default function AboutMobile() {
  const { t } = useLanguage();
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
          <p className={styles.sectionTag}>02. {t({ id: 'TENTANG', en: 'ABOUT' })}</p>
          <h2 className={styles.sectionTitle}>
            <span className={styles.bracket}>{'/*'}</span> {t({ id: 'Pengembang', en: 'The Developer' })}{' '}
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
            <span className={styles.cardLabel}>{t({ id: 'BIOGRAFI', en: 'BIOGRAPHY' })}</span>
          </div>
          <p className={styles.bioText}>{t(profile.description)}</p>
          <p className={styles.bioText}>
            {t({
              id: 'Dengan fondasi kuat dalam teknologi web modern dan hasrat untuk arsitektur yang bersih, saya mengubah persyaratan kompleks menjadi solusi yang elegan dan performan.',
              en: 'With a strong foundation in modern web technologies and a passion for clean architecture, I transform complex requirements into elegant, performant solutions.',
            })}
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
              <span className={styles.infoLabel}>{t({ id: 'LOKASI', en: 'LOCATION' })}</span>
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
              <span className={styles.infoLabel}>{t({ id: 'PENGALAMAN', en: 'EXPERIENCE' })}</span>
              <span className={styles.infoValue}>5+ {t({ id: 'Tahun', en: 'Years' })}</span>
            </div>
          </div>
          <div className={styles.infoCard}>
            <FiLayers className={styles.infoIcon} />
            <div>
              <span className={styles.infoLabel}>{t({ id: 'PROYEK', en: 'PROJECTS' })}</span>
              <span className={styles.infoValue}>20+ {t({ id: 'Selesai', en: 'Completed' })}</span>
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
            <span>{t({ id: 'UNDUH RESUME', en: 'DOWNLOAD RESUME' })}</span>
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
            <span className={styles.cardLabel}>{t({ id: 'PENGALAMAN', en: 'EXPERIENCE' })}</span>
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
                  <h4 className={styles.timelineTitle}>{t(item.title)}</h4>
                  <span className={styles.timelineCompany}>@ {item.company}</span>
                  <p className={styles.timelineDesc}>{t(item.description)}</p>
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
            {t({
              id: 'Kode yang bersih selalu terlihat seperti ditulis oleh seseorang yang peduli.',
              en: 'Clean code always looks like it was written by someone who cares.',
            })}
          </p>
          <div className={styles.quoteLine} />
        </motion.div>
      </div>

      {/* Divider */}
      <div className={styles.sectionDivider} />
    </section>
  );
}
