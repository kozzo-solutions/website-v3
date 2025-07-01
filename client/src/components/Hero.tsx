import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/contexts/LanguageContext";
import kozzoSymbol from "@assets/kozzo-symbole-coul.png";

export function Hero() {
  const { t } = useTranslation();

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-background to-[#82175D]/5 overflow-hidden">
      {/* Simple Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-[#82175D]/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-48 h-48 bg-[#82175D]/6 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Content Layout */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
          {/* Left Content - Title, Text, Buttons Only */}
          <div className="col-span-12 lg:col-span-7 space-y-8">
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">
                  {t("top-section.main-sentence").split(" ")[0]}
                </span>
                <br />
                <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                  {t("top-section.main-sentence").split(" ").slice(1).join(" ")}
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              className="text-xl text-white/80 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t("top-section.detailed-sentence")}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-[#82175D] hover:bg-[#8B3E73] text-white font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group"
              >
                {t("top-section.button-text")}
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={scrollToServices}
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl transition-all duration-300"
              >
                {t("services.title")}
              </Button>
            </motion.div>
          </div>

          {/* Right Logo Visual - Hidden on mobile */}
          <div className="hidden lg:flex lg:col-span-5 justify-center lg:justify-end">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {/* Main Logo Container */}
              <motion.div className="relative w-80 h-80 lg:w-96 lg:h-96 flex items-center justify-center">
                {/* Outer Ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-[#82175D]/20"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                {/* Middle Ring */}
                <motion.div
                  className="absolute inset-8 rounded-full border border-[#82175D]/30"
                  animate={{
                    scale: [1, 0.95, 1],
                    rotate: [0, -360],
                  }}
                  transition={{
                    scale: { duration: 6, repeat: Infinity },
                    rotate: { duration: 45, repeat: Infinity, ease: "linear" },
                  }}
                />

                {/* Logo Background */}
                <motion.div
                  className="relative w-48 h-48 lg:w-56 lg:h-56 bg-gradient-to-br from-[#82175D]/10 to-[#82175D]/5 rounded-full backdrop-blur-sm border border-[#82175D]/20 flex items-center justify-center shadow-2xl"
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {/* Logo */}
                  <motion.img
                    src={kozzoSymbol}
                    alt="Kozzo Symbol"
                    className="w-32 h-32 lg:w-40 lg:h-40"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                  />

                  {/* Logo Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#82175D]/20 to-[#82175D]/10 rounded-full blur-xl" />
                </motion.div>

                {/* Floating Dots */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-[#82175D]/40 rounded-full"
                    style={{
                      top: "50%",
                      left: "50%",
                      transformOrigin: `${
                        120 * Math.cos((i * Math.PI) / 4)
                      }px ${120 * Math.sin((i * Math.PI) / 4)}px`,
                    }}
                    animate={{
                      rotate: [0, 360],
                      scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                      rotate: {
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      },
                      scale: { duration: 2, repeat: Infinity, delay: i * 0.25 },
                    }}
                  />
                ))}
              </motion.div>

              {/* Brand Text - Removed */}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
