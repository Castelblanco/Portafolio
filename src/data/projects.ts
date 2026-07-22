import type { Project } from '@/types';

export const projects: Project[] = [
    {
        title: 'Minibares',
        context:
            'El sistema sufría caídas constantes desde hacía más de 5 años, generando interrupciones frecuentes y afectando la experiencia de los usuarios.',
        action: 'Lideré una optimización integral full-stack. Migré un microservicio crítico a Go, reemplacé múltiples llamadas HTTP síncronas a la base de datos por WebSockets, e implementé mejoras de rendimiento en el frontend. Además, diseñé y desplegué un entorno de desarrollo desde cero para agilizar los flujos de trabajo del equipo.',
        result: 'Logré una estabilización del 95% en la infraestructura de microservicios y una mejora del 80% en el rendimiento de la base de datos. Reduje los costes de infraestructura en más de un 1.000% mediante una asignación optimizada de recursos, acelerando significativamente los ciclos de desarrollo.',
        highlights: [
            'Go',
            'WebSockets',
            'Node.js',
            'Express',
            'NestJS',
            'Python',
            'Flask',
            'React-Native',
            'Expo',
            'PostgreSQL',
            'Docker',
            'TypeScript',
        ],
    },
    {
        title: 'SmartTek',
        context:
            'El sistema presentaba graves cuellos de botella en su arquitectura de replicación de datos (Zookeeper/Kafka), lo que provocaba tiempos de carga de reportes excesivamente lentos y dificultaba el acceso a métricas en tiempo real para el equipo de ventas.',
        action: 'Refactoricé la infraestructura crítica y sus dependencias (Kafka, restQL), reduciendo la sobrecarga de replicación innecesaria. Además, desarrollé una app móvil multiplataforma con Expo para que los vendedores pudieran consultar métricas y reportes desde cualquier lugar.',
        result: 'Reduje el tiempo de carga de reportes en un 80%, mejorando drásticamente la toma de decisiones. La nueva app móvil aumentó la productividad del equipo de ventas al proporcionar información en tiempo real, y la infraestructura rediseñada en GCP/Kubernetes mejoró la escalabilidad general del sistema.',
        highlights: [
            'Kafka',
            'Expo',
            'GCP',
            'Kubernetes',
            'Node.js',
            'Express',
            'MongoDB',
            'React-Native',
            'Firebase',
            'Docker',
            'TypeScript',
        ],
    },
    {
        title: 'Kumon Sandra BOT',
        context:
            'El cliente tenía dificultades para gestionar un alto volumen de consultas a través de múltiples canales (WhatsApp, Instagram, Messenger), lo que generaba tiempos de respuesta lentos y pérdida de oportunidades de venta.',
        action: 'Diseñé e implementé un chatbot con inteligencia artificial utilizando los modelos LLM de OpenAI, integrado en las tres plataformas de mensajería. El bot fue entrenado para responder preguntas frecuentes sobre cursos de matemáticas, español e inglés, actuando como asistente virtual para potenciales estudiantes.',
        result: 'Mejoré el tiempo de respuesta a leads interesados en más de un 200%, aumentando significativamente el engagement y las tasas de conversión. El sistema automatizado ahora atiende consultas las 24/7 sin intervención humana, liberando al personal para tareas de mayor valor.',
        highlights: [
            'OpenAI',
            'LLM',
            'Node.js',
            'Express',
            'TypeScript',
            'Redis',
            'Chatbot',
            'Multi-plataforma',
        ],
    },
    {
        title: 'Marval',
        context:
            'La página de proyectos inmobiliarios estaba basada en una arquitectura heredada con iframes, lo que provocaba tiempos de carga extremadamente lentos, mala mantenibilidad y escasa escalabilidad.',
        action: 'Rediseñé completamente la página utilizando React con Server-Side Rendering (SSR), reemplazando la obsoleta estructura de iframes. Además, diseñé y desplegué una infraestructura completa en OCI (Oracle Cloud Infrastructure), dockerizando el backend en Django y el frontend en React, e implementé un pipeline CI/CD para automatizar los despliegues.',
        result: 'Reduje el tiempo de carga de la página en más de un 80%, ofreciendo una experiencia de usuario mucho más fluida. La nueva arquitectura es ahora más mantenible, escalable y flexible, mientras que el pipeline CI/CD redujo el tiempo de despliegue de horas a minutos.',
        highlights: ['React SSR', 'Django', 'OCI', 'PostgreSQL', 'CI/CD'],
    },
];
