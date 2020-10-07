import React from "react"

export const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        marginTop: "150px",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        width='150px'
        src='/img/loading.gif'
        alt='loading'
        style={{ borderRadius: "50%" }}
      />
    </div>
  )
}
