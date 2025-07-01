import { motion } from "framer-motion";
import { Mail, Clock, HandHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "@/contexts/LanguageContext";

export function Contact() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string().required(t("contact-us.name-error")),
    email: Yup.string()
      .email(t("contact-us.email-error-invalid"))
      .required(t("contact-us.email-error-required")),
    businessName: Yup.string().required(t("contact-us.business-error")),
    object: Yup.string().required(t("contact-us.object-error")),
    message: Yup.string().required(t("contact-us.message-error")),
  });

  const handleSubmit = (values: any, { resetForm }: any) => {
    // Create enhanced message with business name
    const enhancedMessage = values.businessName
      ? `Nom de l'entreprise: ${values.businessName}\n\n${values.message}`
      : values.message;

    // Prepare data for EmailJS
    const emailData = {
      ...values,
      message: enhancedMessage,
    };

    emailjs
      .send(
        "service_6maspdm", // Replace with your new service ID
        "template_ug3phe3", // EmailJS template ID
        emailData, // Enhanced form data
        "WPG3CZRXZ1sDXegYH" // EmailJS user ID
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        toast({
          title: "Message envoyé!",
          description: t("contact-us.confirmation-message"),
        });
        setIsSubmitted(true);
        resetForm();
      })
      .catch((error) => {
        console.error("FAILED...", error);
        toast({
          variant: "destructive",
          title: "Erreur",
          description: "Une erreur est survenue lors de l'envoi du message.",
        });
      });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t("contact-us.contact-us-title")}
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-[#82175D] mx-auto rounded-full mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <motion.p
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {t("contact-us.need-help")}
            <span className="text-[#82175D] font-semibold ml-1">
              {t("contact-us.contact-us-now")}
            </span>
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">
                {t("contact-us.stay-connected")}
              </h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#82175D]/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-[#82175D]" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-muted-foreground">admin@kozzo.ca</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#82175D]/10 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-[#82175D]" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {t("contact-us.response-time-label")}
                    </p>
                    <p className="text-muted-foreground">
                      {t("contact-us.response-time")}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#82175D]/10 rounded-lg flex items-center justify-center">
                    <HandHeart className="h-6 w-6 text-[#82175D]" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {t("contact-us.consultation-label")}
                    </p>
                    <p className="text-muted-foreground">
                      {t("contact-us.consultation")}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-muted/50 border-border">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    {t("contact-us.how-can-we-help")}
                  </h3>

                  <Formik
                    initialValues={{
                      name: "",
                      email: "",
                      businessName: "",
                      object: "",
                      message: "",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                    validateOnChange={false}
                    validateOnBlur={false}
                  >
                    {({ isSubmitting }) => (
                      <Form className="space-y-6">
                        {/* Name Field */}
                        <div>
                          <Label
                            htmlFor="name"
                            className="text-sm font-semibold text-foreground"
                          >
                            {t("contact-us.name-label")}
                          </Label>
                          <Field
                            as={Input}
                            id="name"
                            name="name"
                            type="text"
                            placeholder={t("contact-us.name-label")}
                            className="mt-2"
                          />
                          <ErrorMessage
                            name="name"
                            component="p"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>

                        {/* Email Field */}
                        <div>
                          <Label
                            htmlFor="email"
                            className="text-sm font-semibold text-foreground"
                          >
                            {t("contact-us.email-label")}
                          </Label>
                          <Field
                            as={Input}
                            id="email"
                            name="email"
                            type="email"
                            placeholder={t("contact-us.email-label")}
                            className="mt-2"
                          />
                          <ErrorMessage
                            name="email"
                            component="p"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>

                        {/* Business Name Field */}
                        <div>
                          <Label
                            htmlFor="businessName"
                            className="text-sm font-semibold text-foreground"
                          >
                            {t("contact-us.business-label")}
                          </Label>
                          <Field
                            as={Input}
                            id="businessName"
                            name="businessName"
                            type="text"
                            placeholder={t("contact-us.business-label")}
                            className="mt-2"
                          />
                          <ErrorMessage
                            name="businessName"
                            component="p"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>

                        {/* Subject Field */}
                        <div>
                          <Label
                            htmlFor="object"
                            className="text-sm font-semibold text-foreground"
                          >
                            {t("contact-us.object-label")}
                          </Label>
                          <Field
                            as={Input}
                            id="object"
                            name="object"
                            type="text"
                            placeholder={t("contact-us.object-placeholder")}
                            className="mt-2"
                          />
                          <ErrorMessage
                            name="object"
                            component="p"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>

                        {/* Message Field */}
                        <div>
                          <Label
                            htmlFor="message"
                            className="text-sm font-semibold text-foreground"
                          >
                            {t("contact-us.message-label")}
                          </Label>
                          <Field
                            as={Textarea}
                            id="message"
                            name="message"
                            rows={4}
                            placeholder={t("contact-us.message-placeholder")}
                            className="mt-2 resize-none"
                          />
                          <ErrorMessage
                            name="message"
                            component="p"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>

                        {/* Submit Button */}
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-[#82175D] hover:bg-[#8B3E73] text-white font-semibold px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                          {isSubmitting
                            ? t("contact-us.sending")
                            : t("contact-us.submit-button")}
                        </Button>
                      </Form>
                    )}
                  </Formik>

                  {isSubmitted && (
                    <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800 text-sm">
                        {t("contact-us.confirmation-message")}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
