import { FiPlusCircle } from "react-icons/fi";
import { CreateHouseModal } from "../CreateHouseModal/CreateHouseModal";
import { Filters } from "../Filter/Filters";
import { useState } from "react";

type TableHeaderProps = {
  uniqueAnimals: string[];
  setColumnFilters: (selectedFilters: { id: string; value: string }[]) => void;
};

export const TableHeader = ({
  uniqueAnimals,
  setColumnFilters,
}: TableHeaderProps) => {
  const [showCreateModal, setShowCreateModal] = useState(false);

  return (
    <div className="table_header">
      <FiPlusCircle
        style={{ cursor: "pointer" }}
        onClick={() => setShowCreateModal(true)}
      />
      <Filters animals={uniqueAnimals} onFilterSelected={setColumnFilters} />
      <CreateHouseModal
        showModal={showCreateModal}
        handleClose={() => setShowCreateModal(false)}
      />
    </div>
  );
};
