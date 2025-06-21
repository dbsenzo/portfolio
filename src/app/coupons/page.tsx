"use client"

import Image from "next/image";
import { useState } from "react";

export default function CouponCalinPage() {
    const [isAnimating, setIsAnimating] = useState(false);
    const [calinsCount, setCalinsCount] = useState(0);

    const handleClick = () => {
        // Incrémenter le compteur
        setCalinsCount(prev => prev + 1);
        console.log(calinsCount);

        // Reset animation after 1 second
        setTimeout(() => setIsAnimating(false), 1000);
    };

    const resetCounter = () => {
        setCalinsCount(0);
    };

    return (
        <div className="fixed inset-0 w-full h-full overflow-auto bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
            <div className="flex flex-col items-center justify-center min-h-full p-8">
                <div className="text-center max-w-lg mx-auto">
                    {/* Titre */}
                    <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 animate-pulse">
                        Coupon Câlin 🤗
                    </h1>

                    {/* Compteur de câlins */}
                    <div className="mb-6 p-4 bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-lg backdrop-blur-sm">
                        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            Câlins disponibles
                        </h2>
                        <div className="flex items-center justify-center gap-2">
                            <span className="text-4xl font-bold text-pink-600 dark:text-pink-400">
                                {calinsCount}
                            </span>
                            <span className="text-2xl">🤗</span>
                        </div>
                        {calinsCount > 0 && (
                            <button
                                onClick={resetCounter}
                                className="mt-2 px-3 py-1 text-xs text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 underline transition-colors"
                            >
                                Réinitialiser
                            </button>
                        )}
                    </div>

                    {/* Image avec animation */}
                    <div
                        className={`relative mb-8 transform transition-all duration-500 ${isAnimating
                            ? 'scale-110 rotate-3 shadow-2xl shadow-pink-300/50'
                            : 'hover:scale-105 hover:shadow-lg'
                            }`}
                    >
                        <div className="relative w-80 h-60 mx-auto rounded-2xl overflow-hidden shadow-lg bg-white">
                            <Image
                                src="/free-hug.jpg"
                                alt="Free Hug"
                                fill
                                className="object-contain p-2"
                                priority
                            />
                        </div>

                        {/* Effet de cœurs qui apparaissent lors de l'animation */}
                        {isAnimating && (
                            <div className="absolute inset-0 pointer-events-none">
                                <div className="absolute top-4 left-4 text-2xl animate-bounce delay-100">💖</div>
                                <div className="absolute top-8 right-8 text-xl animate-bounce delay-200">💝</div>
                                <div className="absolute bottom-12 left-8 text-3xl animate-bounce delay-300">🥰</div>
                                <div className="absolute bottom-4 right-4 text-2xl animate-bounce delay-400">✨</div>
                                <div className="absolute top-1/2 left-2 text-xl animate-bounce delay-500">❤️</div>
                                <div className="absolute top-1/3 right-2 text-2xl animate-bounce delay-600">🤗</div>
                            </div>
                        )}
                    </div>

                    {/* Bouton avec animation */}
                    <div className="flex justify-center mb-6">
                        <button
                            onClick={handleClick}
                            disabled={isAnimating}
                            className={`
                                px-8 py-4 text-xl font-semibold text-white 
                                bg-gradient-to-r from-pink-500 to-purple-600 
                                rounded-full shadow-lg transform transition-all duration-300
                                hover:from-pink-600 hover:to-purple-700 hover:scale-105 hover:shadow-xl
                                active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed
                                focus:outline-none focus:ring-4 focus:ring-pink-300
                                ${isAnimating ? 'animate-pulse' : ''}
                            `}
                        >
                            {isAnimating ? '🤗 Câlin en cours...' : '🎫 Réclamer un Câlin'}
                        </button>
                    </div>

                    {/* Message qui apparaît après l'animation */}
                    {isAnimating && (
                        <div className="mt-4 text-lg text-gray-600 dark:text-gray-300 animate-bounce">
                            <p className="font-medium text-pink-600 dark:text-pink-400">
                                ✨ Câlin virtuel #{calinsCount} envoyé ! ✨
                            </p>
                            <p className="text-sm mt-2">
                                Rechargez vos batteries avec de l'amour ! 💕
                            </p>
                        </div>
                    )}

                    {/* Messages motivants selon le nombre de câlins */}
                    {calinsCount > 0 && !isAnimating && (
                        <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                            {calinsCount === 1 && "🌟 Premier câlin ! Vous voilà plus heureux !"}
                            {calinsCount >= 2 && calinsCount <= 5 && "💖 Vous collectionnez les câlins ! Continuez !"}
                            {calinsCount >= 6 && calinsCount <= 10 && "🎉 Expert en câlins ! Vous rayonnez de bonheur !"}
                            {calinsCount > 10 && "👑 Maître des câlins ! Vous répandez l'amour partout !"}
                        </div>
                    )}

                    {/* Description */}
                    <p className="mt-6 text-gray-600 dark:text-gray-400 text-sm max-w-xs mx-auto">
                        Cliquez sur le bouton pour recevoir un câlin virtuel et augmenter votre stock de bonheur ! 🌟
                    </p>
                </div>
            </div>
        </div>
    );
} 