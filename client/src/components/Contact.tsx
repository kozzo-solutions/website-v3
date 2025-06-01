import { motion } from "framer-motion";
import { Mail, Clock, HandHeart, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "@/hooks/useTranslation";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";

export function Contact() {
  const { t } = useTranslation();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      name: "",
      email: "",
      businessName: "",
      subject: "",
      message: "",
    },
  });

  const submitContactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message envoyé!",
        description: t("contact-us.confirmation-message"),
      });
      reset();
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi du message.",
      });
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    submitContactMutation.mutate(data);
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
            className="w-24 h-1 bg-[#A4508B] mx-auto rounded-full mb-6"
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
            <span className="text-[#A4508B] font-semibold ml-1">
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
                  <div className="w-12 h-12 bg-[#A4508B]/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-[#A4508B]" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-muted-foreground">admin@kozzo.ca</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#A4508B]/10 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-[#A4508B]" />
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
                  <div className="w-12 h-12 bg-[#A4508B]/10 rounded-lg flex items-center justify-center">
                    <HandHeart className="h-6 w-6 text-[#A4508B]" />
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
                  
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name Field */}
                    <div>
                      <Label htmlFor="name" className="text-sm font-semibold text-foreground">
                        {t("contact-us.name-label")}
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder={t("contact-us.name-label")}
                        className="mt-2"
                        {...register("name")}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">
                          {t("contact-us.name-error")}
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <Label htmlFor="email" className="text-sm font-semibold text-foreground">
                        {t("contact-us.email-label")}
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder={t("contact-us.email-label")}
                        className="mt-2"
                        {...register("email")}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {t("contact-us.email-error-required")}
                        </p>
                      )}
                    </div>

                    {/* Business Name Field */}
                    <div>
                      <Label htmlFor="businessName" className="text-sm font-semibold text-foreground">
                        {t("contact-us.business-label")}
                      </Label>
                      <Input
                        id="businessName"
                        type="text"
                        placeholder={t("contact-us.business-label")}
                        className="mt-2"
                        {...register("businessName")}
                      />
                    </div>

                    {/* Subject Field */}
                    <div>
                      <Label htmlFor="subject" className="text-sm font-semibold text-foreground">
                        {t("contact-us.object-label")}
                      </Label>
                      <Input
                        id="subject"
                        type="text"
                        placeholder={t("contact-us.object-placeholder")}
                        className="mt-2"
                        {...register("subject")}
                      />
                      {errors.subject && (
                        <p className="text-red-500 text-sm mt-1">
                          {t("contact-us.object-error")}
                        </p>
                      )}
                    </div>

                    {/* Message Field */}
                    <div>
                      <Label htmlFor="message" className="text-sm font-semibold text-foreground">
                        {t("contact-us.message-label")}
                      </Label>
                      <Textarea
                        id="message"
                        rows={4}
                        placeholder={t("contact-us.message-placeholder")}
                        className="mt-2 resize-none"
                        {...register("message")}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">
                          {t("contact-us.message-error")}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={submitContactMutation.isPending}
                      className="w-full bg-[#A4508B] hover:bg-[#8B3E73] text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      {submitContactMutation.isPending ? (
                        "Envoi en cours..."
                      ) : (
                        <>
                          {t("contact-us.submit-button")}
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
