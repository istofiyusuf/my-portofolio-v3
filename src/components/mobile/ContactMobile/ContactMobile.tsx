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
import styles from './ContactMobile.module.css';

const iconMap: Record<string, React.ComponentType> = {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiDribbble,
  FiMail,
  FiMessageCircle,
};

export default function ContactMobile() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const text = `Halo Istofi,%0A%0ANama: ${name}%0AEmail: ${email}%0A%0A${message}`;
    window.open(`https://wa.me/6281212649519?text=${text}`, '_blank');
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleCopy = (text: string, platform: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(platform);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className={styles.sectionTag}>05. CONTACT</p>
          <h2 className={styles.sectionTitle}>
            <span className={styles.bracket}>{'/*'}</span> Let's Connect{' '}
            <span className={styles.bracket}>{'*/'}</span>
          </h2>
          <p className={styles.sectionDesc}>Reach out via WhatsApp, email, or social media.</p>
        </motion.div>

        {/* WhatsApp Button */}
        <motion.a
          href="https://wa.me/6281212649519?text=Halo%20Istofi%2C%20saya%20tertarik%20dengan%20portofolio%20Anda"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.waBtn}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <FiMessageCircle />
          <span>CHAT VIA WHATSAPP</span>
          <FiArrowRight />
        </motion.a>

        {/* Form */}
        <motion.div
          className={styles.formCard}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          {submitted ? (
            <div className={styles.success}>
              <FiCheck className={styles.successIcon} />
              <h3>Message Sent!</h3>
              <button className={styles.sendAgain} onClick={() => setSubmitted(false)}>
                {'>'} SEND AGAIN
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label>{'>'} YOUR_NAME</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label>{'>'} YOUR_EMAIL</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@email.com"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label>{'>'} YOUR_MESSAGE</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  rows={3}
                  required
                />
              </div>
              <button type="submit" className={styles.submitBtn}>
                <FiSend /> SEND VIA WHATSAPP
              </button>
            </form>
          )}
        </motion.div>

        {/* Email */}
        <motion.div
          className={styles.emailCard}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <FiMail />
          <span>yusufistofi@gmail.com</span>
          <button onClick={() => handleCopy('yusufistofi@gmail.com', 'email')}>
            {copied === 'email' ? <FiCheck /> : <FiCopy />}
          </button>
        </motion.div>

        {/* Social Grid */}
        <motion.div
          className={styles.socialGrid}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
        >
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
                  <Icon />
                  <span>{link.platform}</span>
                </a>
              );
            })}
        </motion.div>
      </div>
    </section>
  );
}
