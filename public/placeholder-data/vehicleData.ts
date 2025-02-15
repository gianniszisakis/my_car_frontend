import { VehicleData } from "@/models/vehicleModel";

const vehicleData: VehicleData = {
  vehicle: {
    model: "Corsa",
    year: "2017",
    body_type: "hatchback",
    vin: "230101010010101001",
    fuel_type: "Βενζίνη",
    engine_capacity_cc: "1200",
    horsepower_hp: "64",
    transmission_type: "Χειροκίνητο",
    fuel_consumption_l_per_100km: "6",
  },
  services: [
    {
      service_id: "a3f4c1b2e6d7f890",
      inspection_date: "12-02-2025",
      mileage_km: "20000",
      service_type: "Τακτικό",
      checks: ["Λάδια", "Φίλτρο Λαδιού", "Φίλτρο Αέρα", "Φίλτρο Καμπίνας"],
      comments: "Όλα σε καλή κατάσταση",
      cost_eur: "120",
      next_service: {
        mileage_km: "40000",
        date: "22-12-2026",
      },
    },
  ],
};

export default vehicleData;
