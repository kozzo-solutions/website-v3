import { motion } from "framer-motion";
import { Code, Paintbrush, Cog, Wrench } from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";

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

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
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

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="group p-8 bg-muted/50 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="w-16 h-16 bg-[#82175D]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <Icon className="h-8 w-8 text-[#82175D]" />
                </motion.div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
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
