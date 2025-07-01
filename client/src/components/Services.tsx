import { motion } from "framer-motion";
import { Code, Paintbrush, Cog, Wrench } from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";
import { useIsTouchDevice } from "@/hooks/useIsTouchDevice";

const services = [
  {
    icon: Code,
    titleKey: "services.web-design-code-title",
    descKey: "services.web-design-code-desc",
  },
  {
    icon: Paintbrush,
    titleKey: "services.web-design-no-code-title",
    descKey: "services.web-design-no-code-desc",
  },
  {
    icon: Cog,
    titleKey: "services.software-solutions-title",
    descKey: "services.software-solutions-desc",
  },
  {
    icon: Wrench,
    titleKey: "services.service-maintenance-title",
    descKey: "services.service-maintenance-desc",
  },
];

export function Services() {
  const { t } = useTranslation();
  const isTouchDevice = useIsTouchDevice();

  return (
    <section id="services" className="py-20 bg-background">
      {" "}
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t("services.title")}
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-[#82175D] mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="group p-6 sm:p-8 bg-muted/50 rounded-2xl border border-border"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={
                  !isTouchDevice
                    ? {
                        scale: 1.03,
                        y: -8,
                        boxShadow:
                          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                        transition: { duration: 0.2, ease: "easeOut" },
                      }
                    : undefined
                }
              >
                <motion.div
                  className="w-16 h-16 bg-[#82175D]/10 rounded-xl flex items-center justify-center mb-6"
                  whileHover={
                    !isTouchDevice ? { scale: 1.1, rotate: 5 } : undefined
                  }
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <Icon
                    className={`h-8 w-8 text-[#82175D] ${
                      !isTouchDevice
                        ? "group-hover:text-[#8B3E73] transition-colors duration-200"
                        : ""
                    }`}
                  />
                </motion.div>
                <h3
                  className={`text-2xl font-bold text-foreground mb-4 ${
                    !isTouchDevice
                      ? "group-hover:text-[#82175D] transition-colors duration-200"
                      : ""
                  }`}
                >
                  {t(service.titleKey)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(service.descKey)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
