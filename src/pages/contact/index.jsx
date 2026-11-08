import React from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.scss'

const Contact = () => {
  const contacts = [
    { icon: '📧', title: 'Email', value: 'hello@example.com', desc: 'Ответим в течение 24 часов' },
    { icon: '📞', title: 'Телефон', value: '+7 (999) 000-00-00', desc: 'С 9:00 до 18:00, будни' },
    { icon: '📍', title: 'Адрес', value: 'г. Ижевск, ул. Труда, 1', desc: 'Офис 205, вход со двора' },
  ]

  return (
    <main className={styles.contactPage}>
      <header className={styles.header}>
        <h1 className={styles.title}>Контакты</h1>
        <p className={styles.subtitle}>Свяжитесь с нами удобным способом — мы всегда на связи.</p>
      </header>

      <div className={styles.grid}>
        {contacts.map((c, idx) => (
          <article key={idx} className={styles.card}>
            <div className={styles.icon}>{c.icon}</div>
            <h3 className={styles.cardTitle}>{c.title}</h3>
            <p className={styles.cardValue}>{c.value}</p>
            {c.desc && <p className={styles.cardDesc}>{c.desc}</p>}
          </article>
        ))}
      </div>

      {/* Кнопка возврата */}
      <div className={styles.actions}>
        <Link to="/" className={styles.backButton}>
          ← Вернуться на главную
        </Link>
      </div>
    </main>
  )
}

export default Contact