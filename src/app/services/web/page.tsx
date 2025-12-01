'use client'

import { motion } from "framer-motion";
import { Code2, Smartphone, Globe, Layers, Zap, Shield, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
    {
        icon: Globe,
        title: "Корпоративні сайти",
        description: "Професійна онлайн-присутність для вашого бізнесу з сучасним дизайном та оптимізацією",
        features: ["Адаптивний дизайн", "SEO оптимізація", "CMS інтеграція"]
    },
    {
        icon: Code2,
        title: "Інтернет-магазини",
        description: "Потужні e-commerce рішення з повною інтеграцією платіжних систем",
        features: ["Каталог товарів", "Кошик покупок", "Платіжні системи"]
    },
    {
        icon: Layers,
        title: "Веб-додатки",
        description: "Складні веб-додатки з багатою функціональністю та високою продуктивністю",
        features: ["Real-time функції", "API інтеграція", "Хмарна архітектура"]
    },
    {
        icon: Smartphone,
        title: "Мобільні додатки",
        description: "Крос-платформні мобільні рішення для iOS та Android",
        features: ["React Native", "Push-сповіщення", "Offline режим"]
    }
];

const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Framework" },
    { name: "TypeScript", category: "Language" },
    { name: "Node.js", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" }
];

const processSteps = [
    {
        number: "01",
        title: "Аналіз та планування",
        description: "Детальний аналіз вимог, постановка цілей та розробка технічного завдання"
    },
    {
        number: "02",
        title: "Дизайн та прототипування",
        description: "Створення UI/UX дизайну, інтерактивних прототипів та затвердження концепції"
    },
    {
        number: "03",
        title: "Розробка",
        description: "Написання чистого коду, тестування та інтеграція всіх компонентів системи"
    },
    {
        number: "04",
        title: "Запуск та підтримка",
        description: "Розгортання проекту, навчання команди та постійна технічна підтримка"
    }
];

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

export default function WebDevelopmentPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative overflow-hidden px-4 pt-32 pb-20">
                <div className="absolute inset-0 mystic-gradient-bg opacity-20" />
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-indigo/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl" />

                <motion.div
                    className="relative max-w-7xl mx-auto text-center"
                    initial="initial"
                    animate="animate"
                    variants={staggerContainer}
                >
                    <motion.div variants={fadeInUp} className="mb-6">
                        <Badge className="bg-glass-bg backdrop-blur-sm border-glass-border mystic-glow">
                            Web Development Services
                        </Badge>
                    </motion.div>

                    <motion.h1
                        variants={fadeInUp}
                        className="text-5xl md:text-7xl font-bold mb-6"
                    >
                        Веб-розробка <br />
                        <span className="mystic-text-gradient">
                            нового покоління
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={fadeInUp}
                        className="text-xl text-text-muted mb-10 max-w-3xl mx-auto"
                    >
                        Створюємо сучасні веб-рішення, які допомагають бізнесу зростати.
                        Від концепції до запуску — повний цикл розробки з використанням найновіших технологій.
                    </motion.p>

                    <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center">
                        <Button size="lg" className="group btn-mystic mystic-glow">
                            <ArrowRight className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            Розпочати проект
                        </Button>
                        <Button size="lg" variant="outline" className="border-glass-border bg-glass-bg backdrop-blur-sm hover:bg-glass-bg/50">
                            Переглянути портфоліо
                        </Button>
                    </motion.div>

                    <motion.div
                        variants={fadeInUp}
                        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
                    >
                        {[
                            { icon: Zap, label: "Швидка розробка" },
                            { icon: Shield, label: "Безпека" },
                            { icon: Code2, label: "Чистий код" },
                            { icon: Globe, label: "Масштабність" }
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center gap-2 p-4 mystic-glass rounded-xl">
                                <item.icon className="h-8 w-8 mystic-text-gradient" />
                                <span className="text-sm text-text-muted">{item.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </section>

            {/* Services Section */}
            <section className="px-4 py-20">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="text-center mb-16"
                    >
                        <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-4 mystic-text-gradient">
                            Наші послуги
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-xl text-text-muted">
                            Комплексні рішення для вашого бізнесу
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-2 gap-6"
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        {services.map((service, idx) => (
                            <motion.div key={idx} variants={fadeInUp}>
                                <Card className="mystic-glass h-full hover:border-accent-indigo/50 transition-all duration-300 group hover:scale-[1.02] mystic-glow">
                                    <CardHeader>
                                        <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-accent-indigo/20 to-accent-purple/20 flex items-center justify-center mb-4 group-hover:from-accent-indigo/30 group-hover:to-accent-purple/30 transition-colors">
                                            <service.icon className="h-6 w-6 mystic-text-gradient" />
                                        </div>
                                        <CardTitle className="text-2xl text-foreground">{service.title}</CardTitle>
                                        <CardDescription className="text-base text-text-muted">
                                            {service.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-2">
                                            {service.features.map((feature, fIdx) => (
                                                <li key={fIdx} className="flex items-center gap-2 text-sm text-text-muted">
                                                    <Check className="h-4 w-4 text-accent-indigo flex-shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="px-4 py-20 bg-glass-bg/30">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="text-center mb-16"
                    >
                        <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-4 mystic-text-gradient">
                            Технології
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-xl text-text-muted">
                            Використовуємо перевірені та сучасні інструменти
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="flex flex-wrap gap-3 justify-center"
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        {technologies.map((tech, idx) => (
                            <motion.div key={idx} variants={fadeInUp}>
                                <Badge
                                    className="mystic-glass px-6 py-3 text-base hover:bg-gradient-to-r hover:from-accent-indigo/20 hover:to-accent-purple/20 hover:text-foreground transition-colors cursor-default mystic-glow"
                                >
                                    {tech.name}
                                    <span className="ml-2 text-xs text-text-muted">• {tech.category}</span>
                                </Badge>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Process Section */}
            <section className="px-4 py-20">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="text-center mb-16"
                    >
                        <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-4 mystic-text-gradient">
                            Процес роботи
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-xl text-text-muted">
                            Чіткий та прозорий підхід до кожного проекту
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        {processSteps.map((step, idx) => (
                            <motion.div key={idx} variants={fadeInUp}>
                                <Card className="mystic-glass h-full relative overflow-hidden group mystic-glow hover:scale-[1.02] transition-all">
                                    <div className="absolute top-0 right-0 text-[120px] font-bold text-accent-indigo/5 leading-none group-hover:text-accent-indigo/10 transition-colors">
                                        {step.number}
                                    </div>
                                    <CardHeader>
                                        <div className="text-accent-indigo font-mono text-sm mb-2">{step.number}</div>
                                        <CardTitle className="text-xl text-foreground">{step.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-text-muted">{step.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-4 py-20">
                <motion.div
                    className="max-w-4xl mx-auto"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <Card className="mystic-glass mystic-glow overflow-hidden relative border-gradient-to-r from-accent-indigo/30 to-accent-purple/30">
                        <div className="absolute inset-0 bg-gradient-to-br from-accent-indigo/10 via-transparent to-accent-purple/10" />
                        <CardHeader className="relative text-center pb-8">
                            <CardTitle className="text-3xl md:text-4xl mb-4 mystic-text-gradient">
                                Готові розпочати проект?
                            </CardTitle>
                            <CardDescription className="text-lg text-text-muted">
                                Зв&#39;яжіться з нами сьогодні та отримайте безкоштовну консультацію
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="relative flex flex-col sm:flex-row gap-4 justify-center pb-8">
                            <Button size="lg" className="group btn-mystic mystic-glow">
                                <ArrowRight className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                Замовити консультацію
                            </Button>
                            <Button size="lg" variant="outline" className="border-glass-border bg-glass-bg backdrop-blur-sm hover:bg-glass-bg/50">
                                Написати в Telegram
                            </Button>
                        </CardContent>
                    </Card>
                </motion.div>
            </section>
        </div>
    );
}