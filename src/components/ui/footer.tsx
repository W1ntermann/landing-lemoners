import React from "react";
import { Code, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                                <Code className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-2xl font-bold text-white">Lemoners</span>
                        </div>
                        <p className="text-gray-400 leading-relaxed max-w-md">
                            Ми створюємо сучасні веб-рішення, які допомагають бізнесу рости та розвиватися в цифровому світі.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Послуги</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                                    Веб-розробка
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                                    UI/UX Дизайн
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                                    Лендінги
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                                    Підтримка
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Компанія</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                                    Про нас
                                </a>
                            </li>
                            <li>
                                <a href="#portfolio" className="text-gray-400 hover:text-purple-400 transition-colors">
                                    Портфоліо
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors">
                                    Контакти
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                                    Блог
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">
                        © 2024 Lemoners. Всі права захищені.
                    </p>

                    <div className="flex items-center gap-4">
                        <a
                            href="#"
                            className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                        >
                            <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                        >
                            <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                        >
                            <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                        >
                            <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}