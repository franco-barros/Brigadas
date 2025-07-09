export interface ActivityLocation {
  id: string;
  icon: "map-pin" | "home" | "school"; // acá no ReactNode, sino string literal
  title: string;
  text: string;
  badge: string;
}
