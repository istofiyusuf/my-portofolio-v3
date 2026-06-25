import { skills } from '@/data/skills';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCloud, FiCode, FiCpu, FiLayout, FiServer, FiTrendingUp } from 'react-icons/fi';
import styles from './ExpertiseMobile.module.css';

const categories = [
  { key: 'frontend', label: 'FRONTEND', icon: FiLayout },
  { key: 'backend', label: 'BACKEND', icon: FiServer },
  { key: 'ai', label: 'AI', icon: FiCpu },
  { key: 'design', label: 'DESIGN', icon: FiCode },
  { key: 'marketing', label: 'SOCIAL & MARKETING', icon: FiTrendingUp },
  { key: 'devops', label: 'DEVOPS', icon: FiCloud },
];

export default function ExpertiseMobile() {
  return (
    <section id="expertise" className={styles.expertise}>
      <div className={styles.container}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <p className={styles.sectionTag}>03. EXPERTISE</p>
          <h2 className={styles.sectionTitle}>
            <span className={styles.bracket}>{'/*'}</span> Technical Skillset{' '}
            <span className={styles.bracket}>{'*/'}</span>
          </h2>
        </motion.div>

        {/* Category Cards */}
        <div className={styles.categoriesList}>
          {categories.map((category, catIndex) => {
            const categorySkills = skills.filter((skill) => skill.category === category.key);
            if (categorySkills.length === 0) return null;

            const CategoryIcon = category.icon;

            return (
              <motion.div
                key={category.key}
                className={styles.categoryCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              >
                <div className={styles.categoryHeader}>
                  <div className={styles.categoryIcon}>
                    <CategoryIcon />
                  </div>
                  <div>
                    <span className={styles.categoryLabel}>{category.label}</span>
                    <span className={styles.categoryCount}>{categorySkills.length} SKILLS</span>
                  </div>
                </div>

                <div className={styles.skillsList}>
                  {categorySkills.map((skill, index) => (
                    <SkillBarMobile
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      index={index}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats */}
        <motion.div
          className={styles.statsRow}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className={styles.statItem}>
            <span className={styles.statNumber}>{'>'} 50+</span>
            <span className={styles.statLabel}>Technologies</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNumber}>{'>'} 5</span>
            <span className={styles.statLabel}>Years Exp</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNumber}>{'>'} 20+</span>
            <span className={styles.statLabel}>Projects</span>
          </div>
        </motion.div>
      </div>

      <div className={styles.sectionDivider} />
    </section>
  );
}

function SkillBarMobile({ name, level, index }: { name: string; level: number; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className={styles.skillItem}>
      <div className={styles.skillHeader}>
        <span className={styles.skillIndex}>{(index + 1).toString().padStart(2, '0')}</span>
        <span className={styles.skillName}>{name}</span>
        <span className={styles.skillPercent}>{level}%</span>
      </div>
      <div className={styles.progressTrack}>
        <motion.div
          className={styles.progressFill}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{
            duration: 0.8,
            delay: index * 0.08,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        />
      </div>
    </div>
  );
}
