import SectionTransition from '@/components/shared/SectionTransition/SectionTransition';
import { skills } from '@/data/skills';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCloud, FiCode, FiCpu, FiLayout, FiServer, FiTrendingUp } from 'react-icons/fi';
import styles from './Expertise.module.css';

// Kategori dengan icon
const categories = [
  { key: 'frontend', label: 'FRONTEND', icon: FiLayout },
  { key: 'backend', label: 'BACKEND', icon: FiServer },
  { key: 'ai', label: 'AI', icon: FiCpu },
  { key: 'design', label: 'DESIGN', icon: FiCode },
  { key: 'marketing', label: 'SOCIAL & MARKETING', icon: FiTrendingUp },
  { key: 'devops', label: 'DEVOPS', icon: FiCloud },
];

export default function Expertise() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section id="expertise" ref={sectionRef} className={styles.expertise}>
      <div className={styles.container}>
        {/* Section Header */}
        <SectionTransition>
          <div className={styles.header}>
            <p className={styles.sectionTag}>03. EXPERTISE</p>
            <h2 className={styles.sectionTitle}>
              <span className={styles.bracket}>{'/*'}</span> Technical Skillset{' '}
              <span className={styles.bracket}>{'*/'}</span>
            </h2>
          </div>
        </SectionTransition>

        {/* Skills Grid */}
        <div className={styles.grid}>
          {categories.map((category, catIndex) => {
            const categorySkills = skills.filter((skill) => skill.category === category.key);

            if (categorySkills.length === 0) return null;

            const CategoryIcon = category.icon;

            return (
              <SectionTransition key={category.key} delay={catIndex * 0.1}>
                <div className={styles.categoryCard}>
                  {/* Category Header */}
                  <div className={styles.categoryHeader}>
                    <div className={styles.categoryIcon}>
                      <CategoryIcon />
                    </div>
                    <div>
                      <span className={styles.categoryLabel}>{category.label}</span>
                      <span className={styles.categoryCount}>{categorySkills.length} SKILLS</span>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className={styles.skillsList}>
                    {categorySkills.map((skill, index) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        index={index}
                      />
                    ))}
                  </div>
                </div>
              </SectionTransition>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <SectionTransition delay={0.5}>
          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>{'>'} 50+</span>
              <span className={styles.statLabel}>Technologies Mastered</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statNumber}>{'>'} 5</span>
              <span className={styles.statLabel}>Years of Coding</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statNumber}>{'>'} 20+</span>
              <span className={styles.statLabel}>Projects Delivered</span>
            </div>
          </div>
        </SectionTransition>
      </div>

      {/* Divider */}
      <div className={styles.sectionDivider} />
    </section>
  );
}

// Komponen Progress Bar per Skill
function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
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
            duration: 1,
            delay: index * 0.1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        />
        <div className={styles.progressGlow} />
      </div>
    </div>
  );
}
