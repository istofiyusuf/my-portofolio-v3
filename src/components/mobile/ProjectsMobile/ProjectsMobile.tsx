import { projects } from '@/data/projects';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiClock, FiExternalLink, FiGithub } from 'react-icons/fi';
import styles from './ProjectsMobile.module.css';
import { useLanguage } from '@/hooks/LanguageContext';

export default function ProjectsMobile() {
  const { t } = useLanguage();
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <p className={styles.sectionTag}>04. {t({ id: 'PROYEK', en: 'PROJECTS' })}</p>
          <h2 className={styles.sectionTitle}>
            <span className={styles.bracket}>{'/*'}</span> {t({ id: 'Karya Pilihan', en: 'Featured Works' })}{' '}
            <span className={styles.bracket}>{'*/'}</span>
          </h2>
        </motion.div>

        {/* Status Labels */}
        <div className={styles.statusRow}>
          <div className={styles.statusItem}>
            <FiCheckCircle className={styles.statusIconLive} />
            <span>LIVE</span>
            <span className={styles.statusCount}>
              {projects.filter((p) => p.status === 'live').length}
            </span>
          </div>
          <div className={styles.statusItem}>
            <FiClock className={styles.statusIconSoon} />
            <span>{t({ id: 'SEGERA HADIR', en: 'COMING SOON' })}</span>
            <span className={styles.statusCount}>
              {projects.filter((p) => p.status === 'coming_soon').length}
            </span>
          </div>
        </div>

        {/* Project List */}
        <div className={styles.list}>
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className={`${styles.card} ${project.status === 'coming_soon' ? styles.comingSoon : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              {/* Image */}
              <div className={styles.cardImage}>
                <div className={styles.imagePlaceholder}>
                  {/* GAMBAR ASLI */}
                  {project.imageUrl ? (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className={styles.projectImage}
                    />
                  ) : (
                    <div className={styles.gradientBg} />
                  )}

                  <div className={`${styles.statusBadge} ${styles[project.status]}`}>
                    {project.status === 'live' ? (
                      <>
                        <FiCheckCircle /> LIVE
                      </>
                    ) : (
                      <>
                        <FiClock /> {t({ id: 'SEGERA', en: 'SOON' })}
                      </>
                    )}
                  </div>
                  <div className={styles.imageOverlay}>
                    <span className={styles.projectId}>
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className={styles.cardInfo}>
                <span className={styles.cardCategory}>{t(project.category)}</span>
                <p className={styles.cardDesc}>{t(project.description)}</p>
                <div className={styles.cardTech}>
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className={styles.cardLinks}>
                  {project.liveUrl && project.status === 'live' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.actionBtn}
                    >
                      <FiExternalLink /> {t({ id: 'KUNJUNGI', en: 'VISIT' })}
                    </a>
                  )}
                  {project.githubUrl && project.status === 'live' && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.actionBtnOutline}
                    >
                      <FiGithub /> {t({ id: 'SUMBER', en: 'SOURCE' })}
                    </a>
                  )}
                  {project.status === 'coming_soon' && (
                    <span className={styles.comingSoonText}>
                      <FiClock /> {t({ id: 'DALAM PENGEMBANGAN', en: 'IN DEVELOPMENT' })}
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <div className={styles.sectionDivider} />
    </section>
  );
}
