import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AngularCard } from "@/components/ui/angular-card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, MapPin, ArrowLeft, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Schedule = () => {
  const navigate = useNavigate();
  const [selectedTime, setSelectedTime] = useState("all");

  const classes = [
    {
      id: 1,
      name: "Spinning",
      instructor: "Carlos Silva",
      time: "18:00",
      duration: "45 min",
      spots: { occupied: 8, total: 15 },
      academy: "PowerFit Academia",
      canReserve: true,
      isFull: false
    },
    {
      id: 2,
      name: "CrossFit",
      instructor: "Ana Santos", 
      time: "19:30",
      duration: "60 min",
      spots: { occupied: 12, total: 20 },
      academy: "PowerFit Academia",
      canReserve: true,
      isFull: false
    },
    {
      id: 3,
      name: "Yoga",
      instructor: "Maria Oliveira",
      time: "17:00", 
      duration: "50 min",
      spots: { occupied: 5, total: 12 },
      academy: "Strong Gym",
      canReserve: true,
      isFull: false
    },
    {
      id: 4,
      name: "Zumba",
      instructor: "João Costa",
      time: "18:30",
      duration: "45 min", 
      spots: { occupied: 15, total: 15 },
      academy: "Fitness Center",
      canReserve: false,
      isFull: true
    },
    {
      id: 5,
      name: "Pilates",
      instructor: "Lucia Ferreira",
      time: "20:00",
      duration: "55 min",
      spots: { occupied: 3, total: 10 },
      academy: "Strong Gym",
      canReserve: true,
      isFull: false
    }
  ];

  const timeFilters = [
    { value: "all", label: "Todos" },
    { value: "morning", label: "Manhã" },
    { value: "afternoon", label: "Tarde" },
    { value: "evening", label: "Noite" }
  ];

  const handleReserve = (classId: number) => {
    // Handle reservation logic here
    console.log("Reserving class:", classId);
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="clip-angular bg-card p-4 shadow-card">
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate("/map")}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-bold text-foreground">
            Agendamento de <span className="text-primary">Aulas</span>
          </h1>
        </div>
      </div>

      {/* Time Filters */}
      <div className="p-4">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {timeFilters.map((filter) => (
            <Button
              key={filter.value}
              variant={selectedTime === filter.value ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTime(filter.value)}
              className="whitespace-nowrap"
            >
              {filter.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Classes List */}
      <div className="px-4 space-y-4">
        {classes.map((classItem) => (
          <AngularCard 
            key={classItem.id} 
            variant="gradient" 
            className="p-4 space-y-4"
          >
            {/* Class Header */}
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-foreground">
                    {classItem.name}
                  </h3>
                  {classItem.isFull && (
                    <Badge variant="destructive" className="text-xs">
                      Lotada
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  {classItem.instructor}
                </p>
              </div>
              
              <div className="text-right">
                <div className="text-xl font-bold text-primary">
                  {classItem.time}
                </div>
                <div className="text-xs text-muted-foreground">
                  {classItem.duration}
                </div>
              </div>
            </div>

            {/* Class Details */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                {classItem.academy}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-foreground">
                    {classItem.spots.occupied}/{classItem.spots.total} vagas
                  </span>
                </div>
                
                <div className="flex items-center gap-1">
                  {Array.from({ length: classItem.spots.total }, (_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full ${
                        i < classItem.spots.occupied 
                          ? 'bg-primary' 
                          : 'bg-muted'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Action Button */}
            <Button
              variant={classItem.canReserve ? "fitness" : "outline"}
              size="sm"
              className="w-full"
              disabled={!classItem.canReserve}
              onClick={() => handleReserve(classItem.id)}
            >
              {classItem.isFull ? "Aula Lotada" : "Reservar Vaga"}
            </Button>
          </AngularCard>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 clip-angular bg-card p-4 shadow-card">
        <div className="flex justify-around">
          <Button variant="ghost" size="sm" onClick={() => navigate("/map")}>
            <MapPin className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="sm" onClick={() => navigate("/schedule")}>
            <Clock className="w-5 h-5 text-primary" />
          </Button>
          <Button variant="ghost" size="sm" onClick={() => navigate("/my-classes")}>
            <Users className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Schedule;