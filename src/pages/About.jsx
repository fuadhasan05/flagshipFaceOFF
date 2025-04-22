import React from 'react';
import Button from './ui/Button';

const About = () => {
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="mb-10 border-t border-b divide-y">
                    <div className="grid py-8 sm:grid-cols-4">
                        <div className="mb-4 sm:mb-0">
                            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                                <a
                                    href="/"
                                    className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                    aria-label="Category"
                                >
                                    Books
                                </a>
                                <p className="text-gray-600">5 Jan 2020</p>
                            </div>
                        </div>
                        <div className="sm:col-span-3 lg:col-span-2">
                            <div className="mb-3">
                                <a
                                    href="/"
                                    aria-label="Article"
                                    className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                                >
                                    <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                                        Tell them I hate them
                                    </p>
                                </a>
                            </div>
                            <p className="text-gray-700">
                                Well, the way they make shows is, they make one show. That show's
                                called a pilot. Then they show that show to the people who make
                                shows.
                            </p>
                        </div>
                    </div>
                    <div className="grid py-8 sm:grid-cols-4">
                        <div className="mb-4 sm:mb-0">
                            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                                <a
                                    href="/"
                                    className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                    aria-label="Category"
                                >
                                    Inspiration
                                </a>
                                <p className="text-gray-600">15 Sep 2020</p>
                            </div>
                        </div>
                        <div className="sm:col-span-3 lg:col-span-2">
                            <div className="mb-3">
                                <a
                                    href="/"
                                    aria-label="Article"
                                    className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                                >
                                    <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                                        A flower in my green garden
                                    </p>
                                </a>
                            </div>
                            <p className="text-gray-700">
                                Chase ball of string eat plants, meow, and throw up because I ate
                                plants going to catch the red dot today going.
                            </p>
                        </div>
                    </div>
                    <div className="grid py-8 sm:grid-cols-4">
                        <div className="mb-4 sm:mb-0">
                            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                                <a
                                    href="/"
                                    className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                    aria-label="Category"
                                >
                                    Detective
                                </a>
                                <p className="text-gray-600">28 Dec 2020</p>
                            </div>
                        </div>
                        <div className="sm:col-span-3 lg:col-span-2">
                            <div className="mb-3">
                                <a
                                    href="/"
                                    aria-label="Article"
                                    className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                                >
                                    <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                                        We never had the love we deserve
                                    </p>
                                </a>
                            </div>
                            <p className="text-gray-700">
                                Sportacus andrew weatherall goose Refined gentlemen super mario
                                des lynam alpha trion zap.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                <Button label='View More'></Button>
                </div>
            </div>
        </div>
    );
};

export default About;