"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Skeleton } from 'boneyard-js/react'

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const [stars, setStars] = useState(null);

  // 🔥 Fetch GitHub Stars
  useEffect(() => {
    async function fetchStars() {
      try {
        const res = await fetch(
          "https://api.github.com/repos/YOUR_USERNAME/YOUR_REPO",
        );
        const data = await res.json();
        setStars(data.stargazers_count);
      } catch {
        setStars("—");
      }
    }
    fetchStars();
  }, []);

  // 🔥 Counter Animation
  function Counter({ value }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const end = parseInt(value);
      if (!end) return;

      let duration = 1000;
      let increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [value]);

    return <span>{count}</span>;
  }

  return (
     <Skeleton name="blog-card" loading={false}>
    <main className="relative min-h-screen bg-[#071017] text-white overflow-hidden">
      {/* 🌊 Parallax Background */}
      <motion.div
        style={{ y: yParallax }}
        className="absolute inset-0 -z-20 bg-linear-to-br from-[#061018] via-[#07131a] to-[#03242b]"
      />

      {/* 💧 Floating Glass Shapes */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#04D9D9]/20 blur-3xl rounded-full animate-pulse -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full animate-pulse -z-10" />

      {/* HERO */}
      <section className="container h-fit mx-auto px-6 py-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold bg-linear-to-r from-[#04D9D9] to-purple-500 bg-clip-text text-transparent"
        >
          Empowering Creators Through Community
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 max-w-2xl mx-auto text-white/70 text-lg"
        >
          A bold crowdfunding platform built with modern full-stack
          architecture. Designed for creators, powered by community.
        </motion.p>
      </section>

      {/* ⚡ TECH STACK WITH 3D TILT */}
      <section className="container mx-auto px-6 py-24">
        <h2 className="text-3xl font-semibold text-center mb-12">Tech Stack</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:w-6xl mx-auto">
            <motion.div
              whileHover={{ rotateX: 8, rotateY: -8, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-6 rounded-xl backdrop-blur-lg 
                           bg-white/5 border border-white/10
                           hover:border-[#04D9D9]/50
                           shadow-lg"
              style={{ transformStyle: "preserve-3d" }}
            >
              <p className="text-lg font-medium flex justify-center items-center"><img className="mt-2" width={120} height={80} src="next.svg" alt="Next.js" /></p>
            </motion.div> 

            <motion.div
              // key={i}
              whileHover={{ rotateX: 8, rotateY: -8, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-6 rounded-xl backdrop-blur-lg 
                           bg-white/5 border border-white/10
                           hover:border-[#04D9D9]/50
                           shadow-lg"
              style={{ transformStyle: "preserve-3d" }}
            >
              <p className="text-lg font-medium flex justify-center items-center h-9"><img width={120} height={60} src="mongodb.svg" alt="MongoDb" /></p>
            </motion.div> 

            <motion.div
              // key={i}
              whileHover={{ rotateX: 8, rotateY: -8, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-6 rounded-xl backdrop-blur-lg 
                           bg-white/5 border border-white/10
                           hover:border-[#04D9D9]/50
                           shadow-lg"
              style={{ transformStyle: "preserve-3d" }}
            >
              <p className="text-lg font-medium flex justify-center items-center h-9"><img width={120} height={60} src="nodejs.svg" alt="Node.Js" /></p>
            </motion.div> 

            <motion.div
              // key={i}
              whileHover={{ rotateX: 8, rotateY: -8, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-6 rounded-xl backdrop-blur-lg 
                           bg-white/5 border border-white/10
                           hover:border-[#04D9D9]/50
                           shadow-lg"
              style={{ transformStyle: "preserve-3d" }}
            >
              <p className="text-lg font-medium flex justify-center items-center h-9"><img width={180} height={80} src="tailwindcss.svg" alt="Tailwind" /></p>
            </motion.div> 

            <motion.div
              // key={i}
              whileHover={{ rotateX: 8, rotateY: -8, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-6 rounded-xl backdrop-blur-lg 
                           bg-white/5 border border-white/10
                           hover:border-[#04D9D9]/50
                           shadow-lg"
              style={{ transformStyle: "preserve-3d" }}
            >
              <p className="text-lg font-medium flex justify-center items-center h-9"><img width={180} height={80} src="razorpay.svg" alt="Tailwind" /></p>
            </motion.div> 

            <motion.div
              // key={i}
              whileHover={{ rotateX: 8, rotateY: -8, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-6 rounded-xl backdrop-blur-lg 
                           bg-white/5 border border-white/10
                           hover:border-[#04D9D9]/50
                           shadow-lg"
              style={{ transformStyle: "preserve-3d" }}
            >
              <p className="text-lg font-medium flex justify-center items-center h-9 gap-2"><img width={60} height={60} src="github-icon.svg" alt="Tailwind" /><span className="font-bold text-2xl">Github</span></p>
            </motion.div> 
        </div>
      </section>

      {/* 📊 STATS */}
      <section className="container mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-semibold text-center mb-12">STATS</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg">
            <h3 className="text-4xl font-bold text-[#04D9D9]">
              <Counter value={100} />+
            </h3>
            <p className="text-white/60 mt-2">Creators Supported</p>
          </div>

          {/* <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg">
            <h3 className="text-4xl font-bold text-purple-400">
              {stars !== null ? stars : "..."}
            </h3>
            <p className="text-white/60 mt-2">GitHub Stars</p>
          </div> */}

          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg">
            <h3 className="text-4xl font-bold text-[#04D9D9]">
              <Counter value={24} />
            </h3>
            <p className="text-white/60 mt-2">Hour Response Time</p>
          </div>
        </div>
      </section>

      {/* 🌊 Animated SVG Wave */}
      <div className="relative w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-24"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#04D9D9"
            fillOpacity="0.1"
            d="M0,224L80,192C160,160,320,96,480,106.7C640,117,800,203,960,229.3C1120,256,1280,224,1360,208L1440,192L1440,320L0,320Z"
          >
            <animate
              attributeName="d"
              dur="3s"
              repeatCount="indefinite"
              values="
              M0,224L80,192C160,160,320,96,480,106.7C640,117,800,203,960,229.3C1120,256,1280,224,1360,208L1440,192L1440,320L0,320Z;
              M0,192L80,176C160,160,320,128,480,138.7C640,149,800,213,960,245.3C1120,277,1280,245,1360,229L1440,213L1440,320L0,320Z;
              M0,224L80,192C160,160,320,96,480,106.7C640,117,800,203,960,229.3C1120,256,1280,224,1360,208L1440,192L1440,320L0,320Z"
            />
          </path>
        </svg>
      </div>

      {/* 🚀 CTA */}
      <section className="container mx-auto px-6 py-32 text-center">
        <h2 className="text-3xl font-semibold mb-10">Explore & Contribute</h2>

        <div className="flex flex-wrap justify-center gap-6">
          <Link
            href="https://github.com/harsh-upla/get-me-a-chai"
            target="_blank"
            className="px-6 py-3 rounded-lg text-white
                       bg-linear-to-r from-[#04D9D9] via-[#1a94e0] to-[#04D9D9]
                       bg-size-[200%_100%] bg-left
                       transition-all duration-700 hover:bg-right
                       shadow-[0_8px_25px_rgba(4,217,217,0.3)]"
          >
            View Project Repo
          </Link>

          <Link
            href="/Harsh%20Upla"
            className="px-6 py-3 rounded-lg border border-white/20
                       hover:border-[#04D9D9]
                       transition-all duration-500"
          >
            Support This Project
          </Link>

          {/* <Link
            href="#"
            className="px-6 py-3 rounded-lg border border-purple-500/40
                       hover:bg-purple-500/20
                       transition-all duration-500"
          >
            Contribute
          </Link> */}
        </div>
      </section>
    </main>
    </Skeleton>
  );
}
