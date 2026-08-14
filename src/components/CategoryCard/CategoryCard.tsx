import "./CategoryCard.css";

interface CategoryCardProps {
  icon: string;
  name: string;
  onClick?: () => void;
  active?: boolean;
}

function CategoryCard({
  icon,
  name,
  onClick,
  active = false,
}: CategoryCardProps) {
  return (
    <button
      className={`category-card ${active ? "category-card-active" : ""}`}
      onClick={onClick}
    >
      <span className="category-card-icon">{icon}</span>
      <strong>{name}</strong>
    </button>
  );
}

export default CategoryCard;
