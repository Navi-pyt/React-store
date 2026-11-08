import React from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.scss'

const About = () => {
  const sections = [
    {
      icon: '🏭',
      title: 'О нас',
      text: 'Мы делаем удобные интернет‑магазины с продуманной логикой корзины и быстрой навигацией. Наша цель — чтобы пользователь сразу понимал, где он находится и что делать дальше.',
    },
    {
      icon: '🚀',
      title: 'Миссия',
      text: 'Создавать продукты, которые экономят время и нервы: чистый код, предсказуемое состояние, понятные интерфейсы. Никаких лишних перезагрузок и рассинхронизации данных.',
    },
    {
      icon: '🤝',
      title: 'Команда',
      text: 'Небольшая команда фронтенд‑разработчиков и дизайнеров. Любим декомпозицию, модульность и понятную архитектуру. И да, мы тоже любим хорошие настольные игры.',
    },
  ]

  return (
    <main className={styles.aboutPage}>
      <header className={styles.header}>
        <h1 className={styles.title}>О компании</h1>
        <p className={styles.subtitle}>
          Коротко о том, кто мы, зачем и как делаем продукт.
        </p>
      </header>

      <div className={styles.grid}>
        {sections.map((s, idx) => (
          <article key={idx} className={styles.card}>
            <div className={styles.icon}>{s.icon}</div>
            <h3 className={styles.cardTitle}>{s.title}</h3>
            <p className={styles.cardText}>{s.text}</p>
          </article>
        ))}
      </div>

      <div className={styles.actions}>
        <Link to="/" className={styles.backButton}>
          ← Вернуться на главную
        </Link>
      </div>
    </main>
  )
}

export default About