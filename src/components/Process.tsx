'use client'

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
    {
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        number: "01",
        title: "Аналіз і планування",
        description: "Вивчаємо ваші потреби, цілі та аудиторію. Створюємо детальний план проєкту"
    },
    {
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        number: "02",
        title: "Дизайн",
        description: "Розробляємо унікальний дизайн, який відображає ідентичність вашого бренду"
    },
    {
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        number: "03",
        title: "Розробка",
        description: "Втілюємо дизайн у життя з використанням найсучасніших технологій"
    },
    {
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
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
                            className="relative group"
                        >
                            {/* Connector line */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-32 left-full w-full h-0.5 bg-gradient-to-r from-purple-500/50 to-transparent -z-10" />
                            )}

                            <div className="relative">
                                <div className="absolute -top-4 -left-4 text-8xl font-bold text-white/5 z-0">
                                    {step.number}
                                </div>

                                <div className="relative bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-6 hover:from-white/15 hover:to-white/10 transition-all duration-300 overflow-hidden group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-purple-500/20">
                                    {/* Image container */}
                                    <div className="w-full h-32 rounded-xl mb-6 overflow-hidden relative">
                                        <Image
                                            src={step.image}
                                            alt={step.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-4 relative z-10">
                                        {step.title}
                                    </h3>

                                    <p className="text-gray-400 leading-relaxed relative z-10">
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