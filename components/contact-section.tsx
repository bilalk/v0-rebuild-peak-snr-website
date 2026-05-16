'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Linkedin, MessageCircle, Send } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const data = await response.json();
      console.log('Message sent successfully:', data);
      
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message. Please try again.');
      console.error('Contact form error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section 
      id="contact"
      className="relative w-full py-20 md:py-32 bg-card/30"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Get in <span className="text-accent">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Connect with our team to discuss your signal processing needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* LinkedIn */}
            <Card className="bg-background border-border hover:border-primary/50 transition-all p-8 text-center hover:shadow-lg hover:shadow-primary/20">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Linkedin className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="font-bold mb-2 text-foreground">LinkedIn</h3>
              <p className="text-sm text-muted-foreground mb-4">Connect with our team professionally</p>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 font-semibold text-sm transition-colors"
              >
                Visit Profile →
              </a>
            </Card>

            {/* Discord */}
            <Card className="bg-background border-border hover:border-primary/50 transition-all p-8 text-center hover:shadow-lg hover:shadow-primary/20">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <MessageCircle className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="font-bold mb-2 text-foreground">Discord</h3>
              <p className="text-sm text-muted-foreground mb-4">Join our community and technical discussions</p>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 font-semibold text-sm transition-colors"
              >
                Join Server →
              </a>
            </Card>

            {/* WhatsApp Business */}
            <Card className="bg-background border-border hover:border-primary/50 transition-all p-8 text-center hover:shadow-lg hover:shadow-primary/20">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Send className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="font-bold mb-2 text-foreground">WhatsApp Business</h3>
              <p className="text-sm text-muted-foreground mb-4">Quick message for immediate responses</p>
              <a
                href="https://wa.me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 font-semibold text-sm transition-colors"
              >
                Start Chat →
              </a>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-background border-border p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-8 text-foreground">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-card border-border text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="bg-card border-border text-foreground placeholder:text-muted-foreground"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={5}
                  required
                  className="w-full bg-card border border-border rounded-lg px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              {error && (
                <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-500 text-sm">
                  {error}
                </div>
              )}

              {submitted && (
                <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg text-green-500 text-sm">
                  Thank you! Your message has been sent. We&apos;ll get back to you soon.
                </div>
              )}

              <Button 
                type="submit"
                disabled={loading || submitted}
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : submitted ? 'Message Sent! ✓' : 'Send Message'}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
