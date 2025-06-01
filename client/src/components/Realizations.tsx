import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";

const projects = [
  {
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    categoryKey: "realisations.category.ecommerce",
    titleKey: "realisations.project1.title",
    descKey: "realisations.project1.description",
    tags: ["React", "Node.js", "Stripe"],
    categoryColor: "bg-[#A4508B]/10 text-[#A4508B]",
  },
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    categoryKey: "realisations.category.webapp",
    titleKey: "realisations.project2.title",
    descKey: "realisations.project2.description",
    tags: ["Vue.js", "Python", "PostgreSQL"],
    categoryColor: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
  },
  {
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    categoryKey: "realisations.category.website",
    titleKey: "realisations.project3.title",
    descKey: "realisations.project3.description",
    tags: ["React", "Tailwind", "Framer Motion"],
    categoryColor: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
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
            {t("realisations.subtitle")}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={t(project.titleKey)}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge className={project.categoryColor}>
                    {t(project.categoryKey)}
                  </Badge>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-[#A4508B] transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {t(project.titleKey)}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {t(project.descKey)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Button
              onClick={scrollToContact}
              className="bg-[#A4508B] hover:bg-[#8B3E73] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
            >
              {t("realisations.cta")}
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
