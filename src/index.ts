/// <reference types="@types/google.maps" />
// Importação das classes:
import { Company } from './Company';
import { User } from './User';
import { CustomMap } from './CustomMap'

// Instâncias das classes:
const user = new User();
const company = new Company();
const customMap = new CustomMap('map');

customMap.addMarker(user);
customMap.addMarker(company);