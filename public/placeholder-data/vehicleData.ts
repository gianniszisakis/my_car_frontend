import { VehicleData } from "@/models/vehicleModel";

const vehicleData: VehicleData = {
  vehicle: {
    brand: "Opel",
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
      comments:
        "Όλα σε καλή κατάσταση, Όλα σε καλή κατάσταση, Όλα σε καλή κατάσταση",
      cost_eur: "120",
      next_service: {
        mileage_km: "40000",
        date: "22-12-2026",
      },
    },
    {
      service_id: "a3f4c1b2e6d7f891",
      inspection_date: "12-03-2025",
      mileage_km: "25000",
      service_type: "Γενικό",
      checks: ["Λάδια", "Φίλτρο Λαδιού", "Φίλτρο Αέρα", "Φίλτρο Καμπίνας"],
      comments: "Όλα σε καλή κατάσταση",
      cost_eur: "80",
      next_service: {
        mileage_km: "40000",
        date: "22-03-2026",
      },
    },
    {
      service_id: "a3f4c1b2e6d7f892",
      inspection_date: "03-01-2024",
      mileage_km: "29000",
      service_type: "Τακτικό",
      checks: ["Λάδια", "Φίλτρο Λαδιού", "Φίλτρο Αέρα", "Φίλτρο Καμπίνας"],
      comments: "Όλα σε καλή κατάσταση",
      cost_eur: "90",
      next_service: {
        mileage_km: "40000",
        date: "10-02-2025",
      },
    },
  ],
  insurance: [
    {
      last_insurance_date: "01-06-2024",
      next_renewal_date: "01-06-2025",
      insurance_type: "Πλήρης Κάλυψη",
      insurance_company: "Allianz",
      glass_breakage: true,
      weather_conditions: true,
      fire: true,
      riots: false,
      theft: true,
      civil_liability: true,
      accident_assistance: true,
      legal_protection: true,
    },
  ],
};

export default vehicleData;
