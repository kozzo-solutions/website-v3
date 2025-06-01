import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";

const steps = [
  {
    number: 1,
    titleKey: "process.step1.title",
    descKey: "process.step1.description",
  },
  {
    number: 2,
    titleKey: "process.step2.title",
    descKey: "process.step2.description",
  },
  {
    number: 3,
    titleKey: "process.step3.title",
    descKey: "process.step3.description",
  },
];

export function Process() {
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

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t("process.title")}
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-[#A4508B] mx-auto rounded-full mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {t("process.subtitle")}
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection lines for desktop */}
            <div className="hidden md:block absolute top-16 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-[#A4508B] via-[#A4508B] to-[#A4508B] opacity-30" />
            
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-6">
                  <motion.div
                    className="w-20 h-20 bg-[#A4508B] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg"
                    whileHover={{ rotate: 5 }}
                  >
                    {step.number}
                  </motion.div>
                  <motion.div
                    className="absolute -top-2 -right-2 w-6 h-6 bg-[#B866A0] rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {t(step.titleKey)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(step.descKey)}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-to-r from-[#A4508B] to-[#8B3E73] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {t("process.cta")}
                <Rocket className="ml-3 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
