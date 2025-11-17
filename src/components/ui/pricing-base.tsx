'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button-second'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Check } from 'lucide-react'
import { motion, cubicBezier } from 'framer-motion'

export default function Pricing() {
    const customEase = cubicBezier(0.25, 0.1, 0.25, 1);

    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: customEase
            }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const pricingPlans = [
        {
            title: 'Початковий',
            price: '$350',
            description: 'Простий односторінковий веб-сайт з чистим дизайном',
            features: [
                'До 8 секцій',
                'Оптимізовано для мобільних пристроїв',
                'Лендінг пейдж',
                'Базові анімації'
            ],
            variant: 'outline' as const,
            popular: false
        },
        {
            title: 'Професійний',
            price: '$650',
            description: 'Багатосторінковий веб-сайт з анімаціями та інтерактивом',
            features: [
                'До 5 унікально розроблених сторінок',
                'Оптимізовано для мобільних пристроїв',
                'Багатосекційний веб-сайт',
                'Налаштування CMS',
                'Розширені анімації та інтерактив',
                'До 1 інтеграції API'
            ],
            variant: 'default' as const,
            popular: true
        },
        {
            title: 'Користувацький',
            price: 'від $1,000',
            description: 'Розширений веб-сайт з розширеними цілями',
            features: [
                'До 10 унікально розроблених секцій',
                'Оптимізовано для мобільних пристроїв',
                'Багатосекційний веб-сайт',
                'Налаштування CMS',
                'Розширені анімації та інтерактив',
                'До 3 інтеграцій API'
            ],
            variant: 'outline' as const,
            popular: false
        }
    ];

    return (
        <section className="relative py-16 md:py-32 bg-gradient-to-br from-black via-indigo-950/20 to-black text-white overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                {/* Animated gradient mesh */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.08] via-purple-500/[0.05] to-rose-500/[0.08]"
                    animate={{
                        backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{
                        backgroundSize: '400% 400%'
                    }}
                />

                {/* Moving light orbs */}
                <motion.div
                    className="absolute top-1/4 left-1/5 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/5 w-96 h-96 bg-rose-400/10 rounded-full blur-3xl"
                    animate={{
                        x: [0, -100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 22,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Floating particles */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white/20 rounded-full"
                        style={{
                            left: `${10 + (i * 12)}%`,
                            top: `${20 + (i * 8)}%`,
                        }}
                        animate={{
                            y: [0, -40, 0],
                            opacity: [0.2, 0.8, 0.2],
                        }}
                        transition={{
                            duration: 3 + i * 0.3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.2,
                        }}
                    />
                ))}
            </div>

            <motion.div
                className="relative z-10 mx-auto max-w-6xl px-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {/* Header */}
                <motion.div className="mx-auto max-w-2xl space-y-6 text-center mb-16">
                    <motion.h1
                        className="text-center text-4xl font-semibold lg:text-6xl tracking-tight"
                        variants={fadeInUp}
                    >
                        <span className="text-white">Наші </span>
                        <motion.span
                            className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-300 to-rose-300"
                            animate={{
                                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            style={{
                                backgroundSize: '200% 200%'
                            }}
                        >
                            ціни
                        </motion.span>
                    </motion.h1>
                    <motion.p
                        className="text-lg text-white/60"
                        variants={fadeInUp}
                    >
                        Оберіть пакет, який найкраще відповідає потребам вашого бізнесу
                    </motion.p>
                </motion.div>

                {/* Pricing Cards */}
                <motion.div
                    className="grid gap-8 md:grid-cols-3"
                    variants={staggerContainer}
                >
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className={`relative h-full rounded-3xl border transition-all duration-300 overflow-hidden group ${
                                plan.popular
                                    ? 'border-transparent bg-gradient-to-br from-white/[0.08] to-white/[0.02]'
                                    : 'border-white/[0.15] bg-white/[0.03]'
                            }`}>
                                {/* Glassmorphism effect */}
                                <div className="absolute inset-0 backdrop-blur-xl" />

                                {/* Animated background gradient */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.08] via-purple-500/[0.05] to-rose-500/[0.08] rounded-3xl opacity-0 group-hover:opacity-100"
                                    animate={{
                                        backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                                    }}
                                    transition={{
                                        duration: 15,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                    style={{
                                        backgroundSize: '300% 300%'
                                    }}
                                />

                                {/* Popular badge */}
                                {plan.popular && (
                                    <motion.div
                                        className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                                        initial={{ opacity: 0, y: -20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <span className="px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-indigo-400 to-rose-400 text-white ring-1 ring-white/20">
                                            Популярний
                                        </span>
                                    </motion.div>
                                )}

                                {/* Glow effect on popular */}
                                {plan.popular && (
                                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500/20 to-rose-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10" />
                                )}

                                <div className="relative z-20 flex flex-col h-full p-8">
                                    {/* Header */}
                                    <div className="mb-8">
                                        <motion.h3
                                            className={`text-2xl font-bold mb-4 ${
                                                plan.popular
                                                    ? 'bg-gradient-to-r from-indigo-300 to-rose-300 bg-clip-text text-transparent'
                                                    : 'text-white'
                                            }`}
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            {plan.title}
                                        </motion.h3>

                                        <motion.div
                                            className="mb-4"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.25 }}
                                        >
                                            <span className="text-4xl font-bold text-white">
                                                {plan.price}
                                            </span>
                                        </motion.div>

                                        <p className="text-sm text-white/60">
                                            {plan.description}
                                        </p>
                                    </div>

                                    {/* Divider */}
                                    <motion.div
                                        className="my-6 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        transition={{ delay: 0.3 }}
                                    />

                                    {/* Features */}
                                    <ul className="space-y-4 mb-8 flex-1">
                                        {plan.features.map((feature, featureIndex) => (
                                            <motion.li
                                                key={featureIndex}
                                                className="flex items-start gap-3 text-sm text-white/80"
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.35 + featureIndex * 0.05 }}
                                            >
                                                <motion.div
                                                    whileHover={{ scale: 1.2, rotate: 360 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <Check className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                                                </motion.div>
                                                <span>{feature}</span>
                                            </motion.li>
                                        ))}
                                    </ul>

                                    {/* Button */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <Button
                                                asChild
                                                className={`w-full py-6 text-base font-semibold rounded-xl transition-all ${
                                                    plan.popular
                                                        ? 'bg-gradient-to-r from-indigo-500 to-rose-500 text-white hover:shadow-lg hover:shadow-indigo-500/50'
                                                        : 'bg-white/[0.08] text-white border border-white/[0.2] hover:bg-white/[0.12] hover:border-white/[0.3]'
                                                }`}
                                            >
                                                <Link href="">Замовити</Link>
                                            </Button>
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}