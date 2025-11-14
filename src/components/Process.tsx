'use client'

import React from "react";
import { Lightbulb, PenTool, Code2, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
    {
        icon: Lightbulb,
        number: "01",
        title: "Аналіз і планування",
        description: "Вивчаємо ваші потреби, цілі та аудиторію. Створюємо детальний план проєкту"
    },
    {
        icon: PenTool,
        number: "02",
        title: "Дизайн",
        description: "Розробляємо унікальний дизайн, який відображає ідентичність вашого бренду"
    },
    {
        icon: Code2,
        number: "03",
        title: "Розробка",
        description: "Втілюємо дизайн у життя з використанням найсучасніших технологій"
    },
    {
        icon: Rocket,
        number: "04",
        title: "Запуск і підтримка",
        description: "Запускаємо проєкт і надаємо постійну підтримку для безперебійної роботи"
    }
];

export default function ProcessSection() {
    return (
        <section className="py-32 px-6 relative">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
                <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Як ми працюємо
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Прозорий процес від ідеї до результату
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative"
                        >
                            {/* Connector line */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-purple-500/50 to-transparent -z-10" />
                            )}

                            <div className="relative">
                                <div className="absolute -top-4 -left-4 text-8xl font-bold text-white/5">
                                    {step.number}
                                </div>

                                <div className="relative bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-8 hover:from-white/15 hover:to-white/10 transition-all duration-300">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mb-6">
                                        <step.icon className="w-7 h-7 text-white" />
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-4">
                                        {step.title}
                                    </h3>

                                    <p className="text-gray-400 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}