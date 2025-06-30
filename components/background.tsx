"use client";

import { motion } from "motion/react";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowRight, Shield, TrendingUp, Users, Award, Star, CheckCircle } from "lucide-react"
export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
         <Badge className="mb-6 bg-gold-500/20 text-gold-300 border-gold-400/30 hover:bg-gold-500/30">
              Trusted Financial Partner
            </Badge>
        <div className="text-3xl md:text-6xl font-bold text-white text-center">
          Simplyfying Wealth
        </div>
        <div className="font-light text-base md:text-6xl text-gold-400 py-4">
          Amplifying Growth
        </div>
        <div className="font-extralight md:text-xl text-white text-center w-[50vw]">
            Your one-stop solution for financial planning, investments, and wealth management services. Build a secure financial future with expert guidance.
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-black font-semibold px-8 py-3">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
            </div>
        
      </motion.div>
    </AuroraBackground>
  );
}
