import { useState } from 'react'

const PROMPTS = [
  'What would you build if you had no constraints?',
  'Describe your ideal debugging session.',
  'What does "done" mean to you?',
  'If your codebase were a city, what would it look like?',
  'What is one thing you wish more developers knew?',
]

export default function Playground() {
  const [promptIndex, setPromptIndex] = useState(0)
  const [answer, setAnswer] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function nextPrompt() {
    setPromptIndex((i) => (i + 1) % PROMPTS.length)
    setAnswer('')
    setSubmitted(false)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (answer.trim()) setSubmitted(true)
  }

  return (
    <main className="page playground-page">
      <h1>Playground</h1>
      <p className="subtitle">A space to think out loud.</p>

      <div className="prompt-card">
        <p className="prompt-text">{PROMPTS[promptIndex]}</p>

        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Your thoughts..."
              rows={5}
            />
            <div className="prompt-actions">
              <button type="button" className="btn-secondary" onClick={nextPrompt}>
                Skip
              </button>
              <button type="submit" className="btn-primary" disabled={!answer.trim()}>
                Submit
              </button>
            </div>
          </form>
        ) : (
          <div className="submitted">
            <blockquote>{answer}</blockquote>
            <button className="btn-primary" onClick={nextPrompt}>
              Next prompt
            </button>
          </div>
        )}

        <span className="prompt-counter">
          {promptIndex + 1} / {PROMPTS.length}
        </span>
      </div>
    </main>
  )
}
