'use client'

import React from "react";
import { Code, Palette, Rocket, Zap, Shield, BarChart } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const services = [
    {
        icon: Code,
        title: "Веб-розробка",
        description: "Створюємо швидкі, безпечні та масштабовані веб-додатки з використанням сучасних технологій",
        color: "from-purple-500 to-pink-500"
    },
    {
        icon: Palette,
        title: "UI/UX Дизайн",
        description: "Розробляємо інтуїтивні інтерфейси, які захоплюють користувачів з першої секунди",
        color: "from-blue-500 to-cyan-500"
    },
    {
        icon: Rocket,
        title: "Лендінг пейджі",
        description: "Продаючі посадкові сторінки з високою конверсією для вашого бізнесу",
        color: "from-orange-500 to-red-500"
    },
    {
        icon: Zap,
        title: "Оптимізація",
        description: "Покращуємо швидкість завантаження та SEO-показники ваших сайтів",
        color: "from-yellow-500 to-orange-500"
    },
    {
        icon: Shield,
        title: "Безпека",
        description: "Захищаємо ваші дані та забезпечуємо стабільну роботу 24/7",
        color: "from-green-500 to-emerald-500"
    },
    {
        icon: BarChart,
        title: "Аналітика",
        description: "Інтегруємо системи аналітики для відстеження ефективності",
        color: "from-indigo-500 to-purple-500"
    }
];

export default function ServicesSection() {
    return (
        <section className="py-32 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Наші послуги
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Повний цикл розробки від ідеї до запуску
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="p-8 bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <service.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {service.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}