import { useEffect, useState } from 'react'

export default function Preloader() {
    const [loaded, setLoaded] = useState(false)
    const [percent, setPercent] = useState(0)

    useEffect(() => {
        let count = 0
        document.body.classList.add('loading')

        const updateLoader = setInterval(() => {
            const jump = Math.floor(Math.random() * 10) + 1
            count += jump

            if (count >= 100) {
                count = 100
                clearInterval(updateLoader)
                setPercent(100)

                // Allow a small delay at 100% for impact
                setTimeout(() => {
                    setLoaded(true)
                    document.body.classList.remove('loading')
                }, 500)
            } else {
                setPercent(count)
            }
        }, 120)

        return () => {
            clearInterval(updateLoader)
            document.body.classList.remove('loading')
        }
    }, [])

    return (
        <div id="preloader" className={loaded ? 'loaded' : ''}>
            <div className="si-loader-inner">
                <div className="si-shield-wrap">
                    <div className="si-logo-main">SI</div>
                    <div className="si-scanner"></div>
                    <div className="si-glow-pulse"></div>
                </div>
                <div className="si-progress-container">
                    <div className="si-progress-track">
                        <div className="si-progress-fill" style={{ width: `${percent}%` }}></div>
                    </div>
                    <div className="si-loading-status">PORTFOLIO LOADING • <span id="si-percent">{String(percent).padStart(2, '0')}</span>%</div>
                </div>
            </div>
        </div>
    )
}
