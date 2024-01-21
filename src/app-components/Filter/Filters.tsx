import { useState } from "react";
import { FaFilter } from "react-icons/fa6";

type FiltersProps = {
  animals: string[];
  onFilterSelected: (selectedFilters: { id: string; value: string }[]) => void;
};

export const Filters = ({ animals, onFilterSelected }: FiltersProps) => {
  const [selectedAnimals, setSelectedAnimals] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleFilterSelected = (selectedAnimal: string) => {
    const updatedAnimals = selectedAnimals.includes(selectedAnimal)
      ? selectedAnimals.filter((animal) => animal !== selectedAnimal)
      : [...selectedAnimals, selectedAnimal];

    setSelectedAnimals(updatedAnimals);

    const selectedFilters = updatedAnimals.map((animal) => ({
      id: "animal",
      value: animal,
    }));

    onFilterSelected(selectedFilters);
  };

  return (
    <div className={`filter-popup ${isVisible ? "visible" : ""}`}>
      <div className="filter-header" onClick={toggleVisibility}>
        <FaFilter className="filter-icon" />
        <span className="filter-text">Filter</span>
      </div>
      <div className="filter-options">
        {animals.map((animal, index) => (
          <div
            key={index}
            onClick={() => handleFilterSelected(animal)}
            className={selectedAnimals.includes(animal) ? "selected" : ""}
          >
            {animal}
          </div>
        ))}
      </div>
    </div>
  );
};
