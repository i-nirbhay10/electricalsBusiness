"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { submitContactForm } from "@/app/actions/contact";
import { useToast } from "@/hooks/use-toast";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  async function handleSubmit(formData: FormData) {
    console.log("hit handleSubmit");

    setIsSubmitting(true);

    try {
      setIsSubmitting(true);
      const result = await submitContactForm(formData);

      if (result.success) {
        toast({
          title: "Message Sent!",
          description:
            "Thank you for contacting us. We'll get back to you within 24 hours.",
        });
        // Reset form
        const form = document.getElementById("contact-form") as HTMLFormElement;
        form?.reset();
      } else {
        toast({
          title: "Error",
          description:
            result.error || "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form id="contact-form" action={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Name *</Label>
          <Input id="name" name="name" required placeholder="Your full name" />
        </div>
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="your.email@example.com"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="phone">Phone Number *</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="(555) 123-4567"
        />
      </div>

      <div>
        <Label htmlFor="service">Service Needed</Label>
        <Select name="service">
          <SelectTrigger>
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="appliance-repair">Appliance Repair</SelectItem>
            <SelectItem value="installation">Installation Services</SelectItem>
            <SelectItem value="maintenance">Preventive Maintenance</SelectItem>
            <SelectItem value="wiring">Wiring & Rewiring</SelectItem>
            <SelectItem value="emergency">Emergency Repair</SelectItem>
            <SelectItem value="consulting">
              Energy Efficiency Consulting
            </SelectItem>
            <SelectItem value="parts">Spare Parts & Accessories</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Please describe your electrical issue or service needs..."
          rows={5}
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>

      <p className="text-sm text-gray-600">
        * Required fields. We'll respond within 24 hours. For emergencies,
        please call (555) 123-4567.
      </p>
    </form>
  );
}
