import React from 'react';
import styles from './ProjectTechnologiesUsed.module.css';

const technologies = [
    { src: '/assets/logo/google-cloud.png', name: 'Google Cloud' },
    { src: '/assets/logo/odoo.png' },
    { src: '/assets/logo/react.png', name: 'React JS' },
    { src: '/assets/logo/nextjs.png', name: 'Next JS' },
    { src: '/assets/logo/python.png', name: 'Python' },
    { src: '/assets/logo/digitalocean.png', name: 'Digital Ocean' },
    { src: '/assets/logo/stripe.png' },
    { src: '/assets/logo/paypal.png' },
];

const TechnologiesIntegrations = () => {
    return (
        <div className={styles.container + " mx-auto max-w-7xl px-6 lg:px-8"}>
            <h1 className={styles.heading}><b>Technologies & Integrations</b></h1>
            <div className={styles.logosContainer}>
                {technologies.map((tech, index) => (
                    <div key={index} className={styles.card}>
                        <img
                            src={tech.src}
                            alt={tech.name}
                            className={styles.logo}
                            width={
                                tech.src === '/assets/logo/paypal.png' ? 100 :
                                    tech.src === '/assets/logo/odoo.png' ? 80 : 64
                            }
                            height={
                                tech.src === '/assets/logo/paypal.png' ? 100 :
                                    tech.src === '/assets/logo/odoo.png' ? 80 : 64
                            }
                        />
                        {tech.name && <p className={styles.name}>{tech.name}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechnologiesIntegrations;
