import React, { FC, ReactNode } from "react";
import cn from "classnames";
import "./typography.css";

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

// Définir les props du composant
interface TypographyProps {
  variant?: Variant;
  color?: Color;
  children: ReactNode;
  [key: string]: any; // pour accepter tous les autres attributs HTML valides
}

// Créer le composant fonctionnel avec le typage TypeScript
export const Typography: FC<TypographyProps> = ({ variant = "body1", color, children, ...props }) => {
  const Component = variant ? variantsMapping[variant] : "p";

  return (
    <Component
      className={cn({
        [`typography--variant-${variant}`]: variant,
        [`typography--color-${color}`]: color,
      })}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Typography;
