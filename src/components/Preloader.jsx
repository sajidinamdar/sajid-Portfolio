import { useEffect, useState } from 'react'

export default function Preloader() {
    const [loaded, setLoaded] = useState(false)
    const [percent, setPercent] = useState(0)

    const [statusIndex, setStatusIndex] = useState(0)
    const bootLogs = [
        "[SYS] Initializing secure protocols...",
        "[AUTH] Verifying identity...",
        "[BOOT] Loading core modules...",
        "[LINK] Establishing neural handshake...",
        "[SCAN] Checking for vulnerabilities...",
        "[DONE] System ready."
    ]

    useEffect(() => {
        const statusInterval = setInterval(() => {
            setStatusIndex(prev => (prev + 1) % bootLogs.length)
        }, 800)
        return () => clearInterval(statusInterval)
    }, [])

    useEffect(() => {
        let count = 0
        document.body.classList.add('loading')

        const updateLoader = setInterval(() => {
            const jump = Math.floor(Math.random() * 8) + 1
            count += jump

            if (count >= 100) {
                count = 100
                clearInterval(updateLoader)
                setPercent(100)

                setTimeout(() => {
                    setLoaded(true)
                    document.body.classList.remove('loading')
                }, 800)
            } else {
                setPercent(count)
            }
        }, 150)

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
                    <div className="si-boot-logs">
                        {bootLogs[statusIndex]}
                    </div>
                    <div className="si-loading-status">STATUS • <span id="si-percent">{String(percent).padStart(2, '0')}</span>%</div>
                </div>
            </div>
            <style>{`
                .si-boot-logs {
                    font-family: 'Courier New', monospace;
                    color: var(--neon-cyan);
                    font-size: 0.75rem;
                    text-align: center;
                    margin: 15px 0 10px 0;
                    height: 1.2rem;
                    opacity: 0.8;
                    letter-spacing: 1px;
                }
                .si-loading-status {
                    font-size: 0.8rem;
                    letter-spacing: 2px;
                    color: rgba(255, 255, 255, 0.5);
                    text-align: center;
                }
                @media (max-width: 350px) {
                    .si-boot-logs {
                        font-size: 0.65rem;
                        letter-spacing: 0.5px;
                    }
                    .si-progress-container {
                        width: 220px;
                    }
                }
            `}</style>
        </div>
    )
}
