import { motion } from "framer-motion";
import { MessageCircle, Palette, Code, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/contexts/LanguageContext";
import { useIsTouchDevice } from "@/hooks/useIsTouchDevice";

const steps = [
  {
    number: 1,
    icon: MessageCircle,
    titleKey: "process.step1.title",
    descKey: "process.step1.description",
    color: "from-[#82175D] to-[#8B3E73]",
    bgColor: "bg-[#82175D]/10",
  },
  {
    number: 2,
    icon: Palette,
    titleKey: "process.step2.title",
    descKey: "process.step2.description",
    color: "from-[#8B3E73] to-[#9D4F88]",
    bgColor: "bg-[#8B3E73]/10",
  },
  {
    number: 3,
    icon: Code,
    titleKey: "process.step3.title",
    descKey: "process.step3.description",
    color: "from-[#9D4F88] to-[#B0609D]",
    bgColor: "bg-[#9D4F88]/10",
  },
  {
    number: 4,
    icon: Rocket,
    titleKey: "process.step4.title",
    descKey: "process.step4.description",
    color: "from-[#B0609D] to-[#C371B2]",
    bgColor: "bg-[#B0609D]/10",
  },
];

export function Process() {
  const { t } = useTranslation();
  const isTouchDevice = useIsTouchDevice();

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
    <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#82175D]/10 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#8B3E73]/10 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-[#82175D]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
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
            className="w-24 h-1 bg-gradient-to-r from-[#82175D] to-[#8B3E73] mx-auto rounded-full mb-6"
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

        {/* Process Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line for all devices */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#82175D] via-[#8B3E73] to-[#9D4F88] opacity-50" />

            {/* Start indicator */}
            <div className="absolute left-8 top-0 transform -translate-x-1/2 -translate-y-2">
              <div className="w-4 h-4 bg-[#82175D] rounded-full border-2 border-background shadow-md"></div>
            </div>

            {/* End indicator */}
            <div className="absolute left-8 bottom-0 transform -translate-x-1/2 translate-y-2">
              <div className="w-4 h-4 bg-gradient-to-br from-[#B0609D] to-[#C371B2] rounded-full border-2 border-background shadow-md"></div>
            </div>

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  className="relative mb-16 last:mb-0"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline node */}
                  <div className="absolute left-8 top-8 transform -translate-x-1/2">
                    <motion.div
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg border-4 border-background`}
                      whileHover={
                        !isTouchDevice ? { scale: 1.1, rotate: 5 } : undefined
                      }
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>

                  {/* Content card */}
                  <motion.div
                    className="ml-20"
                    whileHover={!isTouchDevice ? { y: -8 } : undefined}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className={`${step.bgColor} backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl`}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className={`w-8 h-8 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-sm`}
                        >
                          {step.number}
                        </div>
                        <h3 className="text-2xl font-bold text-foreground">
                          {t(step.titleKey)}
                        </h3>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {t(step.descKey)}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
