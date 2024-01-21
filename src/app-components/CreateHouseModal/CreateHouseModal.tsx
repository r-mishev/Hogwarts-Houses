import { useState } from "react";

const animalOptions = ["Giraffe", "Dolphin", "Armadillo", "Unicorn"];

export const CreateHouseModal = ({ showModal, handleClose, setHouses }) => {
  const [formData, setFormData] = useState({
    name: "",
    animal: "",
    ghost: "",
    commonRoom: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    animal: "",
    ghost: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (formData.name.length < 5 || formData.name.length > 20) {
      newErrors.name = "Name must be between 5 and 20 characters";
      isValid = false;
    } else {
      newErrors.name = "";
    }

    if (!animalOptions.includes(formData.animal)) {
      newErrors.animal = "Please select a valid animal";
      isValid = false;
    } else {
      newErrors.animal = "";
    }

    if (!formData.ghost || formData.ghost.toLowerCase().includes("arnold")) {
      newErrors.ghost = "Ghost name is required and cannot contain Arnold";
      isValid = false;
    } else {
      newErrors.ghost = "";
    }

    setErrors(newErrors);

    return isValid;
  };

  function handleSubmit(event) {
    event.preventDefault();

    if (validateForm()) {
      const newHouse = {
        id: Math.floor(Math.random() * 1000),
        name: formData.name,
        animal: formData.animal,
        ghost: formData.ghost,
        commonRoom: formData.commonRoom,
      };
      setHouses((prevHouses) => [...prevHouses, newHouse]);
      handleClose();
    }
  }

  return (
    <div className={`modal ${showModal ? "show" : ""}`}>
      <div className="modal-overlay" onClick={handleClose}></div>
      <div className="modal-content">
        <div className="modal-header">
          <h2 style={{ color: "aliceblue" }}>Hogwarts House Registration</h2>
          <button className="close-btn" onClick={handleClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <span className="error">{errors.name}</span>
            </div>

            <div className="form-group">
              <label htmlFor="animal">Animal</label>
              <select
                id="animal"
                value={formData.animal}
                onChange={(e) =>
                  setFormData({ ...formData, animal: e.target.value })
                }
              >
                <option value="" disabled>
                  Select an animal
                </option>
                {animalOptions.map((animal) => (
                  <option key={animal} value={animal}>
                    {animal}
                  </option>
                ))}
              </select>
              <span className="error">{errors.animal}</span>
            </div>

            <div className="form-group">
              <label htmlFor="ghost">Ghost</label>
              <input
                type="text"
                id="ghost"
                value={formData.ghost}
                onChange={(e) =>
                  setFormData({ ...formData, ghost: e.target.value })
                }
              />
              <span className="error">{errors.ghost}</span>
            </div>

            <div className="form-group">
              <label htmlFor="commonRoom">Common Room</label>
              <input
                type="text"
                id="commonRoom"
                value={formData.commonRoom}
                onChange={(e) =>
                  setFormData({ ...formData, commonRoom: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
