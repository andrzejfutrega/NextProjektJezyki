export default function AboutPage() {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-6 text-center">O nas</h1>
            <div className="prose max-w-none">
                <p className="text-lg mb-4">
                    Witamy na naszym blogu! Jesteśmy platformą, która umożliwia dzielenie się wiedzą
                    i doświadczeniami z różnych dziedzin życia.
                </p>
                <p className="text-lg mb-4">
                    Nasz blog obejmuje różnorodne kategorie tematyczne:
                </p>
                <ul className="list-disc pl-6 mb-6">
                    <li className="mb-2">
                        <span className="font-semibold">Świat</span> - aktualności i ciekawostki ze świata
                    </li>
                    <li className="mb-2">
                        <span className="font-semibold">Sport</span> - wydarzenia sportowe i porady treningowe
                    </li>
                    <li className="mb-2">
                        <span className="font-semibold">Dieta</span> - zdrowe odżywianie i porady dietetyczne
                    </li>
                    <li className="mb-2">
                        <span className="font-semibold">Programowanie</span> - tutoriale i artykuły techniczne
                    </li>
                </ul>
                <p className="text-lg mb-8">
                    Zapraszamy do czytania i dzielenia się własnymi treściami!
                </p>

                <div className="mt-12 border-t pt-8">
                    <h2 className="text-2xl font-bold mb-6 text-center">Kontakt</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold mb-4">Dane kontaktowe</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span>kontakt@blogapp.pl</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span>+48 123 456 789</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span>ul. Blogowa 123, 00-001 Warszawa</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold mb-4">Godziny pracy</h3>
                            <ul className="space-y-2">
                                <li className="flex justify-between">
                                    <span>Poniedziałek - Piątek:</span>
                                    <span className="font-medium">9:00 - 17:00</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Sobota:</span>
                                    <span className="font-medium">10:00 - 14:00</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Niedziela:</span>
                                    <span className="font-medium">Zamknięte</span>
                                </li>
                            </ul>
                            <div className="mt-4 pt-4 border-t">
                                <p className="text-sm text-gray-600">
                                    W przypadku pilnych spraw prosimy o kontakt mailowy - odpowiadamy 24/7.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 