import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import gymHero from "@/assets/gym-hero.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // For demo purposes, just navigate to map
    navigate("/map");
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${gymHero})` }}
      />
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-md space-y-8">
          {/* Hero Text */}
          <div className="text-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-foreground tracking-tight">
                Agenda
                <span className="text-primary block">Inteligente</span>
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto clip-angular"></div>
            </div>
            <p className="text-lg text-foreground/90 font-medium">
              Treine no seu ritmo,<br />
              <span className="text-primary">sem filas e sem lotação</span>
            </p>
          </div>

          {/* Login Form */}
          <div className="clip-card bg-card/95 backdrop-blur-sm p-8 space-y-6 shadow-card">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-medium">
                  E-mail
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-background/50 border-border focus:border-primary transition-smooth"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-foreground font-medium">
                  Senha
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-background/50 border-border focus:border-primary transition-smooth"
                />
              </div>
            </div>

            <Button 
              onClick={handleLogin}
              variant="hero" 
              size="hero" 
              className="w-full"
            >
              Entrar
            </Button>

            <div className="text-center space-y-2">
              <button className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Esqueci minha senha
              </button>
              <div className="text-sm text-muted-foreground">
                Não tem conta?{" "}
                <button className="text-primary hover:text-primary/80 font-medium transition-smooth">
                  Cadastre-se
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;