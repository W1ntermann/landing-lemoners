'use client'

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const projects = [
    {
        title: "E-commerce платформа",
        category: "Інтернет-магазин",
        description: "Сучасний магазин з інтеграцією платіжних систем",
        image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80",
        gradient: "from-purple-600 to-pink-600"
    },
    {
        title: "Корпоративний сайт",
        category: "Бізнес",
        description: "Презентаційний сайт для IT-компанії",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        gradient: "from-blue-600 to-cyan-600"
    },
    {
        title: "Освітня платформа",
        category: "EdTech",
        description: "Інтерактивна платформа для онлайн-навчання",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
        gradient: "from-orange-600 to-red-600"
    },
    {
        title: "Мобільний додаток",
        category: "Mobile",
        description: "Progressive Web App для доставки їжі",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
        gradient: "from-green-600 to-emerald-600"
    },
    {
        title: "SaaS платформа",
        category: "Software",
        description: "CRM-система для управління клієнтами",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        gradient: "from-indigo-600 to-purple-600"
    },
    {
        title: "Лендінг для стартапу",
        category: "Landing",
        description: "Конверсійна посадкова сторінка",
        image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80",
        gradient: "from-yellow-600 to-orange-600"
    }
];

export default function PortfolioSection() {
    return (
        <section id="portfolio" className="py-32 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Наші роботи
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Проєкти, якими ми пишаємось
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="group relative overflow-hidden bg-white/5 border-white/10 backdrop-blur-sm hover:scale-105 transition-all duration-500 cursor-pointer">
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-70 transition-opacity duration-500`} />

                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                                            <ExternalLink className="w-6 h-6 text-gray-900" />
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="inline-block px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-medium mb-3">
                                        {project.category}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400">
                                        {project.description}
                                    </p>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}