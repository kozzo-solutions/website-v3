import { motion } from "framer-motion";
import { useTranslation } from "@/contexts/LanguageContext";
import etienneImg from "@assets/etienne.png";
import jonathanImg from "@assets/jonathan.png";

export function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t("about-us.about-us-title")}
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-[#82175D] mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Company Story */}
          <div className="text-center mb-16">
            <motion.p
              className="text-xl text-muted-foreground leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t("about-us.kozzo-history")}
            </motion.p>
            <motion.p
              className="text-lg text-muted-foreground leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {t("about-us.kozzo-description")}
            </motion.p>
            <motion.p
              className="text-2xl font-semibold text-[#82175D]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {t("about-us.together")}
            </motion.p>
          </div>

          {/* Team Members */}
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Étienne */}
            <motion.div
              className="text-center group"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative mb-6 inline-block">
                <motion.img
                  src={etienneImg}
                  alt="Étienne Arsenault"
                  className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-background shadow-xl group-hover:scale-105 transition-transform duration-300"
                  whileHover={{ scale: 1.05 }}
                />
                <div className="absolute inset-0 rounded-full bg-[#82175D]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Étienne Arsenault
              </h3>
              <p className="text-[#82175D] font-semibold mb-4">
                {t("about-us.co-owner-title")}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t("about-us.etienne-description")}
              </p>
            </motion.div>

            {/* Jonathan */}
            <motion.div
              className="text-center group"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="relative mb-6 inline-block">
                <motion.img
                  src={jonathanImg}
                  alt="Jonathan Bessette"
                  className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-background shadow-xl group-hover:scale-105 transition-transform duration-300"
                  whileHover={{ scale: 1.05 }}
                />
                <div className="absolute inset-0 rounded-full bg-[#82175D]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Jonathan Bessette
              </h3>
              <p className="text-[#82175D] font-semibold mb-4">
                {t("about-us.co-owner-title")}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t("about-us.jonathan-description")}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
