import { ChaletBuilder } from "./chalet";
import { HotelBuilder } from "./hotel";
import { JefeDeObra } from "./jefe-de-obra";
import { RestaurantBuilder } from "./restaurant";

const jefeDeObra = new JefeDeObra();
const chaletBuilder = new ChaletBuilder();
const hotelBuilder = new HotelBuilder();
const restaurantBuilder = new RestaurantBuilder();

jefeDeObra.setBuilder(chaletBuilder);

try {
  jefeDeObra.buildPremiumProperty();
  console.log("Chalet construida");
} catch (error: any) {
  console.log(error.message);
} finally {
  console.log("Premium House; Contrato Finalizado");
}

try {
  jefeDeObra.buildBasicProperty();
  console.log("Chalet construida");
} catch (error: any) {
  console.log(error.message);
} finally {
  console.log("Minimal House; Contrato Finalizado");
}

jefeDeObra.setBuilder(hotelBuilder);

try {
  jefeDeObra.buildStandardProperty();
  console.log("Hotel construida");
} catch (error: any) {
  console.log(error.message);
} finally {
  console.log("Standard Hotel; Contrato Finalizado");
}
