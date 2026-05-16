'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Linkedin, Youtube, MessageCircle, Facebook } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[PeakSNR Website] Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:kbse2000@gmail.com?subject=${subject}&body=${body}`, '_self');
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 6000);
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {/* Facebook */}
            <Card className="bg-background border-border hover:border-primary/50 transition-all p-6 text-center hover:shadow-lg hover:shadow-primary/20">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Facebook className="h-7 w-7 text-primary" />
                </div>
              </div>
              <h3 className="font-bold mb-1 text-foreground text-sm">Facebook</h3>
              <p className="text-xs text-muted-foreground mb-3">Follow our page for updates</p>
              <a href="https://www.facebook.com/profile.php?id=100065613390944" target="_blank" rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 font-semibold text-xs transition-colors">
                Visit Page &rarr;
              </a>
            </Card>

            {/* LinkedIn */}
            <Card className="bg-background border-border hover:border-primary/50 transition-all p-6 text-center hover:shadow-lg hover:shadow-primary/20">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Linkedin className="h-7 w-7 text-primary" />
                </div>
              </div>
              <h3 className="font-bold mb-1 text-foreground text-sm">LinkedIn</h3>
              <p className="text-xs text-muted-foreground mb-3">Connect professionally</p>
              <a href="https://www.linkedin.com/company/102984111/" target="_blank" rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 font-semibold text-xs transition-colors">
                Visit Profile &rarr;
              </a>
            </Card>

            {/* Discord */}
            <Card className="bg-background border-border hover:border-primary/50 transition-all p-6 text-center hover:shadow-lg hover:shadow-primary/20">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <MessageCircle className="h-7 w-7 text-primary" />
                </div>
              </div>
              <h3 className="font-bold mb-1 text-foreground text-sm">Discord</h3>
              <p className="text-xs text-muted-foreground mb-3">ID: <strong className="text-foreground">kaybee2025</strong></p>
              <a href="https://discord.com/users/kaybee2025" target="_blank" rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 font-semibold text-xs transition-colors">
                Join Chat &rarr;
              </a>
            </Card>

            {/* YouTube */}
            <Card className="bg-background border-border hover:border-primary/50 transition-all p-6 text-center hover:shadow-lg hover:shadow-primary/20">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Youtube className="h-7 w-7 text-primary" />
                </div>
              </div>
              <h3 className="font-bold mb-1 text-foreground text-sm">YouTube</h3>
              <p className="text-xs text-muted-foreground mb-3">Watch our content</p>
              <a href="https://www.youtube.com/@peaksnr5510" target="_blank" rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 font-semibold text-xs transition-colors">
                Subscribe &rarr;
              </a>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-background border-border p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-2 text-foreground">Send us a Message</h3>
            <p className="text-sm text-muted-foreground mb-8">
              Your message will open in your email client addressed to <span className="text-accent">kbse2000@gmail.com</span>
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange}
                    placeholder="Your name" required
                    className="bg-card border-border text-foreground placeholder:text-muted-foreground" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange}
                    placeholder="your@email.com" required
                    className="bg-card border-border text-foreground placeholder:text-muted-foreground" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange}
                  placeholder="Tell us about your project..." rows={5} required
                  className="w-full bg-card border border-border rounded-lg px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
              </div>

              {submitted && (
                <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg text-green-500 text-sm">
                  &#10003; Your email client has opened. Please hit Send to deliver your message to kbse2000@gmail.com
                </div>
              )}

              <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
