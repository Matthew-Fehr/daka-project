import BASE_URL from "../other/host.config";
import instance from "../other/axios";
import Property from "../models/Property";

export default async function getPropertiesFromDB(): Promise<{
  propertyList: Property[];
}> {
  let propertyList: Property[] = [];

  await instance
    .get(`${BASE_URL}/properties`)
    .then((res) => {
      propertyList = res.data;
    })
    .catch((error: any) => {
      throw new Error(
        `Error in 'getPropertiesFromDB(${BASE_URL}/properties)': ${error.message}`
      );
    });
  return { propertyList };
}
