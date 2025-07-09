export interface ActivityLocation {
  id: string;
  icon: "map-pin" | "home" | "school";
  title: string;
  text: string;
  badge: string;
}

export const activityData: ActivityLocation[] = [
  {
    id: "larman",
    icon: "map-pin",
    title: "Unión Vecinal Larman",
    text: "Uno de nuestros principales centros de operaciones, donde desarrollamos actividades educativas regulares y programas de apoyo escolar para niños y jóvenes de la comunidad.",
    badge: "Centro Principal",
  },
  {
    id: "esperanza",
    icon: "home",
    title: "Barrio Popular La Esperanza",
    text: "En este barrio desarrollamos programas de alfabetización y talleres de oficios, trabajando directamente con las familias para fortalecer el tejido social comunitario.",
    badge: "Programa Familiar",
  },
  {
    id: "alfonso-xiii",
    icon: "school",
    title: "Barrio Popular Alfonso XIII",
    text: "Aquí hemos establecido nuestro proyecto más ambicioso: la construcción de un aula propia donde brindamos educación complementaria y talleres especializados.",
    badge: "Aula Propia",
  },
];
