import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AngularCard } from "@/components/ui/angular-card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, MapPin, Calendar, X, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MyClasses = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("upcoming");

  const myClasses = [
    {
      id: 1,
      name: "Spinning",
      instructor: "Carlos Silva",
      date: "Hoje",
      time: "18:00",
      duration: "45 min",
      academy: "PowerFit Academia",
      status: "confirmed",
      canCancel: true,
      expiresIn: "2h 30min"
    },
    {
      id: 2,
      name: "Yoga",
      instructor: "Maria Oliveira", 
      date: "Amanhã",
      time: "17:00",
      duration: "50 min",
      academy: "Strong Gym",
      status: "pending",
      canCancel: true,
      expiresIn: "26h 30min"
    },
    {
      id: 3,
      name: "CrossFit",
      instructor: "Ana Santos",
      date: "Sex, 13/12",
      time: "19:30",
      duration: "60 min", 
      academy: "PowerFit Academia",
      status: "confirmed",
      canCancel: true,
      expiresIn: "74h 30min"
    }
  ];

  const completedClasses = [
    {
      id: 4,
      name: "Pilates",
      instructor: "Lucia Ferreira",
      date: "Ontem",
      time: "20:00",
      academy: "Strong Gym",
      status: "completed",
      duration: "55 min",
      canCancel: false,
      expiresIn: ""
    },
    {
      id: 5,
      name: "Zumba", 
      instructor: "João Costa",
      date: "Seg, 09/12",
      time: "18:30",
      academy: "Fitness Center",
      status: "completed",
      duration: "45 min",
      canCancel: false,
      expiresIn: ""
    }
  ];

  const handleCancel = (classId: number) => {
    console.log("Canceling class:", classId);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmed":
        return <Badge className="bg-primary text-primary-foreground">Confirmada</Badge>;
      case "pending":
        return <Badge variant="outline" className="border-primary text-primary">Pendente</Badge>;
      case "completed":
        return <Badge variant="secondary">Concluída</Badge>;
      default:
        return null;
    }
  };

  const displayClasses = selectedTab === "upcoming" ? myClasses : completedClasses;

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="clip-angular bg-card p-6 shadow-card">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold text-foreground">
            Suas <span className="text-primary">Aulas</span>
          </h1>
          <p className="text-sm text-muted-foreground">
            Você está no caminho certo! <span className="text-primary">Bora treinar 💪</span>
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="p-4">
        <div className="flex gap-2">
          <Button
            variant={selectedTab === "upcoming" ? "default" : "outline"}
            size="sm"
            className="flex-1"
            onClick={() => setSelectedTab("upcoming")}
          >
            Próximas
          </Button>
          <Button
            variant={selectedTab === "completed" ? "default" : "outline"}
            size="sm"
            className="flex-1"
            onClick={() => setSelectedTab("completed")}
          >
            Histórico
          </Button>
        </div>
      </div>

      {/* Classes List */}
      <div className="px-4 space-y-4">
        {displayClasses.length === 0 ? (
          <div className="text-center py-12 space-y-4">
            <Calendar className="w-12 h-12 text-muted-foreground mx-auto" />
            <div className="space-y-2">
              <p className="text-foreground font-medium">
                {selectedTab === "upcoming" ? "Nenhuma aula agendada" : "Nenhuma aula concluída"}
              </p>
              <p className="text-sm text-muted-foreground">
                {selectedTab === "upcoming" 
                  ? "Que tal agendar uma aula?" 
                  : "Suas aulas concluídas aparecerão aqui"
                }
              </p>
            </div>
            {selectedTab === "upcoming" && (
              <Button 
                variant="fitness" 
                onClick={() => navigate("/schedule")}
              >
                Encontrar Aulas
              </Button>
            )}
          </div>
        ) : (
          displayClasses.map((classItem) => (
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
                    {selectedTab === "upcoming" && getStatusBadge(classItem.status)}
                    {selectedTab === "completed" && (
                      <CheckCircle className="w-4 h-4 text-primary" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {classItem.instructor}
                  </p>
                </div>
                
                <div className="text-right space-y-1">
                  <div className="text-sm font-medium text-foreground">
                    {classItem.date}
                  </div>
                  <div className="text-xl font-bold text-primary">
                    {classItem.time}
                  </div>
                  {selectedTab === "upcoming" && classItem.duration && (
                    <div className="text-xs text-muted-foreground">
                      {classItem.duration}
                    </div>
                  )}
                </div>
              </div>

              {/* Class Details */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  {classItem.academy}
                </div>
                
                {selectedTab === "upcoming" && classItem.expiresIn && (
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">
                      Confirme até: <span className="text-primary font-medium">{classItem.expiresIn}</span>
                    </span>
                  </div>
                )}
              </div>

              {/* Actions */}
              {selectedTab === "upcoming" && classItem.canCancel && (
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => handleCancel(classItem.id)}
                  >
                    <X className="w-4 h-4 mr-2" />
                    Cancelar
                  </Button>
                  {classItem.status === "pending" && (
                    <Button
                      variant="fitness"
                      size="sm"
                      className="flex-1"
                    >
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Confirmar
                    </Button>
                  )}
                </div>
              )}
            </AngularCard>
          ))
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 clip-angular bg-card p-4 shadow-card">
        <div className="flex justify-around">
          <Button variant="ghost" size="sm" onClick={() => navigate("/map")}>
            <MapPin className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="sm" onClick={() => navigate("/schedule")}>
            <Clock className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="sm" onClick={() => navigate("/my-classes")}>
            <Users className="w-5 h-5 text-primary" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MyClasses;