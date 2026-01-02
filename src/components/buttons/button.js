"use client";
export default function Button({ children, action, ...props }) {
  function handelSelect() {
    if (action === "Resume") {
      const link = document.createElement("a");
      link.href = "/Jayanth_Resume.pdf";
      link.download = "Jayanth_Resume.pdf";
      link.click();
    }
    if (action === "call") {
      window.location.href = "tel:+918867094596";
    }
  }
  return (
    <button onClick={handelSelect} {...props}>
      {children}
    </button>
  );
}
