import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Import service images
import customDevelopmentImg from "@/assets/custom-development.jpg";
import dataAnalyticsImg from "@/assets/data-analytics.jpg";
import cloudSolutionsImg from "@/assets/cloud-solutions.jpg";
import mobileAppsImg from "@/assets/mobile-apps.jpg";
import securitySolutionsImg from "@/assets/security-solutions.jpg";
import performanceOptimizationImg from "@/assets/performance-optimization.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Welcome to <span className="text-accent">KESHAVSOFT</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Innovative Software Solutions for Modern Businesses
            </p>
            <p className="text-lg mb-8 text-primary-foreground/80">
              Transform your business with cutting-edge technology, custom software development, and digital solutions that drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Get Started Today
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive software solutions tailored to meet your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={customDevelopmentImg} 
                  alt="Custom Development" 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Custom Development</CardTitle>
                <CardDescription>
                  Tailored software solutions built from the ground up to meet your specific business requirements.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={dataAnalyticsImg} 
                  alt="Data Analytics" 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Data Analytics</CardTitle>
                <CardDescription>
                  Advanced analytics and business intelligence solutions to help you make data-driven decisions.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={cloudSolutionsImg} 
                  alt="Cloud Solutions" 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Cloud Solutions</CardTitle>
                <CardDescription>
                  Scalable cloud infrastructure and migration services to modernize your business operations.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={mobileAppsImg} 
                  alt="Mobile Apps" 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Mobile Apps</CardTitle>
                <CardDescription>
                  Native and cross-platform mobile applications that deliver exceptional user experiences.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={securitySolutionsImg} 
                  alt="Security Solutions" 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Security Solutions</CardTitle>
                <CardDescription>
                  Comprehensive cybersecurity services to protect your digital assets and ensure compliance.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={performanceOptimizationImg} 
                  alt="Performance Optimization" 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Performance Optimization</CardTitle>
                <CardDescription>
                  Optimize your existing systems for better performance, scalability, and user experience.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Let's discuss how KESHAVSOFT can help you achieve your digital goals
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
            Start Your Project
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
