"use client"

import { useState, type FormEvent } from "react"
import { useRouter } from "next/navigation"

interface Suggerimento {
  valore: string
  score: number
}

interface NonTrovati {
  [key: string]: Suggerimento[]
}

export default function Conferma() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [selections, setSelections] = useState<Record<string, string>>({})
  const [manualInputs, setManualInputs] = useState<Record<string, string>>({})

  const nonTrovati = ["Brand1"]
  const suggerimenti: NonTrovati = {
    Brand1: [
      { valore: "Suggerimento 1", score: 85 },
      { valore: "Suggerimento 2", score: 70 },
    ],
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      router.push("/risultato")
    }, 1500)
  }

  const handleSelectionChange = (key: string, value: string) => {
    setSelections((prev) => ({ ...prev, [key]: value }))
  }

  const handleManualInputChange = (key: string, value: string) => {
    setManualInputs((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <div className="container">
      <header className="header">
        <div className="header-content">
          <h1 className="header-title">Conferma Sostituzioni</h1>
        </div>
      </header>

      <main className="main">
        {loading && (
          <div className="loader">
            <div className="spinner"></div>
            <span>Attendere, elaborazione in corso...</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {nonTrovati.map((key) => (
            <div key={key} className="item-card">
              <div className="item-title">🔍 {key}</div>

              <div className="option-group">
                <label className={`radio-option ${selections[key] === "salta" ? "selected" : ""}`}>
                  <input
                    type="radio"
                    name={`opzione_${key}`}
                    value="salta"
                    checked={selections[key] === "salta"}
                    onChange={() => handleSelectionChange(key, "salta")}
                  />
                  ⏭️ Salta questo elemento
                </label>

                <label className={`radio-option ${selections[key] === "manuale" ? "selected" : ""}`}>
                  <input
                    type="radio"
                    name={`opzione_${key}`}
                    value="manuale"
                    checked={selections[key] === "manuale"}
                    onChange={() => handleSelectionChange(key, "manuale")}
                  />
                  ✏️ Inserimento manuale:
                  <input
                    type="text"
                    name={`manuale_${key}`}
                    value={manualInputs[key] || ""}
                    onChange={(e) => handleManualInputChange(key, e.target.value)}
                    className="manual-input"
                    placeholder="Inserisci valore personalizzato"
                  />
                </label>

                <div className="suggestions-container">
                  {suggerimenti[key]?.map((suggerimento) => (
                    <div
                      key={suggerimento.valore}
                      className={`suggestion-option ${selections[key] === suggerimento.valore ? "selected" : ""}`}
                      onClick={() => handleSelectionChange(key, suggerimento.valore)}
                    >
                      <span>{suggerimento.valore}</span>
                      <span className="score-tag">{suggerimento.score}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <button type="submit" className={`submit-button ${loading ? "disabled" : ""}`} disabled={loading}>
            {loading ? "Sto salvando..." : "Conferma e continua"}
          </button>
        </form>
      </main>

      <style>{`
        .container {
          min-height: 100vh;
          background-color: #f7fafc;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 30px 0;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .header-title {
          font-size: 2rem;
          font-weight: 700;
          margin: 0;
        }
        .main {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px;
        }
        .loader {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          background-color: #fff3cd;
          color: #856404;
          padding: 20px;
          border-radius: 12px;
          margin-bottom: 30px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid transparent;
          border-top: 2px solid #856404;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        .item-card {
          background-color: white;
          border-radius: 16px;
          padding: 30px;
          margin-bottom: 25px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          border: 1px solid #e2e8f0;
        }
        .item-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 20px;
        }
        .radio-option {
          display: flex;
          align-items: center;
          padding: 12px 16px;
          border-radius: 8px;
          border: 2px solid #e2e8f0;
          margin-bottom: 10px;
          cursor: pointer;
          background-color: white;
        }
        .radio-option.selected {
          border-color: #667eea;
          background-color: #f0f4ff;
        }
        .manual-input {
          padding: 8px 12px;
          border: 2px solid #e2e8f0;
          border-radius: 6px;
          font-size: 0.95rem;
          flex: 1;
        }
        .suggestion-option {
          display: flex;
          align-items: center;
          padding: 10px 16px;
          border-radius: 8px;
          border: 2px solid #e8f5e8;
          margin-bottom: 8px;
          cursor: pointer;
          background-color: #f0fff4;
        }
        .suggestion-option.selected {
          border-color: #48bb78;
          background-color: #e6fffa;
        }
        .submit-button {
          background-color: #667eea;
          color: white;
          padding: 16px 32px;
          border-radius: 12px;
          font-size: 1.1rem;
          cursor: pointer;
        }
        .submit-button.disabled {
          background-color: #a0aec0;
          cursor: not-allowed;
        }
        @keyframes spin {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
      `}</style>
    </div>
  )
}
