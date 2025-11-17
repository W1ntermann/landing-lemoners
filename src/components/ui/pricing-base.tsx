import Link from 'next/link'
import { Button } from '@/components/ui/button-second'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Check } from 'lucide-react'

export default function Pricing() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mx-auto max-w-2xl space-y-6 text-center">
                    <h1 className="text-center text-4xl font-semibold lg:text-5xl">Наші ціни</h1>
                    <p>Оберіть пакет, який найкраще відповідає потребам вашого бізнесу</p>
                </div>

                <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-3">
                    {/* Starter Plan */}
                    <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="font-medium">Початковий</CardTitle>
                            <span className="my-3 block text-2xl font-semibold">$350</span>
                            <CardDescription className="text-sm">
                                Простий односторінковий веб-сайт з чистим дизайном
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />

                            <ul className="list-outside space-y-3 text-sm">
                                {[
                                    'До 8 секцій',
                                    'Оптимізовано для мобільних пристроїв',
                                    'Лендінг пейдж',
                                    'Базові анімації'
                                ].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2">
                                        <Check className="size-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>

                        <CardFooter className="mt-auto">
                            <Button
                                asChild
                                variant="outline"
                                className="w-full">
                                <Link href="">Замовити</Link>
                            </Button>
                        </CardFooter>
                    </Card>

                    {/* Pro Plan */}
                    <Card className="relative">
                        <span className="bg-linear-to-br/increasing absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full from-purple-400 to-amber-300 px-3 py-1 text-xs font-medium text-amber-950 ring-1 ring-inset ring-white/20 ring-offset-1 ring-offset-gray-950/5">
                            Популярний
                        </span>

                        <div className="flex flex-col">
                            <CardHeader>
                                <CardTitle className="font-medium">Професійний</CardTitle>
                                <span className="my-3 block text-2xl font-semibold">$650</span>
                                <CardDescription className="text-sm">
                                    Багатосторінковий веб-сайт з анімаціями та інтерактивом
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="space-y-4">
                                <hr className="border-dashed" />
                                <ul className="list-outside space-y-3 text-sm">
                                    {[
                                        'До 5 унікально розроблених сторінок',
                                        'Оптимізовано для мобільних пристроїв',
                                        'Багатосекційний веб-сайт',
                                        'Налаштування CMS',
                                        'Розширені анімації та інтерактив',
                                        'До 1 інтеграції API'
                                    ].map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center gap-2">
                                            <Check className="size-3" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>

                            <CardFooter>
                                <Button
                                    asChild
                                    className="w-full">
                                    <Link href="">Замовити</Link>
                                </Button>
                            </CardFooter>
                        </div>
                    </Card>

                    {/* Custom Plan */}
                    <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="font-medium">Користувацький</CardTitle>
                            <span className="my-3 block text-2xl font-semibold">від $1,000</span>
                            <CardDescription className="text-sm">
                                Розширений веб-сайт з розширеними цілями
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />

                            <ul className="list-outside space-y-3 text-sm">
                                {[
                                    'До 10 унікально розроблених секцій',
                                    'Оптимізовано для мобільних пристроїв',
                                    'Багатосекційний веб-сайт',
                                    'Налаштування CMS',
                                    'Розширені анімації та інтерактив',
                                    'До 3 інтеграцій API'
                                ].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2">
                                        <Check className="size-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>

                        <CardFooter className="mt-auto">
                            <Button
                                asChild
                                variant="outline"
                                className="w-full">
                                <Link href="">Замовити</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    )
}