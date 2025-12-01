'use client'

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    TrendingUp,
    Target,
    BarChart3,
    Mail,
    Share2,
    Search,
    Megaphone,
    Users,
    LineChart,
    CheckCircle2,
    Sparkles
} from "lucide-react";


export default function MarketingPage() {
    const services = [
        {
            icon: Target,
            title: "Стратегічний маркетинг",
            description: "Розробка комплексної маркетингової стратегії для досягнення бізнес-цілей"
        },
        {
            icon: Search,
            title: "SEO оптимізація",
            description: "Просування сайту в пошукових системах та збільшення органічного трафіку"
        },
        {
            icon: Megaphone,
            title: "SMM просування",
            description: "Ведення соціальних мереж та створення ефективного контенту"
        },
        {
            icon: Mail,
            title: "Email маркетинг",
            description: "Створення та автоматизація email-кампаній для утримання клієнтів"
        },
        {
            icon: BarChart3,
            title: "Контекстна реклама",
            description: "Налаштування та оптимізація рекламних кампаній Google Ads та Facebook Ads"
        },
        {
            icon: LineChart,
            title: "Аналітика та звіти",
            description: "Глибокий аналіз даних та регулярні звіти про ефективність маркетингу"
        }
    ];

    const channels = [
        { name: "Google Ads", icon: Search },
        { name: "Facebook", icon: Share2 },
        { name: "Instagram", icon: Share2 },
        { name: "LinkedIn", icon: Users },
        { name: "Email", icon: Mail },
        { name: "SEO", icon: TrendingUp }
    ];

    const process = [
        {
            step: "01",
            title: "Аудит та аналіз",
            description: "Детальний аналіз поточної ситуації та конкурентів"
        },
        {
            step: "02",
            title: "Розробка стратегії",
            description: "Створення маркетингової стратегії та плану дій"
        },
        {
            step: "03",
            title: "Реалізація",
            description: "Запуск кампаній та створення контенту"
        },
        {
            step: "04",
            title: "Оптимізація",
            description: "Моніторинг результатів та постійне покращення"
        }
    ];

    const metrics = [
        {
            value: "+45%",
            label: "Збільшення конверсії",
            description: "Середній приріст конверсії у наших клієнтів"
        },
        {
            value: "-30%",
            label: "Зниження вартості залучення",
            description: "Ефективне використання рекламного бюджету"
        },
        {
            value: "24/7",
            label: "Моніторинг результатів",
            description: "Постійний контроль та оптимізація кампаній"
        },
        {
            value: "+60%",
            label: "Приріст трафіку",
            description: "Збільшення якісного трафіку на сайти клієнтів"
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
                <div className="absolute top-1/4 left-10 w-64 h-64 bg-accent-rose/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-accent-purple/10 rounded-full blur-3xl" />

                <motion.div
                    className="max-w-6xl mx-auto relative z-10"
                    initial="initial"
                    animate="animate"
                    variants={staggerContainer}
                >
                    <motion.div variants={fadeInUp}>
                        <Badge className="mb-4 text-sm bg-glass-bg backdrop-blur-sm border-glass-border mystic-glow">
                            Маркетингові послуги
                        </Badge>
                    </motion.div>

                    <motion.h1
                        variants={fadeInUp}
                        className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
                    >
                        <span className="mystic-text-gradient">Маркетинг, що</span>
                        <br />
                        перетворює трафік у клієнтів
                    </motion.h1>

                    <motion.p
                        variants={fadeInUp}
                        className="text-xl text-text-muted mb-8 max-w-2xl"
                    >
                        Залучаємо клієнтів, збільшуємо продажі та будуємо впізнаваний бренд за допомогою сучасних маркетингових інструментів
                    </motion.p>

                    <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                        <Button size="lg" className="group btn-mystic mystic-glow">
                            <Sparkles className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12" />
                            Отримати консультацію
                        </Button>
                        <Button size="lg" variant="outline" className="border-glass-border bg-glass-bg backdrop-blur-sm hover:bg-glass-bg/50">
                            Наші кейси
                        </Button>
                    </motion.div>
                </motion.div>
            </section>

            {/* Metrics Section */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        {metrics.map((metric, index) => (
                            <motion.div key={index} variants={fadeInUp}>
                                <Card className="mystic-glass p-6 text-center hover:shadow-lg transition-all duration-300 mystic-glow hover:scale-[1.02]">
                                    <div className="text-4xl font-bold mb-2 mystic-text-gradient">
                                        {metric.value}
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                                        {metric.label}
                                    </h3>
                                    <p className="text-sm text-text-muted">
                                        {metric.description}
                                    </p>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 px-4 bg-glass-bg/20">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        {...fadeInUp}
                    >
                        <h2 className="text-4xl font-bold mb-4 mystic-text-gradient">
                            Наші послуги
                        </h2>
                        <p className="text-text-muted text-lg max-w-2xl mx-auto">
                            Комплексний підхід до просування вашого бізнесу в digital-середовищі
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

            {/* Marketing Channels */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        {...fadeInUp}
                    >
                        <h2 className="text-4xl font-bold mb-4 mystic-text-gradient">
                            Канали просування
                        </h2>
                        <p className="text-text-muted text-lg">
                            Використовуємо найефективніші інструменти для вашого бізнесу
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {channels.map((channel, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                            >
                                <Card className="mystic-glass p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 mystic-glow floating-mystic">
                                    <channel.icon className="h-8 w-8 mx-auto mb-3 mystic-text-gradient" />
                                    <p className="font-medium text-foreground">{channel.name}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
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
                            Як ми працюємо
                        </h2>
                        <p className="text-text-muted text-lg">
                            Перевірений процес для досягнення максимальних результатів
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {process.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                            >
                                <Card className="mystic-glass p-6 h-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02] mystic-glow">
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
                    </motion.div>
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
                                Готові розпочати?
                            </h2>
                            <p className="text-text-muted text-lg mb-8">
                                Отримайте безкоштовну консультацію та аудит вашого маркетингу
                            </p>
                            <Button size="lg" className="group btn-mystic mystic-glow">
                                <CheckCircle2 className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                                Зв&#39;язатися з нами
                            </Button>
                        </motion.div>
                    </Card>
                </div>
            </section>
        </div>
    )
}