/* istanbul ignore file */
interface Property {
  id: number;
  title_de: string;
  title_en: string;
  title_es: string;
  description_de: string;
  description_en: string;
  description_es: string;
  location: string;
  google_maps: string;
  type: string;
  area: number;
  area_unit: string;
  price: number;
  currency: string;
  price_unit: string;
  publish_date: Date;
  images: string[];
}

export default Property;
