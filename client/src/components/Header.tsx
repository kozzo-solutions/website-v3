import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/contexts/LanguageContext";
import kozzoLogoNomCoul from "@assets/kozzo-logo-nom-coul.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, currentLanguage, toggleLanguage } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b shadow-sm"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src={kozzoLogoNomCoul}
              alt="Kozzo Logo"
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-muted-foreground hover:text-[#82175D] transition-colors duration-200"
            >
              {t("header.services")}
            </button>
            <button
              onClick={() => scrollToSection("realisations")}
              className="text-muted-foreground hover:text-[#82175D] transition-colors duration-200"
            >
              {t("header.realisations")}
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-[#82175D] transition-colors duration-200"
            >
              {t("header.about")}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-[#82175D] transition-colors duration-200"
            >
              {t("header.contact")}
            </button>

            {/* Language Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="border-[#82175D] text-[#82175D] hover:bg-[#82175D] hover:text-white"
            >
              {currentLanguage === "fr" ? "EN" : "FR"}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 mt-4">
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-muted-foreground hover:text-[#82175D] transition-colors duration-200"
              >
                {t("header.services")}
              </button>
              <button
                onClick={() => scrollToSection("realisations")}
                className="text-left text-muted-foreground hover:text-[#82175D] transition-colors duration-200"
              >
                {t("header.realisations")}
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-muted-foreground hover:text-[#82175D] transition-colors duration-200"
              >
                {t("header.about")}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-muted-foreground hover:text-[#82175D] transition-colors duration-200"
              >
                {t("header.contact")}
              </button>
              <Button
                variant="outline"
                size="sm"
                onClick={toggleLanguage}
                className="w-fit border-[#82175D] text-[#82175D] hover:bg-[#82175D] hover:text-white"
              >
                {currentLanguage === "fr" ? "EN" : "FR"}
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
