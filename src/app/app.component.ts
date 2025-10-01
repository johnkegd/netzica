import { Component } from "@angular/core";
import { NavigationComponent } from "./components/navigation/navigation";
import { AppFooter } from "./components/app.footer";
import { RightAlignedImage } from "./components/marketing/right-aligned-image/right-aligned-image";
import { ThreeTiers } from "./components/threetiers/threetiers";
import { FeaturesTimelineComponent } from "./components/features-timeline/features-timeline";
import { SimpleBanner } from "./components/marketing/simple-banner/simple-banner";
import { ContactFormComponent } from "./components/contact-form/contact-form";
@Component({
  selector: "app-root",
  imports: [
    NavigationComponent,
    AppFooter,
    RightAlignedImage,
    ThreeTiers,
    FeaturesTimelineComponent,
    SimpleBanner,
    ContactFormComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {}
