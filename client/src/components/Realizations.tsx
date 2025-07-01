import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import plexViewImg from "@assets/plexview.png";
import streamsbBuddyImg from "@assets/streamsbuddy.png";
import { useTranslation } from "@/contexts/LanguageContext";

const projects = [
  {
    image: plexViewImg,
    categoryKey: "realisations.category.website",
    titleKey: "realisations.project1.title",
    descKey: "realisations.project1.description",
    categoryColor: "bg-[#82175D]/10 text-[#82175D]",
    link: "https://plexview.ca",
  },
  {
    image: streamsbBuddyImg,
    categoryKey: "realisations.category.website",
    titleKey: "realisations.project2.title",
    descKey: "realisations.project2.description",
    categoryColor: "bg-[#82175D]/10 text-[#82175D]",
    link: "https://streamsbuddy.com",
  },
];

export function Realizations() {
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
    <section id="realisations" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t("realisations.title")}
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-[#82175D] mx-auto rounded-full mb-6"
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
            {t("realisations.subtitle")}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-border/50 hover:border-[#82175D]/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              onClick={() => window.open(project.link, "_blank")}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={t(project.titleKey)}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge className={project.categoryColor}>
                    {t(project.categoryKey)}
                  </Badge>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-[#82175D] transition-colors duration-300" />
                  </motion.div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#82175D] transition-colors duration-300">
                  {t(project.titleKey)}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t(project.descKey)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
