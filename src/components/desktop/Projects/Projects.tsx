import SectionTransition from '@/components/shared/SectionTransition/SectionTransition';
import { projects } from '@/data/projects';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { FiCheckCircle, FiClock, FiExternalLink, FiGithub } from 'react-icons/fi';
import styles from './Projects.module.css';

// ... imports tetap

export default function Projects() {
  const [filter] = useState<'all' | 'live' | 'coming_soon'>('all');
  const [flippedId, setFlippedId] = useState<string | null>(null);

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true;
    return p.status === filter;
  });

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        {/* ... header & filter tetap ... */}

        <div className={styles.grid}>
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <SectionTransition key={project.id} delay={index * 0.08}>
                <motion.article
                  className={`${styles.card} ${flippedId === project.id ? styles.flipped : ''} ${project.status === 'coming_soon' ? styles.comingSoon : ''}`}
                  onClick={() => setFlippedId(flippedId === project.id ? null : project.id)}
                  layout
                >
                  {/* Front Side */}
                  <div className={styles.cardFront}>
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
                              <FiCheckCircle />
                              <span>LIVE</span>
                            </>
                          ) : (
                            <>
                              <FiClock />
                              <span>COMING SOON</span>
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
                    <div className={styles.cardInfo}>
                      <div className={styles.cardMeta}>
                        <span className={styles.cardCategory}>{project.category}</span>
                        <span className={styles.cardYear}>{project.year}</span>
                      </div>
                      <p className={styles.cardDesc}>{project.description}</p>
                      <div className={styles.cardTech}>
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span key={tech} className={styles.techTag}>
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className={styles.techMore}>
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>
                      <span className={styles.flipHint}>Click to see details {'->'}</span>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className={styles.cardBack}>
                    <div className={styles.cardBackContent}>
                      <span className={styles.backId}>
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                      <h3 className={styles.backTitle}>{project.title}</h3>
                      <p className={styles.backDesc}>
                        {project.longDescription || project.description}
                      </p>
                      <div className={styles.backTech}>
                        {project.technologies.map((tech) => (
                          <span key={tech} className={styles.techTag}>
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className={styles.backActions}>
                        {project.liveUrl && project.status === 'live' && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.actionBtn}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FiExternalLink /> VISIT SITE
                          </a>
                        )}
                        {project.githubUrl && project.status === 'live' && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.actionBtnOutline}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FiGithub /> SOURCE CODE
                          </a>
                        )}
                      </div>
                      <span className={styles.flipBack}>Click to flip back</span>
                    </div>
                  </div>
                </motion.article>
              </SectionTransition>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <div className={styles.sectionDivider} />
    </section>
  );
}
