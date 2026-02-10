import { useState, useEffect, useCallback, useRef } from 'react'
import { CHARACTERS } from './characters'
import { VillageBackground, CrowdLeft, CrowdRight, Hammer, Pot } from './Village'
import './App.css'

const GAME_DURATION = 30
const GRID_SIZE = 9
const MOLE_INTERVAL = 800

function App() {
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION)
  const [activeMoles, setActiveMoles] = useState(new Set())
  const [gameRunning, setGameRunning] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [whackedHoles, setWhackedHoles] = useState(new Set())
  const [hammerHoles, setHammerHoles] = useState(new Set())
  const [crowdReaction, setCrowdReaction] = useState('idle')
  const [bestScore, setBestScore] = useState(() => {
    return parseInt(localStorage.getItem('whack-best-score') || '0', 10)
  })
  const moleTimers = useRef([])
  const reactionTimer = useRef(null)

  const clearAllTimers = useCallback(() => {
    moleTimers.current.forEach(clearTimeout)
    moleTimers.current = []
  }, [])

  const triggerReaction = useCallback((type) => {
    setCrowdReaction(type)
    if (reactionTimer.current) clearTimeout(reactionTimer.current)
    reactionTimer.current = setTimeout(() => setCrowdReaction('idle'), 600)
  }, [])

  const startGame = useCallback(() => {
    setScore(0)
    setTimeLeft(GAME_DURATION)
    setActiveMoles(new Set())
    setWhackedHoles(new Set())
    setHammerHoles(new Set())
    setCrowdReaction('idle')
    setGameRunning(true)
    setGameOver(false)
    clearAllTimers()
  }, [clearAllTimers])

  // Countdown timer
  useEffect(() => {
    if (!gameRunning) return
    if (timeLeft <= 0) {
      setGameRunning(false)
      setGameOver(true)
      setActiveMoles(new Set())
      clearAllTimers()
      setScore(prev => {
        setBestScore(old => {
          const newBest = Math.max(old, prev)
          localStorage.setItem('whack-best-score', String(newBest))
          return newBest
        })
        return prev
      })
      return
    }
    const id = setTimeout(() => setTimeLeft(t => t - 1), 1000)
    return () => clearTimeout(id)
  }, [gameRunning, timeLeft, clearAllTimers])

  // Spawn moles
  useEffect(() => {
    if (!gameRunning) return
    const spawn = () => {
      const hole = Math.floor(Math.random() * GRID_SIZE)
      setActiveMoles(prev => new Set(prev).add(hole))

      const hideTimer = setTimeout(() => {
        // Check if this mole was whacked or missed
        setWhackedHoles(prev => {
          const wasWhacked = prev.has(hole)
          if (!wasWhacked) {
            // MISS — mole escaped!
            triggerReaction('boo')
          }
          const next = new Set(prev)
          next.delete(hole)
          return next
        })
        setActiveMoles(prev => {
          const next = new Set(prev)
          next.delete(hole)
          return next
        })
        setHammerHoles(prev => {
          const next = new Set(prev)
          next.delete(hole)
          return next
        })
      }, 1000 + Math.random() * 600)
      moleTimers.current.push(hideTimer)
    }
    const interval = setInterval(spawn, MOLE_INTERVAL)
    return () => clearInterval(interval)
  }, [gameRunning, triggerReaction])

  const whackMole = useCallback((index) => {
    if (!gameRunning || !activeMoles.has(index) || whackedHoles.has(index)) return
    setScore(s => s + 1)
    setWhackedHoles(prev => new Set(prev).add(index))
    setHammerHoles(prev => new Set(prev).add(index))
    setActiveMoles(prev => {
      const next = new Set(prev)
      next.delete(index)
      return next
    })
    triggerReaction('cheer')
  }, [gameRunning, activeMoles, whackedHoles, triggerReaction])

  const timerClass = timeLeft <= 5 ? 'timer-danger' : timeLeft <= 10 ? 'timer-warn' : ''

  const handleWhack = useCallback((e, index) => {
    e.preventDefault()
    whackMole(index)
  }, [whackMole])

  return (
    <div className="container">
      {/* Village background */}
      <VillageBackground />

      {/* Crowd on sides */}
      <CrowdLeft reaction={crowdReaction} />
      <CrowdRight reaction={crowdReaction} />

      {/* Reaction text floating */}
      {crowdReaction === 'cheer' && <div className="reaction-text reaction-cheer" key={Date.now()}>Nice!</div>}
      {crowdReaction === 'boo' && <div className="reaction-text reaction-boo" key={Date.now()}>Missed!</div>}

      {/* Game UI */}
      <div className="game-layer">
        <h1 className="title">Whack-a-Chiikawa!</h1>

        <div className="top-bar">
          <div className="stat">
            <span className="stat-label">Score</span>
            <span className="stat-value score-value">{score}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Time</span>
            <span className={`stat-value time-value ${timerClass}`}>{timeLeft}s</span>
          </div>
          <div className="stat">
            <span className="stat-label">Best</span>
            <span className="stat-value best-value">{bestScore}</span>
          </div>
        </div>

        {!gameRunning && (
          <button className="start-btn" onClick={startGame}>
            {gameOver ? 'Play Again' : 'Start Game'}
          </button>
        )}

        {gameOver && !gameRunning && (
          <div className="game-over-msg">
            Game Over! You scored <strong>{score}</strong>
            {score >= bestScore && score > 0 ? ' — New Best!' : ''}
          </div>
        )}

        <div className="grid">
          {Array.from({ length: GRID_SIZE }, (_, i) => {
            const isActive = activeMoles.has(i)
            const isWhacked = whackedHoles.has(i)
            const showHammer = hammerHoles.has(i)
            const character = CHARACTERS[i]
            const CharComponent = character.Component
            return (
              <div
                key={i}
                className={`hole ${gameRunning && isActive ? 'hole-active' : ''}`}
                onPointerDown={(e) => handleWhack(e, i)}
              >
                <div className="char-label">{character.name}</div>
                <div className="hole-stage">
                  {/* Character peeks up from behind pot */}
                  <div
                    className={`mole ${isActive ? 'mole-up' : ''} ${isWhacked ? 'mole-whacked' : ''}`}
                    style={{ backgroundColor: isWhacked ? '#fca5a5' : character.color }}
                  >
                    {isWhacked ? <span className="whacked-star">&#10024;</span> : <CharComponent />}
                  </div>
                  {/* Pot sits in front, hiding the character */}
                  <div className="pot-container">
                    <Pot />
                  </div>
                </div>
                {/* Hammer appears on whack */}
                {showHammer && (
                  <div className="hammer-container">
                    <Hammer />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
