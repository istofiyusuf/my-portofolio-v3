import SectionTransition from '@/components/shared/SectionTransition/SectionTransition';
import { profile, timeline } from '@/data/profile';
import { useRef } from 'react';
import { FiCode, FiDownload, FiLayers, FiMail, FiMapPin } from 'react-icons/fi';
import styles from './About.module.css';
import { useLanguage } from '@/hooks/LanguageContext';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  return (
    <section id="about" ref={sectionRef} className={styles.about}>
      <div className={styles.container}>
        {/* Section Header */}
        <SectionTransition>
          <div className={styles.header}>
            <p className={styles.sectionTag}>02. {t({ id: 'TENTANG', en: 'ABOUT' })}</p>
            <h2 className={styles.sectionTitle}>
              <span className={styles.bracket}>{'/*'}</span> {t({ id: 'Pengembang Di Balik Kode', en: 'The Developer Behind The Code' })}{' '}
              <span className={styles.bracket}>{'*/'}</span>
            </h2>
          </div>
        </SectionTransition>

        <div className={styles.grid}>
          {/* Kolom Kiri - Bio + Info Cards */}
          <div className={styles.leftCol}>
            <SectionTransition delay={0.1}>
              <div className={styles.bioCard}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardDot} />
                  <span className={styles.cardLabel}>{t({ id: 'BIOGRAFI', en: 'BIOGRAPHY' })}</span>
                </div>
                <p className={styles.bioText}>{t(profile.description)}</p>
                <p className={styles.bioText}>
                  {t({
                    id: 'Dengan fondasi kuat dalam teknologi web modern dan hasrat untuk arsitektur yang bersih, saya mengubah persyaratan kompleks menjadi solusi yang elegan dan performan. Setiap baris kode ditulis dengan tujuan dan presisi.',
                    en: 'With a strong foundation in modern web technologies and a passion for clean architecture, I transform complex requirements into elegant, performant solutions. Every line of code is written with purpose and precision.',
                  })}
                </p>
              </div>
            </SectionTransition>

            {/* Info Grid */}
            <SectionTransition delay={0.2}>
              <div className={styles.infoGrid}>
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
              </div>
            </SectionTransition>

            {/* Resume Button */}
            <SectionTransition delay={0.3}>
              <a href={profile.resumeUrl} className={styles.resumeBtn} download>
                <FiDownload />
                <span>{t({ id: 'UNDUH RESUME', en: 'DOWNLOAD RESUME' })}</span>
                <span className={styles.btnArrow}>{'->'}</span>
              </a>
            </SectionTransition>
          </div>

          {/* Kolom Kanan - Experience Timeline */}
          <div className={styles.rightCol}>
            <SectionTransition delay={0.2}>
              <div className={styles.timelineCard}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardDot} />
                  <span className={styles.cardLabel}>{t({ id: 'PENGALAMAN', en: 'EXPERIENCE' })}</span>
                </div>

                <div className={styles.timeline}>
                  {timeline.map((item, index) => (
                    <div key={index} className={styles.timelineItem}>
                      {/* Garis & Dot */}
                      <div className={styles.timelineRail}>
                        <div className={styles.timelineDot} />
                        {index < timeline.length - 1 && <div className={styles.timelineLine} />}
                      </div>

                      {/* Konten */}
                      <div className={styles.timelineContent}>
                        <span className={styles.timelineYear}>{item.year}</span>
                        <h4 className={styles.timelineTitle}>{t(item.title)}</h4>
                        <span className={styles.timelineCompany}>@ {item.company}</span>
                        <p className={styles.timelineDesc}>{t(item.description)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SectionTransition>

            {/* Quote */}
            <SectionTransition delay={0.4}>
              <div className={styles.quoteCard}>
                <span className={styles.quoteIcon}>{'"'}</span>
                <p className={styles.quoteText}>
                  {t({
                    id: 'Kode yang bersih selalu terlihat seperti ditulis oleh seseorang yang peduli.',
                    en: 'Clean code always looks like it was written by someone who cares.',
                  })}
                </p>
                <div className={styles.quoteLine} />
              </div>
            </SectionTransition>
          </div>
        </div>
      </div>

      {/* Decorative line */}
      <div className={styles.sectionDivider} />
    </section>
  );
}
