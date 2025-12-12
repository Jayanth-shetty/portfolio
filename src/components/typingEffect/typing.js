"use client";
import React, { useEffect, useRef, useState } from "react";
export default function TypingEffect({
  steps = ["React", "Next.js", "Frontend"],
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseAfterTyping = 1200,
  pauseAfterDeleting = 300,
}) {
  const [text, setText] = useState("");
  const [stepIndex, setStepIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const mounted = useRef(true);
  useEffect(() => {
    mounted.current = true;
    return () => (mounted.current = false);
  }, []);
  useEffect(() => {
    if (!steps || steps.length === 0) return;
    const currentString = steps[stepIndex % steps.length];
    let timeout = null;
    if (!isDeleting) {
      if (charIndex < currentString.length) {
        timeout = setTimeout(() => {
          if (!mounted.current) return;
          setText(currentString.slice(0, charIndex + 1));
          setCharIndex((ci) => ci + 1);
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          if (!mounted.current) return;
          setIsDeleting(true);
        }, pauseAfterTyping);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          if (!mounted.current) return;
          setText(currentString.slice(0, charIndex - 1));
          setCharIndex((ci) => ci - 1);
        }, deletingSpeed);
      } else {
        timeout = setTimeout(() => {
          if (!mounted.current) return;
          setIsDeleting(false);
          setStepIndex((si) => si + 1);
          setCharIndex(0);
        }, pauseAfterDeleting);
      }
    }
    return ()=>clearTimeout(timeout);
  }, [
    steps,
    stepIndex,
    charIndex,
    isDeleting,
    typingSpeed,
    deletingSpeed,
    pauseAfterDeleting,
    pauseAfterTyping,
  ]);
  return <h1 aria-live="polite" className="typing-wrapper">
      <span className="typing-text">{text}</span>
      <span className="typing-cursor" aria-hidden="true">|</span>
    </h1>;
}
