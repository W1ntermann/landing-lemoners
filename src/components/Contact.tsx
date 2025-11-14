'use client'

import React, { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Send, Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

export default function ContactSection() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Імітація запиту
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Ваша реальна логіка тут
            // await base44.integrations.Core.SendEmail({...});

            setIsSuccess(true);
            setFormData({ name: "", email: "", phone: "", message: "" });
            setTimeout(() => setIsSuccess(false), 5000);
        } catch (error) {
            console.error("Помилка при відправці:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const contactInfo = [
        {
            icon: Mail,
            title: "Email",
            content: "hello@startup.ua",
            href: "mailto:hello@startup.ua",
            gradient: "from-purple-600 to-blue-600"
        },
        {
            icon: Phone,
            title: "Телефон",
            content: "+380 50 123 45 67",
            href: "tel:+380501234567",
            gradient: "from-blue-600 to-cyan-600"
        },
        {
            icon: MapPin,
            title: "Адреса",
            content: "м. Київ, вул. Хрещатик, 1",
            gradient: "from-orange-600 to-red-600"
        }
    ];

    return (
        <section id="contact" className="py-32 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Зв&#39;яжіться з нами
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Готові почати ваш проєкт? Напишіть нам!
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Форма */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Card className="p-8 bg-white/5 border-white/10 backdrop-blur-sm">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-4">
                                    <Input
                                        name="name"
                                        label="Ваше ім'я"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Іван Петренко"
                                    />

                                    <Input
                                        name="email"
                                        type="email"
                                        label="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="ivan@example.com"
                                    />

                                    <Input
                                        name="phone"
                                        type="tel"
                                        label="Телефон"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+380 XX XXX XX XX"
                                    />

                                    <Textarea
                                        name="message"
                                        label="Ваше повідомлення"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        placeholder="Розкажіть про ваш проєкт..."
                                        rows={5}
                                        resize="vertical"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting || isSuccess}
                                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-6 text-lg rounded-xl shadow-xl shadow-purple-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSuccess ? (
                                        <>
                                            <CheckCircle className="mr-2 w-5 h-5" />
                                            Повідомлення відправлено!
                                        </>
                                    ) : isSubmitting ? (
                                        "Відправляємо..."
                                    ) : (
                                        <>
                                            <Send className="mr-2 w-5 h-5" />
                                            Відправити заявку
                                        </>
                                    )}
                                </Button>
                            </form>
                        </Card>
                    </motion.div>

                    {/* Контактна інформація */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-8">
                                Контактна інформація
                            </h3>

                            <div className="space-y-6">
                                {contactInfo.map((item, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0`}>
                                            <item.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                                            {item.href ? (
                                                <a
                                                    href={item.href}
                                                    className="text-gray-400 hover:text-purple-400 transition-colors"
                                                >
                                                    {item.content}
                                                </a>
                                            ) : (
                                                <p className="text-gray-400">{item.content}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Card className="p-8 bg-gradient-to-br from-purple-600/20 to-blue-600/20 border-white/20 backdrop-blur-sm">
                            <h4 className="text-2xl font-bold text-white mb-4">
                                Готові почати?
                            </h4>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                Отримайте безкоштовну консультацію та оцінку вартості вашого проєкту вже сьогодні!
                            </p>
                            <div className="flex items-center gap-3 text-sm text-gray-300">
                                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                <span>Відповідь протягом 2 годин</span>
                            </div>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}