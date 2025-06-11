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
  const [selections, setSelections] = useState<{ [key: string]: string }>({})
  const [manualInputs, setManualInputs] = useState<{ [key: string]: string }>({})

  const nonTrovati = ["Brand1", "Brand2", "Brand3"]
  const suggerimenti: NonTrovati = {
    Brand1: [
      { valore: "BrandA", score: 85 },
      { valore: "BrandB", score: 70 },
    ],
    Brand2: [{ valore: "BrandC", score: 90 }],
    Brand3: [
      { valore: "BrandD", score: 75 },
      { valore: "BrandE", score: 65 },
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

  const styles = {
    container: {
      minHeight: "100vh",
      backgroundColor: "#f7fafc",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    header: {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "white",
      padding: "30px 0",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    headerContent: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 20px",
    },
    headerTitle: {
      fontSize: "2rem",
      fontWeight: "700",
      margin: "0",
    },
    main: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "40px 20px",
    },
    loader: {
      display: loading ? "flex" : "none",
      alignItems: "center",
      justifyContent: "center",
      gap: "15px",
      backgroundColor: "#fff3cd",
      color: "#856404",
      padding: "20px",
      borderRadius: "12px",
      marginBottom: "30px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    spinner: {
      width: "20px",
      height: "20px",
      border: "2px solid transparent",
      borderTop: "2px solid #856404",
      borderRadius: "50%",
      animation: "spin 1s linear infinite",
    },
    itemCard: {
      backgroundColor: "white",
      borderRadius: "16px",
      padding: "30px",
      marginBottom: "25px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
      border: "1px solid #e2e8f0",
      transition: "all 0.3s ease",
    },
    itemTitle: {
      fontSize: "1.3rem",
      fontWeight: "700",
      color: "#2d3748",
      marginBottom: "20px",
      padding: "12px 20px",
      backgroundColor: "#f7fafc",
      borderRadius: "8px",
      border: "2px solid #e2e8f0",
    },
    optionGroup: {
      marginBottom: "15px",
    },
    radioOption: {
      display: "flex",
      alignItems: "center",
      padding: "12px 16px",
      borderRadius: "8px",
      border: "2px solid #e2e8f0",
      marginBottom: "10px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      backgroundColor: "white",
    },
    radioOptionSelected: {
      borderColor: "#667eea",
      backgroundColor: "#f0f4ff",
    },
    radioInput: {
      marginRight: "12px",
      transform: "scale(1.2)",
    },
    radioLabel: {
      fontSize: "1rem",
      fontWeight: "500",
      color: "#4a5568",
      cursor: "pointer",
      flex: "1",
    },
    manualInputContainer: {
      display: "flex",
      alignItems: "center",
      gap: "15px",
      flex: "1",
    },
    manualInput: {
      padding: "8px 12px",
      border: "2px solid #e2e8f0",
      borderRadius: "6px",
      fontSize: "0.95rem",
      flex: "1",
      transition: "all 0.3s ease",
    },
    suggestionsContainer: {
      marginLeft: "20px",
      marginTop: "10px",
    },
    suggestionOption: {
      display: "flex",
      alignItems: "center",
      padding: "10px 16px",
      borderRadius: "8px",
      border: "2px solid #e8f5e8",
      marginBottom: "8px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      backgroundColor: "#f0fff4",
    },
    suggestionSelected: {
      borderColor: "#48bb78",
      backgroundColor: "#e6fffa",
    },
    scoreTag: {
      backgroundColor: "#48bb78",
      color: "white",
      padding: "4px 8px",
      borderRadius: "12px",
      fontSize: "0.8rem",
      fontWeight: "600",
      marginLeft: "auto",
    },
    submitButton: {
      backgroundColor: "#667eea",
      color: "white",
      border: "none",
      padding: "16px 32px",
      borderRadius: "12px",
      fontSize: "1.1rem",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
      marginTop: "30px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      boxShadow: "0 4px 15px rgba(102, 126, 234, 0.3)",
    },
    submitButtonDisabled: {
      backgroundColor: "#a0aec0",
      cursor: "not-allowed",
      boxShadow: "none",
    },
  }

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.headerTitle}>Conferma Sostituzioni</h1>
        </div>
      </header>

      <main style={styles.main}>
        <div style={styles.loader}>
          <div style={styles.spinner}></div>
          <span>Attendere, elaborazione in corso...</span>
        </div>

        <form onSubmit={handleSubmit}>
          {nonTrovati.map((key, index) => (
            <div key={index} style={styles.itemCard}>
              <div style={styles.itemTitle}>🔍 {key}</div>

              <div style={styles.optionGroup}>
                <div
                  style={{
                    ...styles.radioOption,
                    ...(selections[key] === "salta" || !selections[key] ? styles.radioOptionSelected : {}),
                  }}
                  onClick={() => handleSelectionChange(key, "salta")}
                >
                  <input
                    type="radio"
                    name={`opzione_${key}`}
                    value="salta"
                    checked={selections[key] === "salta" || !selections[key]}
                    onChange={() => handleSelectionChange(key, "salta")}
                    style={styles.radioInput}
                  />
                  <label style={styles.radioLabel}>⏭️ Salta questo elemento</label>
                </div>

                <div
                  style={{
                    ...styles.radioOption,
                    ...(selections[key] === "manuale" ? styles.radioOptionSelected : {}),
                  }}
                  onClick={() => handleSelectionChange(key, "manuale")}
                >
                  <input
                    type="radio"
                    name={`opzione_${key}`}
                    value="manuale"
                    checked={selections[key] === "manuale"}
                    onChange={() => handleSelectionChange(key, "manuale")}
                    style={styles.radioInput}
                  />
                  <div style={styles.manualInputContainer}>
                    <label style={styles.radioLabel}>✏️ Inserimento manuale:</label>
                    <input
                      type="text"
                      name={`manuale_${key}`}
                      value={manualInputs[key] || ""}
                      onChange={(e) => handleManualInputChange(key, e.target.value)}
                      style={styles.manualInput}
                      placeholder="Inserisci valore personalizzato"
                      onFocus={(e) => {
                        e.target.style.borderColor = "#667eea"
                        e.target.style.boxShadow = "0 0 0 3px rgba(102, 126, 234, 0.1)"
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#e2e8f0"
                        e.target.style.boxShadow = "none"
                      }}
                    />
                  </div>
                </div>
              </div>

              <div style={styles.suggestionsContainer}>
                <h4 style={{ color: "#4a5568", marginBottom: "15px", fontSize: "1rem" }}>
                  💡 Suggerimenti automatici:
                </h4>
                {suggerimenti[key]?.map((sug, idx) => (
                  <div
                    key={idx}
                    style={{
                      ...styles.suggestionOption,
                      ...(selections[key] === `suggerimento_${idx}` ? styles.suggestionSelected : {}),
                    }}
                    onClick={() => handleSelectionChange(key, `suggerimento_${idx}`)}
                  >
                    <input
                      type="radio"
                      name={`opzione_${key}`}
                      value={`suggerimento_${idx}`}
                      checked={selections[key] === `suggerimento_${idx}`}
                      onChange={() => handleSelectionChange(key, `suggerimento_${idx}`)}
                      style={styles.radioInput}
                    />
                    <label style={styles.radioLabel}>{sug.valore}</label>
                    <span style={styles.scoreTag}>{sug.score}%</span>
                    <input type="hidden" name={`suggerimento_valore_${key}_${idx}`} value={sug.valore} />
                  </div>
                ))}
              </div>
            </div>
          ))}

          <button
            type="submit"
            disabled={loading}
            style={{
              ...styles.submitButton,
              ...(loading ? styles.submitButtonDisabled : {}),
            }}
            onMouseEnter={(e) => {
              if (!loading) {
                e.currentTarget.style.backgroundColor = "#5a67d8"
                e.currentTarget.style.transform = "translateY(-2px)"
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(102, 126, 234, 0.4)"
              }
            }}
            onMouseLeave={(e) => {
              if (!loading) {
                e.currentTarget.style.backgroundColor = "#667eea"
                e.currentTarget.style.transform = "translateY(0)"
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(102, 126, 234, 0.3)"
              }
            }}
          >
            {loading && <div style={styles.spinner}></div>}
            {loading ? "Elaborazione in corso..." : "🚀 Applica modifiche"}
          </button>
        </form>
      </main>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
