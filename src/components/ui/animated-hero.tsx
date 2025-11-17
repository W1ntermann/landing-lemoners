'use client'
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
    const [titleNumber, setTitleNumber] = useState(0);
    const titles = useMemo(
        () => ["ефективні", "конвертуючі", "продаючі", "сучасні", "унікальні"],
        []
    );

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (titleNumber === titles.length - 1) {
                setTitleNumber(0);
            } else {
                setTitleNumber(titleNumber + 1);
            }
        }, 2000);
        return () => clearTimeout(timeoutId);
    }, [titleNumber, titles]);

    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="w-full relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [90, 0, 90],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-500/20 to-transparent rounded-full blur-3xl"
                />
            </div>

            <div className="container mx-auto relative z-10">
                <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
                    {/* Premium badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
                    >
                        <Sparkles className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-gray-300">Розробка преміум-класу</span>
                    </motion.div>

                    {/* Main heading */}
                    <div className="flex gap-4 flex-col">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl md:text-7xl lg:text-8xl max-w-6xl tracking-tighter text-center font-bold"
                        >
                            <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                                Створюємо сайти,
                            </span>
                            <br />
                            <span className="text-white">які </span>
                            <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                                &nbsp;
                                {titles.map((title, index) => (
                                    <motion.span
                                        key={index}
                                        className="absolute font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
                                        initial={{ opacity: 0, y: "-100" }}
                                        transition={{ type: "spring", stiffness: 50 }}
                                        animate={
                                            titleNumber === index
                                                ? {
                                                    y: 0,
                                                    opacity: 1,
                                                }
                                                : {
                                                    y: titleNumber > index ? -150 : 150,
                                                    opacity: 0,
                                                }
                                        }
                                    >
                                        {title}
                                    </motion.span>
                                ))}
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-lg md:text-2xl leading-relaxed tracking-tight text-gray-400 max-w-3xl text-center"
                        >
                            Сучасні веб-рішення для вашого бізнесу.
                            Від ідеї до запуску за 2 тижні.
                        </motion.p>
                    </div>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Button
                            size="lg"
                            onClick={scrollToContact}
                            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-2xl shadow-purple-500/30 transition-all duration-300 hover:shadow-purple-500/50 hover:scale-105 gap-3"
                        >
                            Почати проєкт
                            <ArrowRight className="w-5 h-5" />
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                            className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full backdrop-blur-sm gap-3"
                        >
                            Переглянути роботи
                            <PhoneCall className="w-5 h-5" />
                        </Button>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
                    >
                        {[
                            { number: "50+", label: "Проєктів" },
                            { number: "100%", label: "Задоволених клієнтів" },
                            { number: "2 тижні", label: "Середній термін" },
                            { number: "24/7", label: "Підтримка" }
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-sm text-gray-400">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2 backdrop-blur-sm">
                    <div className="w-1 h-2 bg-white/50 rounded-full" />
                </div>
            </motion.div>
        </div>
    );
}

export { Hero };