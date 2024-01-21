import { FiPlusCircle } from "react-icons/fi";
import { CreateHouseModal } from "../CreateHouseModal/CreateHouseModal";
import { Filters } from "../Filter/Filters";
import { useState } from "react";
import { HouseDto } from "../../app-common/types";

type TableHeaderProps = {
  uniqueAnimals: string[];
  setColumnFilters: (selectedFilters: { id: string; value: string }[]) => void;
  setHouses: (rows: HouseDto[]) => void;
};

export const TableHeader = ({
  uniqueAnimals,
  setColumnFilters,
  setHouses,
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
        setHouses={setHouses}
      />
    </div>
  );
};
