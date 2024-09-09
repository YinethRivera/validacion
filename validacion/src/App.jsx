import React, { useState } from "react";
import AgeVerificationModal from "../src/components/Edad"; 

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      {isModalOpen && <AgeVerificationModal onClose={handleCloseModal} />}
      {!isModalOpen && <p>El modal se ha cerrado.</p>}
    </div>
  );
};

export default App;
