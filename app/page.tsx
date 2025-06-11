"use client"
import Link from "next/link"

export default function Home() {
  const styles = {
    container: {
      minHeight: "100vh",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    }, 
    card: {
      backgroundColor: "white",
      borderRadius: "20px",
      padding: "60px 40px",
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
      textAlign: "center" as const,
      maxWidth: "500px",
      width: "90%",
    },
    title: {
      fontSize: "2.5rem",
      fontWeight: "700",
      color: "#2d3748",
      marginBottom: "10px",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    subtitle: {
      fontSize: "1.1rem",
      color: "#718096",
      marginBottom: "40px",
    },
    loginButton: {
      display: "inline-block",
      backgroundColor: "#667eea",
      color: "white",
      textDecoration: "none",
      padding: "15px 40px",
      borderRadius: "50px",
      fontSize: "1.1rem",
      fontWeight: "600",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
    },
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Havas Media</h1>
        <p style={styles.subtitle}>Sistema di gestione sostituzioni</p>
        <Link
          href="/login"
          style={styles.loginButton}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)"
            e.currentTarget.style.boxShadow = "0 6px 20px rgba(102, 126, 234, 0.6)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)"
            e.currentTarget.style.boxShadow = "0 4px 15px rgba(102, 126, 234, 0.4)"
          }}
        >
          Accedi al Sistema
        </Link>
      </div>
    </div>
  )
}
