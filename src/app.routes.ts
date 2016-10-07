import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./app/home";
import { AboutComponent } from "./app/about";
import { BackendComponent } from "./app/backend";

const routes: Routes = [
  { path: "",      component: HomeComponent},
  { path: "about", component: AboutComponent},
  { path: "backend", component: BackendComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
