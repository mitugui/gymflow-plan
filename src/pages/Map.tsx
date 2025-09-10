import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AngularCard } from "@/components/ui/angular-card";
import { MapPin, Search, Filter, Clock, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Map = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const academies = [
    {
      id: 1,
      name: "PowerFit Academia",
      address: "Rua das Flores, 123",
      distance: "0.5 km",
      classes: [
        { name: "Spinning", time: "18:00", spots: "8/15" },
        { name: "CrossFit", time: "19:30", spots: "12/20" }
      ]
    },
    {
      id: 2,
      name: "Strong Gym",
      address: "Av. Principal, 456",
      distance: "1.2 km", 
      classes: [
        { name: "Yoga", time: "17:00", spots: "5/12" },
        { name: "Pilates", time: "20:00", spots: "3/10" }
      ]
    },
    {
      id: 3,
      name: "Fitness Center",
      address: "Rua do Esporte, 789",
      distance: "2.1 km",
      classes: [
        { name: "Zumba", time: "18:30", spots: "15/15" },
        { name: "Muay Thai", time: "19:00", spots: "6/16" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="clip-angular bg-card p-6 shadow-card">
        <h1 className="text-2xl font-bold text-foreground text-center">
          Encontre sua <span className="text-primary">Aula</span>
        </h1>
      </div>

      {/* Search and Filters */}
      <div className="p-4 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Buscar academia ou aula..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-card border-border"
          />
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1">
            <Filter className="w-4 h-4 mr-2" />
            Filtros
          </Button>
          <Button variant="outline" size="sm">
            <Clock className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Mock Map Area */}
      <div className="mx-4 mb-4 h-48 clip-card bg-gradient-card flex items-center justify-center">
        <div className="text-center space-y-2">
          <MapPin className="w-8 h-8 text-primary mx-auto" />
          <p className="text-foreground/80">Mapa Interativo</p>
          <p className="text-sm text-muted-foreground">Academias próximas</p>
        </div>
      </div>

      {/* Academies List */}
      <div className="px-4 pb-20 space-y-4">
        <h2 className="text-lg font-semibold text-foreground">
          Academias Próximas
        </h2>
        
        {academies.map((academy) => (
          <AngularCard key={academy.id} variant="gradient" className="p-4 space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-foreground">{academy.name}</h3>
                <p className="text-sm text-muted-foreground">{academy.address}</p>
                <p className="text-xs text-primary font-medium">{academy.distance}</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm font-medium text-foreground">Próximas Aulas:</p>
              {academy.classes.map((classItem, index) => (
                <div key={index} className="flex justify-between items-center p-2 bg-background/20 rounded clip-card">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="font-medium text-foreground">{classItem.name}</span>
                    <span className="text-sm text-muted-foreground">{classItem.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-foreground">{classItem.spots}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <Button 
              variant="fitness" 
              size="sm" 
              className="w-full"
              onClick={() => navigate("/schedule")}
            >
              Ver Horários
            </Button>
          </AngularCard>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 clip-angular bg-card p-4 shadow-card">
        <div className="flex justify-around">
          <Button variant="ghost" size="sm" onClick={() => navigate("/map")}>
            <MapPin className="w-5 h-5 text-primary" />
          </Button>
          <Button variant="ghost" size="sm" onClick={() => navigate("/schedule")}>
            <Clock className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="sm" onClick={() => navigate("/my-classes")}>
            <Users className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Map;