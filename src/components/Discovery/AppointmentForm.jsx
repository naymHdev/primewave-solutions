"use client";

import { InlineWidget } from "react-calendly";

const AppointmentForm = () => {
  // Defining the correct URL with query parameters
  const calendlyUrl = "https://calendly.com/hello-primewave/30min";

  return (
    <div className="mt-20">
      <div>
        <InlineWidget url={calendlyUrl} />
      </div>
    </div>
  );
};

export default AppointmentForm;
