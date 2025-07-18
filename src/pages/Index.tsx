import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Stethoscope, 
  Shield, 
  Clock, 
  Users, 
  MessageCircle, 
  Heart,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Phone
} from "lucide-react";
import heroImage from "@/assets/hero-medical.png";
import { ChatInterface } from "@/components/ChatInterface";

const Index = () => {
  const [showChat, setShowChat] = useState(false);

  if (showChat) {
    return <ChatInterface onBack={() => setShowChat(false)} />;
  }

  const features = [
    {
      icon: Stethoscope,
      title: "Medical Guidance",
      description: "Get reliable health information and general medical guidance powered by advanced AI"
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your conversations are private and secure. We prioritize your health data protection"
    },
    {
      icon: Clock,
      title: "24/7 Available",
      description: "Access health guidance anytime, anywhere. No appointments needed"
    },
    {
      icon: Users,
      title: "Professional Support",
      description: "AI trained on medical knowledge to provide accurate and helpful responses"
    }
  ];

  const quickTopics = [
    "Cold & Flu Symptoms",
    "First Aid Guidelines", 
    "Medication Information",
    "Nutrition Advice",
    "Exercise & Wellness",
    "Mental Health Support"
  ];

  return (
    <div className="min-h-screen bg-gradient-chat">
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Stethoscope className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">MediChat AI</span>
          </div>
          <Button 
            variant="outline"
            onClick={() => setShowChat(true)}
            className="hidden md:flex"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Start Chat
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                <Heart className="h-3 w-3 mr-1" />
                Trusted Medical AI Assistant
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Your Personal
                <span className="text-primary block">Medical Assistant</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Get instant, reliable medical guidance and health advice from our AI-powered assistant. 
                Available 24/7 to help with your health questions and concerns.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => setShowChat(true)}
                  className="bg-gradient-hero shadow-medical hover:shadow-glow transition-all duration-300"
                >
                  Get Started Now
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg">
                  <Phone className="h-5 w-5 mr-2" />
                  Emergency? Call 911
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Medical consultation" 
                className="rounded-2xl shadow-medical w-full h-auto animate-fade-in"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose MediChat AI?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced AI technology meets healthcare expertise to provide you with reliable, 
              accessible medical guidance whenever you need it.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-chat hover:shadow-medical transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Topics */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Popular Health Topics
            </h2>
            <p className="text-xl text-muted-foreground">
              Quick access to common health questions and medical guidance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {quickTopics.map((topic, index) => (
              <Card 
                key={index}
                className="cursor-pointer hover:shadow-medical transition-all duration-300 border-primary/20 hover:border-primary/40"
                onClick={() => setShowChat(true)}
              >
                <CardContent className="p-4 flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-medical-success flex-shrink-0" />
                  <span className="font-medium text-foreground">{topic}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-16 px-4 bg-accent/30">
        <div className="container mx-auto">
          <Card className="border-medical-warning/30 bg-gradient-card">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="h-6 w-6 text-medical-warning mt-1 flex-shrink-0" />
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    Important Medical Disclaimer
                  </h3>
                  <div className="space-y-2 text-muted-foreground leading-relaxed">
                    <p>
                      <strong>This AI assistant provides general health information and guidance only.</strong> 
                      It is not a substitute for professional medical advice, diagnosis, or treatment.
                    </p>
                    <p>
                      Always consult with a qualified healthcare provider for medical concerns. 
                      In case of emergency, call your local emergency number immediately.
                    </p>
                    <p>
                      The information provided should not be used for diagnosing or treating medical conditions.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Health Guidance?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Start your conversation with our AI medical assistant today. 
            Get reliable health information in a safe, private environment.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={() => setShowChat(true)}
            className="shadow-glow animate-pulse-glow"
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            Start Your Health Chat
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t bg-card">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Stethoscope className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold text-foreground">MediChat AI</span>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 MediChat AI. Providing reliable health guidance through advanced AI technology.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
