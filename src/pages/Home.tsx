import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, FileText, Star, Zap, Target, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: BrainCircuit,
      title: "AI-Powered Career Guidance",
      description: "Get personalized career advice from our advanced RAG-based AI assistant"
    },
    {
      icon: FileText,
      title: "Smart Resume Analysis",
      description: "Match your resume against job requirements with intelligent scoring"
    },
    {
      icon: Target,
      title: "Industry Insights",
      description: "Access current market trends and skill requirements for your field"
    },
    {
      icon: Zap,
      title: "Real-time Recommendations",
      description: "Receive instant, contextual advice tailored to your career stage"
    },
    {
      icon: Star,
      title: "Expert Knowledge Base",
      description: "Benefit from curated best practices and professional strategies"
    },
    {
      icon: Shield,
      title: "Trusted & Secure",
      description: "Your career data is protected with enterprise-grade security"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                AI-Powered Career
              </span>
              <br />
              <span className="text-foreground">Assistant & Resume Matcher</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your career journey with intelligent guidance, personalized recommendations, 
              and advanced resume analysis powered by cutting-edge AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => navigate("/assistant")}
                className="group"
              >
                <BrainCircuit className="h-6 w-6 group-hover:animate-pulse" />
                Start AI Assistant
              </Button>
              <Button 
                variant="glass" 
                size="xl"
                onClick={() => navigate("/resume-matcher")}
                className="group"
              >
                <FileText className="h-6 w-6 group-hover:animate-pulse" />
                Analyze Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Powerful Features for Your Career Success
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive platform combines AI intelligence with industry expertise 
              to accelerate your professional growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="group bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-elegant transition-all duration-300 hover:transform hover:scale-105"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-gradient-primary rounded-full w-fit shadow-elegant group-hover:shadow-glow transition-all duration-300">
                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
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

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-primary rounded-3xl p-8 md:p-12 shadow-glow">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Accelerate Your Career?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have transformed their careers with our AI-powered platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="glass" 
                size="xl"
                onClick={() => navigate("/assistant")}
                className="text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20"
              >
                Get Career Guidance
              </Button>
              <Button 
                variant="secondary" 
                size="xl"
                onClick={() => navigate("/resume-matcher")}
              >
                Analyze Your Resume
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};