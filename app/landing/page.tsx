import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Brain, Shield, Users, Star, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-primary-foreground rounded-full flex items-center justify-center">
                <div className="w-3 h-4 bg-primary rounded-full"></div>
              </div>
            </div>
            <span className="text-2xl font-bold text-primary">DermAI</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#testimonials" className="text-foreground hover:text-primary transition-colors">
              Reviews
            </Link>
            <Link href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <Link href="/">
              <Button variant="outline" size="sm">
                Admin Login
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-muted/50 to-background">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-balance mb-6">
            Connect with Trusted <span className="text-primary">Dermatologists</span> Anytime, Anywhere
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            AI-powered solutions for your skin health. Get expert consultations, accurate diagnoses, and personalized
            treatment plans from certified dermatologists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose DermAI?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced AI technology combined with expert dermatological care for comprehensive skin health solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">AI-Powered Diagnosis</h3>
                <p className="text-muted-foreground">
                  Advanced machine learning algorithms analyze skin conditions with 95% accuracy, providing instant
                  preliminary assessments.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Expert Consultations</h3>
                <p className="text-muted-foreground">
                  Connect with board-certified dermatologists for personalized treatment plans and professional medical
                  advice.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Secure & Private</h3>
                <p className="text-muted-foreground">
                  HIPAA-compliant platform ensuring your medical information remains confidential and secure at all
                  times.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">12,847</div>
              <div className="text-muted-foreground">Patients Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">247</div>
              <div className="text-muted-foreground">Expert Dermatologists</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">8,934</div>
              <div className="text-muted-foreground">Consultations Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Diagnostic Accuracy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Patients Say</h2>
            <p className="text-xl text-muted-foreground">
              Real experiences from people who trust DermAI with their skin health.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "DermAI helped me identify a concerning mole that turned out to be early-stage melanoma. The quick
                  diagnosis potentially saved my life."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-muted rounded-full"></div>
                  <div>
                    <div className="font-semibold">Sarah Johnson</div>
                    <div className="text-sm text-muted-foreground">Patient</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "As a busy parent, DermAI's convenience is unmatched. I can get expert advice for my family's skin
                  concerns without leaving home."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-muted rounded-full"></div>
                  <div>
                    <div className="font-semibold">Michael Chen</div>
                    <div className="text-sm text-muted-foreground">Parent</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "The AI analysis was incredibly accurate and the follow-up consultation with a dermatologist gave me
                  peace of mind about my treatment plan."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-muted rounded-full"></div>
                  <div>
                    <div className="font-semibold">Emma Wilson</div>
                    <div className="text-sm text-muted-foreground">Patient</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Take Control of Your Skin Health?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of patients who trust DermAI for their dermatological needs.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input placeholder="Enter your email" className="bg-primary-foreground text-foreground border-0" />
              <Button variant="secondary" size="lg" className="whitespace-nowrap">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-muted/30 border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <div className="w-5 h-5 bg-primary-foreground rounded-full flex items-center justify-center">
                    <div className="w-2 h-3 bg-primary rounded-full"></div>
                  </div>
                </div>
                <span className="text-xl font-bold text-primary">DermAI</span>
              </div>
              <p className="text-muted-foreground">
                AI-powered dermatology platform connecting patients with expert care.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>AI Skin Analysis</li>
                <li>Expert Consultations</li>
                <li>Treatment Plans</li>
                <li>Follow-up Care</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>HIPAA Compliance</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 DermAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
