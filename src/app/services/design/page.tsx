'use client'

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Palette,
    Layout,
    Smartphone,
    Monitor,
    Figma,
    Layers,
    Eye,
    Users,
    Zap,
    CheckCircle2,
    Sparkles,
    Pencil
} from "lucide-react";

export default function UXPage() {
    const services = [
        {
            icon: Layout,
            title: "UX дослідження",
            description: "Аналіз користувацької поведінки та проектування оптимального користувацького досвіду"
        },
        {
            icon: Palette,
            title: "UI дизайн",
            description: "Створення сучасних та привабливих інтерфейсів, що відображають ідентичність бренду"
        },
        {
            icon: Smartphone,
            title: "Мобільний дизайн",
            description: "Дизайн адаптивних інтерфейсів для iOS та Android додатків"
        },
        {
            icon: Monitor,
            title: "Веб-дизайн",
            description: "Проектування сучасних та функціональних веб-інтерфейсів"
        },
        {
            icon: Figma,
            title: "Прототипування",
            description: "Інтерактивні прототипи для тестування та валідації ідей"
        },
        {
            icon: Sparkles,
            title: "Дизайн-системи",
            description: "Розробка масштабованих дизайн-систем для консистентності продукту"
        }
    ];

    const tools = [
        { name: "Figma", icon: Figma },
        { name: "Adobe XD", icon: Layout },
        { name: "Sketch", icon: Pencil },
        { name: "Illustrator", icon: Palette },
        { name: "Photoshop", icon: Layers },
        { name: "InVision", icon: Eye }
    ];

    const process = [
        {
            step: "01",
            title: "Дослідження",
            description: "Аналіз цільової аудиторії, конкурентів та ринку"
        },
        {
            step: "02",
            title: "Концепція",
            description: "Створення візуальної концепції та мудбордів"
        },
        {
            step: "03",
            title: "Дизайн",
            description: "Розробка макетів та інтерактивних прототипів"
        },
        {
            step: "04",
            title: "Тестування",
            description: "Юзабіліті-тестування та фінальна доробка"
        }
    ];

    const principles = [
        {
            icon: Users,
            title: "User-Centered",
            description: "Фокус на потребах користувачів"
        },
        {
            icon: Eye,
            title: "Візуальна ієрархія",
            description: "Чітка структура та акценти"
        },
        {
            icon: Zap,
            title: "Швидкість",
            description: "Оптимізований UX для дій"
        },
        {
            icon: Layers,
            title: "Консистентність",
            description: "Єдиний стиль у всьому продукті"
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

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 overflow-hidden">
                <div className="absolute inset-0 mystic-gradient-bg opacity-20" />
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-indigo/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl" />

                <motion.div
                    className="max-w-6xl mx-auto relative z-10"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <Badge className="mb-4 text-sm bg-glass-bg backdrop-blur-sm border-glass-border mystic-glow">
                        UX/UI Дизайн
                    </Badge>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight mystic-text-gradient">
                        Дизайн, що захоплює користувачів
                    </h1>
                    <p className="text-xl text-text-muted mb-8 max-w-2xl">
                        Створюємо інтуїтивні та естетичні інтерфейси, що перетворюють відвідувачів на лояльних користувачів
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Button size="lg" className="group btn-mystic mystic-glow">
                            <Sparkles className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12" />
                            Замовити дизайн
                        </Button>
                        <Button size="lg" variant="outline" className="border-glass-border bg-glass-bg backdrop-blur-sm hover:bg-glass-bg/50">
                            Переглянути портфоліо
                        </Button>
                    </div>
                </motion.div>
            </section>

            {/* Services Grid */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        {...fadeInUp}
                    >
                        <h2 className="text-4xl font-bold mb-4 mystic-text-gradient">
                            Наші послуги
                        </h2>
                        <p className="text-text-muted text-lg max-w-2xl mx-auto">
                            Повний цикл дизайн-послуг від досліджень до фінальної реалізації
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                            >
                                <Card className="mystic-glass p-6 h-full hover:shadow-lg transition-all duration-300 group hover:scale-[1.02] mystic-glow">
                                    <div className="mb-4 p-3 bg-gradient-to-br from-accent-indigo/20 to-accent-purple/20 rounded-lg w-fit group-hover:from-accent-indigo/30 group-hover:to-accent-purple/30 transition-colors">
                                        <service.icon className="h-6 w-6 mystic-text-gradient" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                                        {service.title}
                                    </h3>
                                    <p className="text-text-muted">
                                        {service.description}
                                    </p>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Design Principles */}
            <section className="py-20 px-4 bg-glass-bg/20">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        {...fadeInUp}
                    >
                        <h2 className="text-4xl font-bold mb-4 mystic-text-gradient">
                            Принципи нашого дизайну
                        </h2>
                        <p className="text-text-muted text-lg">
                            На чому базуються наші дизайн-рішення
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {principles.map((principle, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                <Card className="mystic-glass p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                                    <div className="inline-block p-3 bg-gradient-to-br from-accent-indigo/20 to-accent-purple/20 rounded-lg mb-4">
                                        <principle.icon className="h-8 w-8 mystic-text-gradient" />
                                    </div>
                                    <h3 className="font-semibold mb-2 text-lg text-foreground">
                                        {principle.title}
                                    </h3>
                                    <p className="text-text-muted text-sm">
                                        {principle.description}
                                    </p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tools */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        {...fadeInUp}
                    >
                        <h2 className="text-4xl font-bold mb-4 mystic-text-gradient">
                            Інструменти
                        </h2>
                        <p className="text-text-muted text-lg">
                            Використовуємо найкращі дизайн-інструменти індустрії
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {tools.map((tool, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                <Card className="mystic-glass p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 mystic-glow">
                                    <tool.icon className="h-8 w-8 mx-auto mb-3 mystic-text-gradient" />
                                    <p className="font-medium text-foreground">{tool.name}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-20 px-4 bg-glass-bg/20">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        {...fadeInUp}
                    >
                        <h2 className="text-4xl font-bold mb-4 mystic-text-gradient">
                            Наш процес
                        </h2>
                        <p className="text-text-muted text-lg">
                            Структурований підхід до створення ідеального дизайну
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {process.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="mystic-glass p-6 h-full hover:border-accent-purple/50 transition-all mystic-glow">
                                    <div className="text-5xl font-bold mb-4 mystic-text-gradient opacity-30">
                                        {item.step}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                                        {item.title}
                                    </h3>
                                    <p className="text-text-muted">
                                        {item.description}
                                    </p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <Card className="mystic-glass p-12 text-center mystic-glow">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 mystic-text-gradient">
                                Готові створити вражаючий дизайн?
                            </h2>
                            <p className="text-text-muted text-lg mb-8">
                                Отримайте безкоштовну консультацію та оцінку вашого проекту
                            </p>
                            <Button size="lg" className="group btn-mystic mystic-glow">
                                <CheckCircle2 className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                                Обговорити проект
                            </Button>
                        </motion.div>
                    </Card>
                </div>
            </section>
        </div>
    );
}