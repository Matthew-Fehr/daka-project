import BASE_URL from "../other/host.config";
import instance from "../other/axios";
import Property from "../models/Property";

export default async function getPropertyByIDFromDB(id:number): Promise<{
  property: Property;
}> {
  let property: Property = {
    id: 0,
    title_de: "Titel",
    title_en: "Title",
    title_es: "Titulo",
    description_de: "Beschreibung",
    description_en: "Description",
    description_es: "Descripción",
    location: "Loma Plata",
    google_maps: "www.google.com",
    type: "house",
    area: 0,
    area_unit: "m²",
    price: 0,
    currency: "usd",
    price_unit: "sqmeter",
    publish_date: new Date(),
    images: ["/media/images/DAKA_Icon.jpg"]
  }

  await instance
    .get(`${BASE_URL}/properties/${id}`)
    .then((res) => {
      property = res.data;
    })
    .catch((error: any) => {
      throw new Error(
        `Error in 'getPropertiesFromDB(${BASE_URL}/properties)': ${error.message}`
      );
    });
  return { property };
}
