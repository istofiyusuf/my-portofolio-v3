import SectionTransition from '@/components/shared/SectionTransition/SectionTransition';
import { socialLinks } from '@/data/social';
import { motion } from 'framer-motion';
import { FormEvent, useState } from 'react';
import {
  FiArrowRight,
  FiCheck,
  FiCopy,
  FiDribbble,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMessageCircle,
  FiSend,
  FiTwitter,
} from 'react-icons/fi';
import styles from './Contact.module.css';

const iconMap: Record<string, React.ComponentType> = {
  FiGithub: FiGithub,
  FiLinkedin: FiLinkedin,
  FiTwitter: FiTwitter,
  FiDribbble: FiDribbble,
  FiMail: FiMail,
  FiMessageCircle: FiMessageCircle,
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  // Kirim ke WhatsApp
  const handleWhatsAppSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const text = `Halo Istofi,%0A%0ANama: ${name}%0AEmail: ${email}%0A%0A${message}`;
    const waUrl = `https://wa.me/6281212649519?text=${text}`;
    window.open(waUrl, '_blank');
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  // Copy email
  const handleCopy = (text: string, platform: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(platform);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        {/* Section Header */}
        <SectionTransition>
          <div className={styles.header}>
            <p className={styles.sectionTag}>05. CONTACT</p>
            <h2 className={styles.sectionTitle}>
              <span className={styles.bracket}>{'/*'}</span> Let's Connect{' '}
              <span className={styles.bracket}>{'*/'}</span>
            </h2>
            <p className={styles.sectionDesc}>
              Have a project in mind? Let's build something extraordinary together. Reach out via
              WhatsApp, email, or social media.
            </p>
          </div>
        </SectionTransition>

        <div className={styles.grid}>
          {/* Kolom Kiri - Contact Cards */}
          <div className={styles.leftCol}>
            <SectionTransition delay={0.1}>
              {/* WhatsApp Card (Primary) */}
              <a
                href={`https://wa.me/6281212649519?text=Halo%20Istofi%2C%20saya%20tertarik%20dengan%20portofolio%20Anda`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryCard}
              >
                <div className={styles.primaryCardContent}>
                  <div className={styles.primaryIcon}>
                    <FiMessageCircle />
                  </div>
                  <div>
                    <span className={styles.primaryLabel}>WHATSAPP</span>
                    <span className={styles.primaryValue}>+62 812-1264-9519</span>
                  </div>
                </div>
                <FiArrowRight className={styles.primaryArrow} />
              </a>
            </SectionTransition>

            {/* Email Card */}
            <SectionTransition delay={0.15}>
              <div className={styles.secondaryCard}>
                <div className={styles.secondaryContent}>
                  <FiMail className={styles.secondaryIcon} />
                  <div>
                    <span className={styles.secondaryLabel}>EMAIL</span>
                    <span className={styles.secondaryValue}>yusufistofi@gmail.com</span>
                  </div>
                </div>
                <button
                  className={styles.copyBtn}
                  onClick={() => handleCopy('yusufistofi@gmail.com', 'email')}
                >
                  {copied === 'email' ? (
                    <FiCheck className={styles.copyIconCopied} />
                  ) : (
                    <FiCopy className={styles.copyIcon} />
                  )}
                </button>
              </div>
            </SectionTransition>

            {/* Social Links Grid */}
            <SectionTransition delay={0.2}>
              <div className={styles.socialGrid}>
                {socialLinks
                  .filter((s) => s.platform !== 'WhatsApp' && s.platform !== 'Email')
                  .map((link) => {
                    const Icon = iconMap[link.icon] || FiGithub;
                    return (
                      <a
                        key={link.platform}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialCard}
                      >
                        <span className={styles.socialIcon}>
                          <Icon />
                        </span>
                        <span className={styles.socialPlatform}>{link.platform}</span>
                        <span className={styles.socialUsername}>{link.username}</span>
                      </a>
                    );
                  })}
              </div>
            </SectionTransition>
          </div>

          {/* Kolom Kanan - Quick Message Form */}
          <SectionTransition delay={0.3}>
            <div className={styles.rightCol}>
              <div className={styles.formCard}>
                <div className={styles.formHeader}>
                  <span className={styles.formDot} />
                  <span className={styles.formLabel}>QUICK MESSAGE</span>
                  <span className={styles.formBadge}>
                    <FiMessageCircle /> VIA WHATSAPP
                  </span>
                </div>

                {submitted ? (
                  <motion.div
                    className={styles.successMessage}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <FiCheck className={styles.successIcon} />
                    <h3>Message Sent!</h3>
                    <p>WhatsApp has been opened with your message.</p>
                    <button className={styles.sendAgain} onClick={() => setSubmitted(false)}>
                      {'>'} SEND AGAIN
                    </button>
                  </motion.div>
                ) : (
                  <form className={styles.form} onSubmit={handleWhatsAppSubmit}>
                    <div className={styles.formGroup}>
                      <label className={styles.label} htmlFor="name">
                        {'>'} YOUR_NAME
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={styles.input}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.label} htmlFor="email">
                        {'>'} YOUR_EMAIL
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={styles.input}
                        placeholder="john@email.com"
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.label} htmlFor="message">
                        {'>'} YOUR_MESSAGE
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className={styles.textarea}
                        placeholder="Tell me about your project..."
                        rows={4}
                        required
                      />
                    </div>
                    <button type="submit" className={styles.submitBtn}>
                      <FiSend />
                      <span>SEND VIA WHATSAPP</span>
                      <FiArrowRight className={styles.submitArrow} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </SectionTransition>
        </div>
      </div>
    </section>
  );
}
