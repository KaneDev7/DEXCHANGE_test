import React from 'react'


// Définir les types pour les variantes et les couleurs
type Variant = 
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subheading1"
  | "subheading2"
  | "body1"
  | "body2";

type Color = "primary" | "secondary" | "error" | "warning" | "info" | "success";

// Mapping des variantes vers les balises HTML correspondantes
const variantsMapping: Record<Variant, keyof JSX.IntrinsicElements> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subheading1: "h6",
  subheading2: "h6",
  body1: "p",
  body2: "p",
};
export default function Title() {
  return (
    <h2 className='text-[16px]'>Utilisateurs</h2>
  )
}
