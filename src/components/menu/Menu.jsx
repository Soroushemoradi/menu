import React, { useEffect, useRef, useState, useMemo } from 'react'
import { motion } from 'framer-motion'

// Menu component supporting multiple categories.
// Props:
// - categories: [{ id, title, items: [{id, title, subtitle, imageUrl}] }]
// - items: backward-compatibility array (treated as single category)
export default function Menu({ categories = [], items = [] }) {
    const cats = useMemo(() => {
        return (categories && categories.length) ? categories : (items && items.length ? [{ id: 'default', title: 'منو', items }] : [])
    }, [categories, items])

    const sectionRefs = useRef({})
    const navRef = useRef(null)
    const [active, setActive] = useState(cats[0]?.id || null)
    const ticking = useRef(false)

    // compute nav offset (distance from top) to align detection
    const getNavOffset = () => {
        // sticky nav height plus some margin
        const navEl = document.querySelector('.sticky-category-nav') || document.querySelector('.fixed-category-nav')
        return navEl ? (navEl.getBoundingClientRect().height + 20) : 110
    }

    // keep active in sync if categories change
    useEffect(() => {
        if (cats && cats.length) setActive((prev) => prev || cats[0].id)
    }, [cats])

    // IntersectionObserver to update active category while scrolling
    useEffect(() => {
        if (!cats || !cats.length) return

        // fallback IntersectionObserver still useful for large screens, keep it
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const id = entry.target.dataset.catid
                    if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
                        setActive(id)
                    }
                })
            },
            { root: null, rootMargin: '0px', threshold: [0.6] }
        )

        Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el))

        // also add scroll handler to find nearest section to the top (accounts for fixed nav)
        const handleScroll = () => {
            if (ticking.current) return
            ticking.current = true
            window.requestAnimationFrame(() => {
                const offset = getNavOffset()
                let closest = null
                let closestDistance = Number.POSITIVE_INFINITY
                Object.entries(sectionRefs.current).forEach(([id, el]) => {
                    if (!el) return
                    const rect = el.getBoundingClientRect()
                    const distance = Math.abs(rect.top - offset)
                    if (distance < closestDistance) {
                        closestDistance = distance
                        closest = id
                    }
                })
                if (closest && closest !== active) setActive(closest)
                ticking.current = false
            })
        }

        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            observer.disconnect()
            window.removeEventListener('scroll', handleScroll)
        }
    }, [cats, active])

    const onNavClick = (id) => {
        const el = sectionRefs.current[id]
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setActive(id)

        // make clicked nav button visible in its horizontal container
        const btn = navRef.current?.querySelector(`[data-nav="${id}"]`)
        if (btn) btn.scrollIntoView({ behavior: 'smooth', inline: 'center' })
    }

    if (!cats.length) return null

    return (
        <div className="mx-auto max-w-5xl">
            {/* Fixed nav (desktop + responsive) */}
            <div className="fixed-category-nav">
                <div className="mb-0 bg-white/60 backdrop-blur-sm rounded-2xl p-3 shadow-sm z-50">
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="text-lg font-semibold px-1">منو</h2>
                    </div>

                    <div ref={navRef} className="flex gap-3 overflow-x-auto py-2 no-scrollbar">
                        {cats.map((cat) => {
                            const iconUrl = cat.iconUrl || cat.items?.[0]?.imageUrl
                            const isActive = active === cat.id
                            return (
                                <button
                                    key={cat.id}
                                    data-nav={cat.id}
                                    onClick={() => onNavClick(cat.id)}
                                    className={`flex flex-col items-center sm:inline-flex sm:flex-row sm:items-center sm:gap-3 px-3 py-2 rounded-full transition-transform duration-200 ${isActive ? 'bg-coffee text-white shadow-coffee-glow' : 'bg-white/80 text-gray-800 hover:scale-102'}`}
                                    aria-pressed={isActive}
                                >
                                    {iconUrl ? (
                                        <motion.img
                                            src={iconUrl}
                                            alt={cat.title}
                                            initial={{ scale: 1 }}
                                            animate={{ scale: isActive ? 1.12 : 1 }}
                                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                            className={`w-12 h-12 sm:w-10 sm:h-10 rounded-full object-cover`}
                                        />
                                    ) : (
                                        <motion.div
                                            initial={{ scale: 1 }}
                                            animate={{ scale: isActive ? 1.12 : 1 }}
                                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                            className={`w-12 h-12 sm:w-10 sm:h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm`}
                                        >
                                            {cat.title?.slice(0, 1)}
                                        </motion.div>
                                    )}

                                    <span className="text-sm font-medium mt-2 sm:mt-0 text-center sm:text-right">{cat.title}</span>
                                </button>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* Category sections (each with its own horizontal scroll row that shows 2 rows) */}
            {cats.map((cat) => (
                <section
                    key={cat.id}
                    ref={(el) => (sectionRefs.current[cat.id] = el)}
                    data-catid={cat.id}
                    className="mb-6"
                >
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-md font-medium">{cat.title}</h3>
                    </div>

                    <div className="overflow-x-auto -mx-3 px-3 no-scrollbar">
                        <div className="grid grid-flow-col grid-rows-2 gap-4 auto-cols-[220px] py-2">
                            {(cat.items || []).map((it) => (
                                <div key={it.id} className="inline-flex flex-col items-start bg-white/90 border border-transparent rounded-2xl p-4 shrink-0 shadow-sm hover:shadow-lg transform transition-all duration-200">
                                    {it.imageUrl && (
                                        <img src={it.imageUrl} alt={it.title} className="w-full h-36 object-cover rounded-lg mb-3 shadow-sm" />
                                    )}
                                    <div className="text-right w-full">
                                        <div className="text-sm font-semibold">{it.title}</div>
                                        {it.subtitle && <div className="text-xs text-gray-500 mt-1">{it.subtitle}</div>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            ))}
        </div>
    )
}
